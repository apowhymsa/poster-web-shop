require('dotenv').config()
const axios = require('axios');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const express = require('express');
const {createHash} = require("crypto");
const cors = require('cors');
const LiqPay = require('liqpay');
const app = express();

// const liqpay = new LiqPay(process.env.LIQPAY_PUBLIC_KEY, process.env.LIQPAY_PRIVATE_KEY)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
    credentials:true
}));

const str_to_sign = function str_to_sign(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    const sha1 = crypto.createHash('sha1');
    sha1.update(str);
    return sha1.digest('base64');
};

app.get('/', (req, res) => {
    res.send(process.env.LIQPAY_PUBLIC_KEY);
})


app.post('/result', (req, res) => {
    res.send('result');
})

app.post('/payment', (req, res) => {
    const {amount, description, posterData} = req.body;

    const params = {
        action: 'hold',
        amount: amount,
        currency: 'UAH',
        description: description,
        info: JSON.stringify({
            products: posterData.products.map(product => {
                return {
                    count: product.count,
                    product_id: product.product_id
                }
            }),
            phone: posterData.phone,
            shippingAddress: posterData.shippingAddress,
            name: posterData.name
        }),
        // public_key: process.env.LIQPAY_PUBLIC_KEY,
        // private_key: process.env.LIQPAY_PRIVATE_KEY,
        server_url: 'https://poster-shop-server.onrender.com/payment/callback',
        result_url: 'https://poster-shop-server.onrender.com/result'
    }

    const data = Buffer.from(JSON.stringify(params)).toString('base64');
    const signature = str_to_sign(process.env.LIQPAY_PRIVATE_KEY + data + process.env.LIQPAY_PRIVATE_KEY);

    axios.post('https://www.liqpay.ua/api/3/checkout', {
        data: data,
        signature: signature
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
        .then(data => {
            const paymentURL = data.request.res.responseUrl;
            res.status(200).send({paymentURL: paymentURL});
        })
        .catch(error => res.status(404).send(JSON.stringify({
            errorCode: error.code,
            errorNo: error.errno
        })));
})

app.post('/payment/callback', (req, res) => {
    const encodedData = req.body.data;
    const signature = req.body.signature;

    const decodedData = Buffer.from(encodedData, 'base64').toString('utf-8');
    const {payment_id, status, info, order_id, amount} = JSON.parse(decodedData);
    const action  = "hold_completion";
    console.log(decodedData);

    const origSig = str_to_sign(
        process.env.LIQPAY_PRIVATE_KEY +
        encodedData +
        process.env.LIQPAY_PRIVATE_KEY,
    );
    // POSTER_API_KEY

    const orderParams = {
        spot_id: 1,
        phone: JSON.parse(info).phone,
        products: JSON.parse(info).products,
        first_name: JSON.parse(info).name,
        comment: `Адрес доставки указаный при оплате: ${JSON.parse(info).shippingAddress}`,
        payment: {
            type: 1,
            sum: amount,
            currency: "UAH"
        }
    }

    console.log(orderParams);

    if (signature === origSig) {

        console.log(order_id);

        if (status === 'hold_wait') {
            axios.post(`https://joinposter.com/api/incomingOrders.createIncomingOrder?token=${process.env.POSTER_API_KEY}`, orderParams, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((data) => {
                    console.log('addded')
                    console.log(data.data)
                    axios.post('https://www.liqpay.ua/api/request', {
                        action: "hold_completion",
                        version: "3",
                        order_id: order_id
                    })
                })
                .catch((error) => {
                    console.log('error')
                    axios.post('https://www.liqpay.ua/api/request', {
                        action: "refund",
                        version: "3",
                        order_id: order_id
                    })
                })
        }
    } else {
        console.log(false, signature, origSig);
    }
})

app.listen(process.env.PORT, () => {
    console.log('server running')
})