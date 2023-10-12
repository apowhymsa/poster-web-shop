"use client";
import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import ModalSignUpStep1 from "@/components/ModalSignUp/ModalSignUpStep1";
import ModalSignUpStep2 from "@/components/ModalSignUp/ModalSignUpStep2";
import "react-toastify/dist/ReactToastify.css";
import ModalSignIn from "@/components/ModalSignUp/ModalSignIn";

export type UserFields = {
  name?: string | null;
  email?: string | null;
  profilePhoto?: string | null;
  password?: string | null;
  phone?: string | null;
};

const ModalAuth = () => {
  const { setOpen, isOpen } = useContext(ModalContext);
  const [step, setStep] = useState(1);
  const [userFields, setUserFields] = useState<UserFields | undefined>({
    name: "",
    phone: "",
    password: "",
    email: "",
    profilePhoto: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const onCloseModalHandler = () => {
    setOpen(false);
    setStep(1);
    setUserFields({
      name: "",
      password: "",
      email: "",
      phone: "",
      profilePhoto: "",
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 z-50 backdrop-blur-sm"
      onClick={onCloseModalHandler}
    >
      {step === 1 && (
        <ModalSignUpStep1
          userFields={userFields}
          setUserFields={setUserFields}
          setStep={setStep}
          onClose={onCloseModalHandler}
        />
      )}
      {step === 2 && (
        <ModalSignUpStep2
          setStep={setStep}
          onClose={onCloseModalHandler}
          userFields={userFields}
          setUserFields={setUserFields}
          setOpen={setOpen}
        />
      )}
      {step === 3 && (
        <ModalSignIn
          setStep={setStep}
          onClose={onCloseModalHandler}
          userFields={userFields}
          setUserFields={setUserFields}
        />
      )}
    </div>
  );
};

export default ModalAuth;
