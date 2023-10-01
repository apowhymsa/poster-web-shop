"use client";

import { useEffect, useState } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenSignUpModal, setOpenSignUpModal] = useState(false);
  const [isOpenSignInModal, setOpenSignInModal] = useState(false);

  useEffect(() => {
    console.log(isOpenSignUpModal);
  }, [isOpenSignUpModal]);

  return (
    <ModalContext.Provider
      value={{
        // signUpModal: {
        //   isOpen: isOpenSignUpModal,
        //   setOpen: setOpenSignUpModal,
        // },
        // signInModal: {
        //   isOpen: isOpenSignInModal,
        //   setOpen: setOpenSignInModal,
        // },
        isOpen: isOpenSignUpModal,
        setOpen: setOpenSignUpModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
