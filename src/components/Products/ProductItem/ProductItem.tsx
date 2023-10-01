import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import "../Products.scss";
import { useAppDispatch } from "@/utils/store/hooks";
import { setCartItem } from "@/utils/store/cartSlice";
import products from "@/components/Products/Products";

type Props = {
  product: Product;
  isButtonVisible?: boolean;
};
const ProductItem = ({ product, isButtonVisible = true }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="product-item">
      <Link className="product-image" href={`/products/${product.product_id}`}>
        <Image
          src={
            product.photo_origin
              ? `https://poster-shop.joinposter.com${product.photo_origin}`
              : "/flower_image.jpg"
          }
          // src="/flower_image.jpg"
          alt="Product Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "8px",
            objectPosition: "center center",
            aspectRatio: "1 / 1",
          }}
          placeholder="blur"
          blurDataURL="/flower_image.jpg"
          priority
        />
      </Link>
      <div className="product-description">
        <Link
          href={`/products/${product.product_id}`}
          className="product-name"
          title={product.product_name}
        >
          {product.product_name}
        </Link>
        <span className="product-price">
          &#8372; {product.price["1"].slice(0, -2)}
        </span>
      </div>
      {isButtonVisible ? (
        <button
          onClick={() =>
            dispatch(
              setCartItem({
                product: product,
                quantity: 1,
              }),
            )
          }
          className="border border-rose-400 text-rose-400 px-4 py-2 rounded transition-colors hover:bg-rose-400 hover:text-white"
        >
          Добавить в корзину
        </button>
      ) : null}
    </div>
  );
};

export default ProductItem;
