import {
  EnvelopeIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  EmailAuthProvider,
  fetchSignInMethodsForEmail,
  GoogleAuthProvider,
  linkWithCredential,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPopup,
  User,
} from "firebase/auth";
import { UserFields } from "@/components/ModalSignUp/ModalAuth";
import React, { Dispatch, SetStateAction, useState } from "react";
import InputField from "@/components/UI/InputField/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth, db } from "@/utils/firebase/firebase";
import { getAuth } from "@firebase/auth";
import {and, collection, doc, getDoc, getDocs, query, where} from "@firebase/firestore";
import useToast from "@/hooks/useToast";
import {setCart} from "@/utils/store/cartSlice";
import {useAppDispatch} from "@/utils/store/hooks";

type Props = {
  onClose: () => void;
  onClick?: () => void;
  userFields: UserFields | undefined;
  setUserFields: Dispatch<SetStateAction<UserFields | undefined>>;
  setStep: Dispatch<SetStateAction<number>>;
};

export interface IFormValues {
  name: string;
  phone: string;
  password: string;
  email?: string;
}

const ModalSignIn = (props: Props) => {
  const { error, info } = useToast();
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { onClose, onClick, userFields, setStep, setUserFields } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const getCart = async (userAuthId: string) => {
    const userRef = doc(db, "users", userAuthId!.toString());
    const userSnapshot = await getDoc(userRef);

    console.log('getCart')

    dispatch(setCart(userSnapshot.data()?.cart || []));
  };

  const onClickLoginHandler = async () => {
    console.log(userFields);
    setLoading(true);

    const querySearchUserByEmail = query(
      collection(db, "users"),
      where("email", "==", userFields?.email),
      where("password", "==", userFields?.password),
    );

    const querySnapshot = await getDocs(querySearchUserByEmail);

    if (!querySnapshot.empty) {
      localStorage.setItem("authUserId", querySnapshot.docs[0].id);
      getCart(querySnapshot.docs[0].id);

      signInWithEmailAndPassword(
        auth,
        userFields?.email!,
        userFields?.password!,
      )
        .then((userCred) => {
          console.log(userCred.user.providerData);
          onClose();
          info("Успешный вход в аккаунт!");
        })
        .catch(() => error("Ошибка при входе в аккаунт"));
    } else {
      error("Учётной записи с указаными данными не существует!");
    }

    setLoading(false);
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 bg-white h-fit w-[500px] -translate-x-1/2 -translate-y-1/2 px-9 py-9 rounded"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="btn-close-modal flex absolute right-5 top-5 cursor-pointer transition-transform hover:rotate-180 items-center justify-center"
        onClick={onClose}
      >
        <XMarkIcon className="h-6 w-6 text-black" />
      </div>
      <h3 className="text-center font-semibold text-xl">Вход в аккаунт</h3>
      <div className="modal-container flex flex-col gap-y-5 my-4">
        <form
          className="default-section flex flex-col gap-y-5 my-3"
          onSubmit={handleSubmit(onClickLoginHandler)}
        >
          <InputField
            labelText="Электронная почта"
            leftIcon={<EnvelopeIcon className="h-5 w-5 text-gray-500" />}
            placeholder="Пример: your@email.com"
            id="email"
            name="email"
            type="email"
            defaultValue={userFields?.email || ""}
            onChangeCapture={(e) => {
              setUserFields({
                ...userFields,
                email: (e.target as HTMLInputElement).value,
              });
            }}
            register={register}
            options={{
              required: {
                value: true,
                message: "Поле обязательное для заполнения",
              },
              minLength: {
                value: 6,
                message: "Пароль должен иметь больше чем 5 символов",
              },
            }}
            error={errors.email}
          />
          <InputField
            labelText="Пароль"
            leftIcon={<KeyIcon className="h-5 w-5 text-gray-500" />}
            placeholder="Пароль"
            id="password"
            name="password"
            type="password"
            defaultValue={userFields?.password || ""}
            onChangeCapture={(e) => {
              setUserFields({
                ...userFields,
                password: (e.target as HTMLInputElement).value,
              });
            }}
            register={register}
            options={{
              required: {
                value: true,
                message: "Поле обязательное для заполнения",
              },
              minLength: {
                value: 6,
                message: "Пароль должен иметь больше чем 5 символов",
              },
            }}
            error={errors.password}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-10 px-4 transition-colors text-white bg-rose-400 hover:bg-rose-500 disabled:cursor-not-allowed disabled:border-rose-400 disabled:bg-primary-400"
          >
            {isLoading ? "Загрузка..." : "Войти"}
          </button>
        </form>
      </div>
      <span className="flex justify-end items-center gap-x-1">
        <span>Нет аккаунта?</span>
        <span
          className="underline text-blue-400 cursor-pointer"
          onClick={() => setStep(1)}
        >
          Регистрация
        </span>
      </span>
    </div>
  );
};

export default ModalSignIn;
