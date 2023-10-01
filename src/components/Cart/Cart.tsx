import './Cart.scss'
import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import QuantityItemButton from '@/components/UI/QuantityItemButton/QuantityItemButton'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useAppDispatch, useAppSelector } from '@/utils/store/hooks'
import CartItem from '@/components/Cart/CartItem/CartItem'
import cartItem from '@/components/Cart/CartItem/CartItem'
import { clearCart } from '@/utils/store/cartSlice'

type Props = {
	isOpen: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}
const Cart = (props: Props) => {
	const { setOpen, isOpen } = props
	const cart = useAppSelector(state => state.cartReducer).cart
	const dispatch = useAppDispatch()

<<<<<<< HEAD
	return (
		<div className={isOpen ? 'product-cart cart_active' : 'product-cart'}>
			<h3 className='font-medium text-[16px] text-center'>Корзина</h3>
			{cart.length <= 0 ? (
				<div>Корзина пустая</div>
			) : (
				<div className='cart-container flex flex-col gap-y-5 flex-1'>
					<p
						className='text-[15px] text-right mt-5 transition-colors hover:text-rose-400 cursor-pointer'
						onClick={() => dispatch(clearCart())}
					>
						Очистить корзину
					</p>
					{cart.map(cartItem => (
						<CartItem
							key={cartItem.product.product_id}
							cartItem={cartItem}
							quantityItem={cartItem.quantity}
						/>
					))}
				</div>
			)}
			{cart.length > 0 ? (
				<div className='mt-5 flex flex-col gap-y-2'>
					<div className='flex justify-between'>
						<span className='text-[15px]'>Полная цена</span>
						<span className='text-[15px] font-medium'>
							&#8372;{' '}
							{cart.reduce(
								(acc, cartItem) =>
									acc +
									Number(cartItem.product.price['1'].slice(0, -2)) *
										cartItem.quantity,
								0
							)}
						</span>
					</div>
					<button className=' w-full h-10 transition-colors bg-rose-400 hover:bg-rose-500 rounded text-white'>
						Продолжить
					</button>
				</div>
			) : null}
		</div>
	)
}
=======
  return (
    <div className={isOpen ? "product-cart cart_active gap-y-10 drop-shadow-2xl" : "product-cart"}>
      <h3 className="font-medium text-[16px] text-center">Корзина</h3>
      {cart.length <= 0 ? (
        <div 
        
        className="flex flex-col justify-between gap-y-10 items-center"> 
          <Image          
          // src="/flower.svg"
          src="/cart_icon.svg"

          alt="Product Image"
          width={0}
          height={0}
          sizes="20vw"
          style={{
            width: "40%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "8px",
            objectPosition: "center center",
            aspectRatio: "1 / 1",
          }}
          placeholder="blur"
          blurDataURL="/cart_icon.svg"
          priority
        />
        <h2 className="font-bold">Товаров нет</h2>
        <p className="text-neutral-400 text-center"> Для оформления заказа добавьте товар в корзину</p>
        </div>
      ) : (
        <div className="cart-container flex flex-col gap-y-5 flex-1">
          <p
            className="text-[15px] text-right mt-5 transition-colors hover:text-rose-400 cursor-pointer"
            onClick={() => dispatch(clearCart())}
          >
            Очистить корзину
          </p>
          {cart.map((cartItem) => (
            <CartItem
              key={cartItem.product.product_id}
              cartItem={cartItem}
              quantityItem={cartItem.quantity}
            />
          ))}
        </div>
      )}
      {cart.length > 0 ? (
        <div className="mt-5 flex flex-col gap-y-2">
          <div className="flex justify-between">
            <span className="text-[15px]">Полная цена</span>
            <span className="text-[15px] font-medium">
              &#8372;{" "}
              {cart.reduce(
                (acc, cartItem) =>
                  acc +
                  Number(cartItem.product.price["1"].slice(0, -2)) *
                    cartItem.quantity,
                0,
              )}
            </span>
          </div>
          <button className=" w-full h-10 transition-colors bg-rose-400 hover:bg-rose-500 rounded text-white">
            Продолжить
          </button>
        </div>
      ) : null}
    </div>
  );
};
>>>>>>> 0b36d4b6384269e2ff303513e3d253c5fc80520e

export default Cart
