"use client";

import "./HeaderTop.scss";
import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getAuth } from "@firebase/auth";
import { auth } from "@/utils/firebase/firebase";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext/AuthContext";
import Skeleton from "react-loading-skeleton";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";

const HeaderTop = () => {
  const { isLoading, isLogged } = useContext(AuthContext);
  const { isOpen, setOpen } = useContext(ModalContext);
  console.log(isLoading);

  function getCookie(name: string) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
  }

  const signOutHandler = async () => {
    await signOut(auth);
  };

  return (
    <div className="header-top">
      <span className="header-top-lang text flex-1">UA</span>
      <p className="text flex-none">Цветочный магазин &quot;Clumba&quot;</p>
      <div className="header-top-buttons flex flex-1 justify-end gap-x-3 items-center">
        {isLoading ? (
          <Skeleton inline className="w-12" />
        ) : isLogged ? (
          <span className="text" role="button" onClick={signOutHandler}>
            Выйти
          </span>
        ) : (
          <>
            <span className="text" role="button" onClick={() => setOpen(true)}>
              Создать аккаунт
            </span>
            <span className="header-top-divider"></span>
            <span className="text" role="button">
              Войти
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderTop;
