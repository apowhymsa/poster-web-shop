import { EnvelopeIcon, KeyIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import InputField from "@/components/UI/InputField/InputField";
import React, { Dispatch, SetStateAction, useState } from "react";
import { UserFields } from "@/components/ModalSignUp/ModalAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "@/components/ModalSignUp/ModalSignUpStep2";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/utils/firebase/firebase";
import useToast from "@/hooks/useToast";
import { collection, getDocs, query, where } from "@firebase/firestore";

type Props = {
  onClose: () => void;
  userFields: UserFields | undefined;
  setUserFields: Dispatch<SetStateAction<UserFields | undefined>>;
  setStep: Dispatch<SetStateAction<number>>;
};

const ModalSignUpStep1 = (props: Props) => {
  const [isLoading, setLoading] = useState(false);
  const { info, error } = useToast();
  const { onClose, setStep, setUserFields, userFields } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onClickRegisterContinueHandler = async (
    data: IFormValues,
    event: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => {
    event?.preventDefault();

    setLoading(true);

    const querySearchUserByEmail = query(
      collection(db, "users"),
      where("email", "==", userFields?.email),
    );
    const querySnapshot = await getDocs(querySearchUserByEmail);
    if (querySnapshot.empty) {
      setStep(2);
    } else {
      error("Учётная запись с указаным электронным адресом существует!");
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
      <h3 className="text-center font-semibold text-xl">
        Создание аккаунта - Шаг 1
      </h3>
      <div className="modal-container flex flex-col gap-y-5 my-4">
        <form
          className="default-section flex flex-col gap-y-5 my-3"
          onSubmit={handleSubmit(onClickRegisterContinueHandler)}
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
            {isLoading ? "Загрузка..." : "Продолжить"}
          </button>
        </form>
      </div>
      <span className="flex justify-end items-center gap-x-1">
        <span>Есть аккаунт?</span>
        <span
          className="underline text-blue-400 cursor-pointer"
          onClick={() => setStep(3)}
        >
          Войти
        </span>
      </span>
    </div>
  );
};

export default ModalSignUpStep1;
