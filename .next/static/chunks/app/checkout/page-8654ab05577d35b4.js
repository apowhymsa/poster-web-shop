(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{2505:function(e,t,r){Promise.resolve().then(r.bind(r,7216))},7216:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var s=r(7437),a=r(2265),o=r(8464),n=r(1865),c=r(4438),l=r(9978),i=r(2122),d=r(2418),u=r(2464),p=r(9222),m=r(4748),g=function(e){var t=new window.google.maps.Geocoder;return new Promise(function(r,s){t.geocode(e,function(t,a){"OK"!==a&&s(a),!e.address&&e.componentRestrictions&&(console.error("\uD83D\uDCA1 use-places-autocomplete: Please provide an address when using getGeocode() with the componentRestrictions."),r(t)),r(t)})})},h=function(e){var t=e.geometry.location,r=t.lat,s=t.lng;return{lat:r(),lng:s()}},f=()=>{let{isLoaded:e}=(0,m.Db)({googleMapsApiKey:"AIzaSyAOgRCpjCpoIfNeyDL5CxW2nVt0hD1iexo",libraries:["places","geocoding"]}),[t,r]=(0,a.useState)(!0),[f,x]=(0,a.useState)(!0),b=(0,o.C)(e=>e.cartReducer.cart),[y,v]=(0,a.useState)(),j=(0,o.T)(),[w,N]=(0,a.useState)(null);(0,a.useRef)();let[I,S]=(0,a.useState)(1),[_,k]=(0,a.useState)(""),{register:C,handleSubmit:q,formState:{errors:R}}=(0,n.cI)();(0,a.useEffect)(()=>{_.trim().length>0&&(location.href=_,k(""))},[_]),(0,a.useEffect)(()=>{r(!0);let e=localStorage.getItem("authUserId");(0,u.Aj)(i.I,async t=>{t?e&&(console.log("auth",e),Promise.all([F(e),Z(e)]).then(()=>r(!1))):(j((0,d.RV)([])),r(!1))})},[]);let A=async(e,t,r,s)=>new Promise(a=>{let o=new window.google.maps.DistanceMatrixService;o.getDistanceMatrix({destinations:[{lat:r,lng:s}],origins:[{lat:e,lng:t}],travelMode:window.google.maps.TravelMode.DRIVING},e=>{a(e)})}),U=async()=>{if(null!=w){let e=w.getPlace(),t=e.name,r=e.business_status,s=e.formatted_address;console.log("Name: ".concat(t)),console.log("Business Status: ".concat(r)),console.log("Formatted Address: ".concat(s));let a=await g({address:s}),{lat:o,lng:n}=await h(a[0]);A(47.939615,33.426008,o,n).then(e=>console.log("res",e)),console.log(o,n)}},Z=async e=>{var t;let r=(0,l.JU)(i.db,"users",e.toString()),s=await (0,l.QT)(r);j((0,d.RV)((null===(t=s.data())||void 0===t?void 0:t.cart)||[]))},F=async e=>{var t,r;let s=(0,l.JU)(i.db,"users",e.toString()),a=await (0,l.QT)(s),o=null===(t=a.data())||void 0===t?void 0:t.name,n=null===(r=a.data())||void 0===r?void 0:r.phone;v({...y,name:o,phone:n})};function P(e){let t=e.target;S(Number(t.value))}return t||!e?(0,s.jsx)("div",{children:"Loading..."}):(0,s.jsx)("div",{id:"liqpay_checkout",className:"shadow mx-24 my-14 p-5",children:b.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"text-xl font-bold border-b py-2",children:"Заказ"}),(0,s.jsxs)("div",{className:"flex gap-x-14 justify-center pt-6",children:[(0,s.jsxs)("form",{className:"flex-1 flex flex-col gap-y-5",onSubmit:q((e,t)=>{x(!1);let r=b.reduce((e,t)=>e+Number(t.product.price["1"].slice(0,-2))*t.quantity,0),s=b.map(e=>"".concat(e.product.product_name," (").concat(e.quantity," ед.)")).join(" "),a={amount:r,description:"Оплата товаров: ".concat(s),posterData:{phone:e.phone,products:b.map(e=>({product_id:Number(e.product.product_id),count:Number(e.quantity)})),shippingAddress:1===I?"Самовывоз":e.shippingAddress,name:e.name}};p.Z.post("https://f9p739-42889.csb.app/payment",{...a},{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then(e=>{console.log(e.data,e.status),200===e.status?k(e.data.paymentURL):console.error("ERROR",e.data)}).catch(e=>console.error(e)).finally(()=>x(!0))}),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"name",className:"mb-1 block text-sm font-bold text-gray-700 ".concat(R.name?'after:ml-0.5 after:text-red-500 after:content-["*"]':null),children:"Имя"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("input",{readOnly:!!y.name,value:y.name,className:"block w-full rounded-md shadow-sm ".concat(R.name?"border-red-300 focus:border-red-300 focus:ring focus:ring-red-200":"border-gray-300 focus:border-primary-400 focus:ring focus:ring-primary-200","  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"),...C("name",{required:{value:!0,message:"Поле обязательное для заполнения"}}),type:"text",name:"name"})}),R.name?(0,s.jsx)("p",{className:"mt-1 text-sm text-red-500",children:R.name.message}):null]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"phone",className:"mb-1 block text-sm font-bold text-gray-700 ".concat(R.phone?'after:ml-0.5 after:text-red-500 after:content-["*"]':null),children:"Телефон"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("input",{readOnly:!!y.phone,value:y.phone,className:"block w-full rounded-md shadow-sm ".concat(R.phone?"border-red-300 focus:border-red-300 focus:ring focus:ring-red-200":"border-gray-300 focus:border-primary-400 focus:ring focus:ring-primary-200","  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"),...C("phone",{required:{value:!0,message:"Поле обязательное для заполнения"}}),placeholder:"Например: +380686560665",type:"tel",name:"phone"})}),R.phone?(0,s.jsx)("p",{className:"mt-1 text-sm text-red-500",children:R.phone.message}):null]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex flex-col gap-y-2 mb-4",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("input",{onChange:P,value:"1",type:"radio",id:"delivery1",checked:1===I,name:"delivery",className:"h-4 w-4 rounded-full border-gray-300 text-rose-400 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"}),(0,s.jsx)("label",{htmlFor:"delivery1",className:"text-sm font-medium text-gray-700",children:"Самовывоз из магазина"})]}),(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsx)("div",{className:"flex h-5 items-center",children:(0,s.jsx)("input",{onChange:P,value:"2",type:"radio",id:"delivery2",checked:2===I,name:"delivery",className:"h-4 w-4 rounded-full border-gray-300 text-rose-400 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"})}),(0,s.jsxs)("label",{htmlFor:"delivery2",className:"text-sm",children:[(0,s.jsx)("div",{className:"font-medium text-gray-700",children:"Доставка по адресу"}),(0,s.jsx)("p",{className:"text-gray-500",children:"Укажите корректный адрес, стоимость доставки будет расчитываться на его основе!"})]})]})]}),2===I&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("label",{htmlFor:"shippingAddress",className:"mb-1 block text-sm font-bold text-gray-700 ".concat(R.shippingAddress?'after:ml-0.5 after:text-red-500 after:content-["*"]':null),children:"Адрес доставки"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)(m.F2,{onPlaceChanged:U,onLoad:e=>{N(e)},options:{componentRestrictions:{country:"ua"}},children:(0,s.jsx)("input",{className:"block w-full rounded-md shadow-sm ".concat(R.shippingAddress?"border-red-300 focus:border-red-300 focus:ring focus:ring-red-200":"border-gray-300 focus:border-primary-400 focus:ring focus:ring-primary-200","  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"),...C("shippingAddress",{required:{value:!0,message:"Поле обязательное для заполнения"}}),placeholder:"Например: Сичеславская 1/2",type:"text",name:"shippingAddress"})})}),R.shippingAddress?(0,s.jsx)("p",{className:"mt-1 text-sm text-red-500",children:R.shippingAddress.message}):null]})]}),(0,s.jsx)("button",{disabled:!f,className:"border border-rose-400 text-white bg-rose-400 px-4 py-2 rounded transition-colors hover:bg-rose-500",children:f?"Перейти к оплате":"Обработка..."})]}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsxs)("h3",{className:"text-right border-b pb-2",children:[(0,s.jsxs)("span",{children:["Всего к оплате: ₴"," "]}),b.reduce((e,t)=>e+Number(t.product.price["1"].slice(0,-2))*t.quantity,0)]}),(0,s.jsx)("div",{className:"pt-6 flex flex-col gap-y-6",children:b.map(e=>(0,s.jsx)(c.Z,{cartItem:e,quantityItem:e.quantity,inCheckout:!0},e.product.product_id))})]})]})]}):(0,s.jsx)("div",{children:"Нет доступа"})})}},4438:function(e,t,r){"use strict";var s=r(7437),a=r(6691),o=r.n(a),n=r(5106),c=r(5255),l=r(7227),i=r(2265),d=r(2418),u=r(8464),p=r(4913);t.Z=e=>{let{quantityItem:t,cartItem:r,inCheckout:a=!1}=e,[m,g]=(0,i.useState)(t),h=(0,p.Z)(m,500),f=(0,u.T)();return(0,i.useEffect)(()=>{g(t)},[t]),(0,i.useEffect)(()=>{console.log("debounce update"),f((0,d.$R)({product:r.product,quantity:m}))},[h]),(0,s.jsxs)("div",{className:"relative cart-item flex gap-x-2 after:absolute after:-bottom-[10px] after:w-full after:h-[0.5px] after:bg-[#e5e7eb]",children:[(0,s.jsx)("span",{className:"absolute top-0 right-0 w-5 h-5 cursor-pointer",title:"Удалить товар",onClick:()=>{f((0,d.wz)(r))},children:(0,s.jsx)(l.Z,{className:"h-5 w-5 text-black transition-colors hover:text-rose-400 "})}),(0,s.jsx)(o(),{src:r.product.photo?"https://poster-shop.joinposter.com".concat(r.product.photo):"/flower_image.jpg",alt:"Product Image",width:0,height:0,sizes:"100vw",style:{width:"100px",height:"auto",objectFit:"cover",borderRadius:"8px",objectPosition:"center center",aspectRatio:"1 / 1"},priority:!0}),(0,s.jsxs)("div",{className:"flex flex-col flex-1 justify-between py-5",children:[(0,s.jsxs)("div",{className:"item-description flex justify-between items-center",children:[(0,s.jsx)("span",{className:"text-[15px] overflow-ellipsis max-w-[175px] overflow-hidden whitespace-nowrap",title:r.product.product_name,children:r.product.product_name}),!a&&(0,s.jsxs)("span",{className:"text-[15px] font-medium",children:["₴ ",r.product.price["1"].slice(0,-2)]})]}),a?(0,s.jsx)("div",{children:(0,s.jsxs)("span",{children:["Цена: ","".concat(r.quantity," ед. x ").concat(r.product.price["1"].slice(0,-2)," грн = ").concat(r.quantity*Number(r.product.price["1"].slice(0,-2)))," грн"]})}):(0,s.jsxs)("div",{className:"item-quantity-edit flex gap-x-4",children:[(0,s.jsx)("button",{className:"flex items-center justify-center bg-rose-400 transition-colors hover:bg-rose-500 w-7 h-7 rounded",onClick:()=>{m>1&&g(e=>e-1)},children:(0,s.jsx)(n.Z,{className:"h-6 w-6 text-white"})}),(0,s.jsx)("input",{value:m,onChange:e=>g(Number(e.target.value)),min:1,max:100,type:"number",className:"block flex-1 rounded-md border-gray-300 shadow-sm focus:border-rose-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 h-7 text-sm"}),(0,s.jsx)("button",{className:"flex items-center justify-center bg-rose-400 transition-colors hover:bg-rose-500 w-7 h-7 rounded",onClick:()=>{m<100&&g(e=>e+1)},children:(0,s.jsx)(c.Z,{className:"h-6 w-6 text-white"})})]})]})]},r.product.product_id)}},4913:function(e,t,r){"use strict";var s=r(2265);t.Z=(e,t)=>{let[r,a]=(0,s.useState)(e);return(0,s.useEffect)(()=>{let r=setTimeout(()=>a(e),t);return()=>clearTimeout(r)},[e,t]),r}},2122:function(e,t,r){"use strict";r.d(t,{I:function(){return c},db:function(){return l}});var s=r(994),a=r(2464),o=r(9978);let n=(0,s.ZF)({apiKey:"AIzaSyByk7n5JzbWrLCffBJXGiXWnc8MZbe0JqU",authDomain:"poster-ecommerce-shop.firebaseapp.com",projectId:"poster-ecommerce-shop",storageBucket:"poster-ecommerce-shop.appspot.com",messagingSenderId:"14361184003",appId:"1:14361184003:web:d17bfd870e4195075bcb36",measurementId:"G-N1HBV39R4Y"}),c=(0,a.v0)(n),l=(0,o.ad)(n)},2418:function(e,t,r){"use strict";r.d(t,{$R:function(){return l},LL:function(){return d},RV:function(){return u},ZW:function(){return c},wz:function(){return i}});var s=r(8340),a=r(9978),o=r(2122);let n=(0,s.oM)({name:"cart",initialState:{cart:[]},reducers:{setCart:(e,t)=>{e.cart=t.payload,console.log("payload",t.payload)},setCartItem:(e,t)=>{let r=localStorage.getItem("authUserId"),s=e.cart.findIndex(e=>e.product.product_id===t.payload.product.product_id);-1!==s?e.cart[s].quantity+=t.payload.quantity:e.cart.push(t.payload),(0,a.pl)((0,a.JU)(o.db,"users",r.toString()),{cart:[...e.cart]},{merge:!0})},updateQuantity:(e,t)=>{let r=localStorage.getItem("authUserId"),s=e.cart.findIndex(e=>e.product.product_id===t.payload.product.product_id);e.cart[s].quantity=t.payload.quantity,(0,a.pl)((0,a.JU)(o.db,"users",r.toString()),{cart:[...e.cart]},{merge:!0})},deleteItem:(e,t)=>{let r=localStorage.getItem("authUserId");e.cart=e.cart.filter(e=>e.product.product_id!==t.payload.product.product_id),(0,a.pl)((0,a.JU)(o.db,"users",r.toString()),{cart:[...e.cart]},{merge:!0})},clearCart:e=>{let t=localStorage.getItem("authUserId");e.cart=[],(0,a.pl)((0,a.JU)(o.db,"users",t.toString()),{cart:[]},{merge:!0})}}}),{setCartItem:c,updateQuantity:l,deleteItem:i,clearCart:d,setCart:u}=n.actions;t.ZP=n.reducer},8464:function(e,t,r){"use strict";r.d(t,{C:function(){return o},T:function(){return a}});var s=r(3198);let a=()=>(0,s.I0)(),o=s.v9}},function(e){e.O(0,[358,214,910,454,522,452,971,596,744],function(){return e(e.s=2505)}),_N_E=e.O()}]);