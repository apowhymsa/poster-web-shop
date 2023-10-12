import {
  EnvelopeIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { UserFields } from "@/components/ModalSignUp/ModalAuth";
import React, { Dispatch, SetStateAction, useState } from "react";
import InputField from "@/components/UI/InputField/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { auth, db } from "@/utils/firebase/firebase";
import useToast from "@/hooks/useToast";

type Props = {
  onClose: () => void;
  userFields: UserFields | undefined;
  setUserFields: Dispatch<SetStateAction<UserFields | undefined>>;
  setStep: Dispatch<SetStateAction<number>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export interface IFormValues {
  name: string;
  phone: string;
  password: string;
  email?: string;
}

const ModalSignUpStep2 = (props: Props) => {
  const { info, error } = useToast();
  const [isLoading, setLoading] = useState(false);
  const { onClose, setStep, userFields, setUserFields } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onClickRegisterFinishHandler = async (
    data: IFormValues,
    event: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => {
    setLoading(true);

    const querySearchUserByPhone = query(
      collection(db, "users"),
      where("phone", "==", userFields?.phone),
    );
    const querySnapshot = await getDocs(querySearchUserByPhone);
    if (querySnapshot.empty) {
      const requestBody = {
        client_name: userFields?.name,
        client_groups_id_client: 1,
        phone: userFields?.phone,
      };

      createUserWithEmailAndPassword(
        auth,
        userFields?.email!,
        userFields?.password!,
      ).then(() => {
        fetch("/api/user", {
          method: "POST",
          body: JSON.stringify(requestBody),
        })
          .then(async () => {
            await addDoc(collection(db, "users"), {
              ...userFields,
            }).then((value) => {
              localStorage.setItem("authUserId", value.id);
            });

            info(
              "Учётная запись успешно создана, вход выполнен автоматически!",
            );
          })
          .catch((err) => {
            const currentUser = auth.currentUser;
            currentUser?.delete();
            error(
              `Ошибка записи в POSTER. ErrorMessage: ${err.message}. ErrorCode: ${err.code}`,
            );
          })
          .finally(() => {
            onClose();
            setLoading(false);
          });
      });
    } else {
      //TODO setError
      error("Учётная запись с указаным номером телефона существует!");
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
        Создание аккаунта - Шаг 2
      </h3>
      <form
        className="modal-container flex flex-col gap-y-5 my-4"
        onSubmit={handleSubmit(onClickRegisterFinishHandler)}
      >
        <InputField
          labelText="Имя и фамилия"
          leftIcon={<UserIcon className="h-5 w-5 text-gray-500" />}
          placeholder="Пример: Влад Попов"
          id="name"
          name="name"
          type="text"
          defaultValue={userFields?.name || ""}
          onChangeCapture={(e) => {
            setUserFields({
              ...userFields,
              name: (e.target as HTMLInputElement).value,
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
              message: "Поле должно содержать не менее 6-ти символов",
            },
          }}
          error={errors.name}
        />
        <InputField
          labelText="Номер телефона"
          leftIcon={<PhoneIcon className="h-5 w-5 text-gray-500" />}
          placeholder="Пример: +380..."
          id="phone"
          name="phone"
          type="tel"
          defaultValue={userFields?.phone || ""}
          onChangeCapture={(e) => {
            setUserFields({
              ...userFields,
              phone: (e.target as HTMLInputElement).value,
            });
          }}
          register={register}
          options={{
            required: {
              value: true,
              message: "Поле обязательное для заполнения",
            },
          }}
          error={errors.phone}
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
          {isLoading ? "Загрузка..." : "Завершить регистрацию"}
        </button>
      </form>
    </div>
  );
};

export default ModalSignUpStep2;
