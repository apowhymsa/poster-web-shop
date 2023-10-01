"use client";

import { Product } from "@/types";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Products from "@/components/Products/Products";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import { setProducts } from "@/utils/store/productSlice";
import products from "@/components/Products/Products";
import QuantityItemButton from "@/components/UI/QuantityItemButton/QuantityItemButton";
import { StarIcon } from "@heroicons/react/24/solid";
import "./Product.scss";
import ProductOverview from "@/components/ProductOverview/ProductOverview";
import ProductOverviewMobile from "@/components/ProductOverview/ProductOverviewMobile";
import SwiperProducts from "@/components/SwiperProducts/SwiperProducts";
import { setCartItem } from "@/utils/store/cartSlice";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;
import Skeleton from "react-loading-skeleton";
import { AuthContext } from "@/contexts/AuthContext/AuthContext";
import { createPortal } from "react-dom";

const Page = ({ params }: { params: { slug: string } }) => {
  const { isLoading, isLogged } = useContext(AuthContext);
  const products = useAppSelector((state) => state.productsReducer).products;
  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/api/products/", {
        cache: "no-cache",
      });
      const products: Product[] = await response.json();
      dispatch(setProducts(products));
    };
    const getProduct = async () => {
      const response = await fetch("/api/product/" + params.slug, {
        cache: "no-cache",
      });
      const product: Product = await response.json();
      setProduct(product);
    };

    Promise.all([getProduct(), products.length === 0 && getProducts()]).finally(
      () => setLoading(false),
    );
  }, []);

  return (
    <>
      <div className="product-item-wrapper px-10 flex gap-x-6 py-10">
        <div className="w-[40%] h-auto">
          {loading ? (
            <Skeleton
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
                objectPosition: "center center",
                aspectRatio: "1 / 1",
              }}
            />
          ) : (
            <Image
              src={
                product?.photo_origin
                  ? `https://poster-shop.joinposter.com${product?.photo_origin}`
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
          )}
        </div>
        <div className="product-top-info flex flex-col gap-y-6 flex-1">
          <div className="flex flex-col gap-y-2">
            {loading ? (
              <Skeleton />
            ) : (
              <p className="product-item-name font-semibold text-4xl">
                {product?.product_name}
              </p>
            )}
            <div className="product-price-score-container flex gap-x-4 items-center">
              {loading ? (
                <Skeleton inline className="w-6" />
              ) : (
                <p className="product-price text-xl">
                  &#8372; {product?.price["1"].slice(0, -2)}
                </p>
              )}
              <span className="price-score-divider h-6 w-[1px] bg-gray-300"></span>
              <div className="flex items-center">
                {loading ? (
                  <>
                    <Skeleton circle count={5} className="h-5 w-5" inline />
                    <Skeleton />
                  </>
                ) : (
                  <>
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <span className="product-score-count text-[#6b88b5] text-sm ml-2">
                      500 оценок
                    </span>
                  </>
                )}
              </div>
            </div>
            {/*<p>{product?.product_production_description}</p>*/}
            {loading ? (
              <Skeleton />
            ) : (
              <QuantityItemButton
                quantity={quantity}
                setQuantity={setQuantity}
                onClick={() => {
                  if (!isLogged) {
                    console.log("user not auth");
                  } else {
                    dispatch(
                      setCartItem({
                        product: product as Product,
                        quantity: quantity,
                      }),
                    );
                  }
                }}
              />
            )}
          </div>
          {loading ? (
            <Skeleton />
          ) : (
            <ProductOverview
              classNameContainer={"product-additional-info w-full"}
              setTab={setTab}
              tab={tab}
            />
          )}
        </div>
      </div>

      <ProductOverviewMobile
        classNameContainer={"product-additional-info-mobile w-full my-4"}
        setTab={setTab}
        tab={tab}
      />
      <div className="products-recommendation px-10 mb-7">
        <h3 className="text-2xl font-medium mb-7">Похожие товары</h3>
        <SwiperProducts
          isLoading={loading}
          breakpoints={{
            320: {
              slidesPerView: 1.3,
            },
            485: {
              slidesPerView: 2.3,
            },
            700: {
              slidesPerView: 3.3,
            },
            1000: {
              slidesPerView: 4.5,
            },
          }}
          products={products}
        />
      </div>
    </>
  );
};

export default Page;
