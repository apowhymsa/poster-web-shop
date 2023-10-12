"use client";

import "./HeaderMain.scss";
import Link from "next/link";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderNav from "@/components/Header/HeaderMain/HeaderNav/HeaderNav";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import HeaderBurgerContent from "@/components/Header/HeaderBurgerContent/HeaderBurgerContent";
import { is } from "immutable";
import Cart from "@/components/Cart/Cart";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "@/utils/firebase/firebase";
import { getAuth } from "@firebase/auth";

const HeaderMain = () => {
  const [isVisible, setVisible] = useState(false);
  const burgerContentRef = useRef<HTMLDivElement>(null);
  const [isOpenCart, setOpenCart] = useState(false);

  const handlerBurgerVisible = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "visible";
      burgerContentRef.current?.classList.remove("burger-content-visible");
    } else {
      document.body.style.overflow = "hidden";
      burgerContentRef.current?.classList.add("burger-content-visible");
    }
  }, [isVisible]);

  return (
    <div className="header-main">
      <div className="header-main-mobile-left">
        <Bars3Icon
          className="h-6 w-6 text-gray-400"
          onClick={handlerBurgerVisible}
        />
        {createPortal(
          <HeaderBurgerContent
            ref={burgerContentRef}
            setVisible={setVisible}
            isVisible={isVisible}
          />,
          document.body,
        )}
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
      </div>
      <Link href="/" role="link" className="header-main-logo">
        <Image
          src="/clumba-logo.svg"
          alt="Logo"
          width={90}
          height={40}
          priority
          placeholder="blur"
          blurDataURL="/clumba-logo.svg"
        />
      </Link>
      <HeaderNav />
      <div className="header-buttons">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <UserIcon
          className="h-6 w-6 text-gray-400"
          onClick={async () => {
            await fetchSignInMethodsForEmail(
              getAuth(),
              "apowhymsa@gmail.com",
            ).then((methods) => {
              console.log(methods);
            });
          }}
        />
        <span className="header-main-divider"></span>
        <ShoppingCartIcon
          className={[
            "transition-colors cart-icon h-6 w-6 text-gray-400",
            isOpenCart && "text-rose-400",
          ].join(" ")}
          onClick={() => setOpenCart((prev) => !prev)}
        />
        {createPortal(
          <Cart isOpen={isOpenCart} setOpen={setOpenCart} />,
          document.body,
        )}
      </div>
    </div>
  );
};

export default HeaderMain;
