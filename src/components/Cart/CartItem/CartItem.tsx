import Image from "next/image";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { Cart, updateQuantity } from "@/utils/store/cartSlice";
import { useAppDispatch } from "@/utils/store/hooks";
import QuantityItemButton from "@/components/UI/QuantityItemButton/QuantityItemButton";

type Props = {
  cartItem: Cart;
  quantityItem: number;
};

const CartItem = ({ quantityItem, cartItem }: Props) => {
  console.log(quantityItem);

  const [quantity, setQuantity] = useState(quantityItem);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setQuantity(quantityItem);
  }, [quantityItem]);

  useEffect(() => {
    dispatch(
      updateQuantity({
        product: cartItem.product,
        quantity: quantity,
      }),
    );
  }, [quantity]);
  return (
    <div
      key={cartItem.product.product_id}
      className="relative cart-item flex gap-x-2 after:absolute after:-bottom-[10px] after:w-full after:h-[0.5px] after:bg-[#e5e7eb]"
    >
      <Image
        src={
          cartItem.product.photo
            ? `https://poster-shop.joinposter.com${cartItem.product.photo}`
            : "/flower_image.jpg"
        }
        alt="Product Image"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100px",
          height: "auto",
          objectFit: "cover",
          borderRadius: "8px",
          objectPosition: "center center",
          aspectRatio: "1 / 1",
        }}
        priority
      />
      <div className="flex flex-col flex-1 justify-between py-4">
        <div className="item-description flex justify-between items-center">
          <span className="text-[15px]">{cartItem.product.product_name}</span>
          <span className="text-[15px] font-medium">
            &#8372; {cartItem.product.price["1"].slice(0, -2)}
          </span>
        </div>
        <div className="item-quantity-edit flex gap-x-4">
          <button
            className="flex items-center justify-center bg-rose-400 transition-colors hover:bg-rose-500 w-7 h-7 rounded"
            onClick={() => {
              quantity > 1 && setQuantity((prev) => prev - 1);
            }}
          >
            <MinusIcon className="h-6 w-6 text-white" />
          </button>
          <input
            value={quantityItem}
            onChange={(event) => setQuantity(Number(event.target.value))}
            min={1}
            max={100}
            type="number"
            className="block flex-1 rounded-md border-gray-300 shadow-sm focus:border-rose-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 h-7 text-sm"
          />
          <button
            className="flex items-center justify-center bg-rose-400 transition-colors hover:bg-rose-500 w-7 h-7 rounded"
            onClick={() => {
              quantity < 100 && setQuantity((prev) => prev + 1);
            }}
          >
            <PlusIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
