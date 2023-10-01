"use client";
import { useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/utils/firebase/firebase";

const ModalSignUp = () => {
  const { setOpen, isOpen } = useContext(ModalContext);

  const createAccountHandler = async () => {
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: "select_account",
    });

    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(credential, token, user);
        console.log("is new: ", getAdditionalUserInfo(result));
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode, errorMessage, credential);
      });
  };

  if (!isOpen) {
    return null;
  }

  // TODO: FIX CONTEXT BAG
  return (
    <div className="absolute top-50 left-50 bg-gray-400 h-10 w-10">
      <p>Modal</p>
      <button onClick={createAccountHandler}>Регистрация</button>
      <button onClick={() => setOpen(false)}>Закрыть</button>
    </div>
  );
};

export default ModalSignUp;
