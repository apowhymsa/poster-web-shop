import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import {
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { IFormValues } from "@/components/ModalSignUp/ModalSignUpStep2";
import { IFormValuesStep1 } from "@/components/ModalSignUp/ModalSignUpStep1";

interface InputFieldProps extends React.AllHTMLAttributes<HTMLInputElement> {
  labelText: string;
  leftIcon?: React.ReactNode;
  register: UseFormRegister<IFormValues>;
  name: Path<IFormValues>;
  options: RegisterOptions;
  error: FieldError | undefined;
}

const InputField = (props: InputFieldProps) => {
  const { labelText, leftIcon, register, options, error, ...inputProps } =
    props;
  return (
    <div>
      <label
        htmlFor={inputProps.id}
        className={`mb-1 block text-sm font-bold text-gray-700 ${
          error ? 'after:ml-0.5 after:text-red-500 after:content-["*"]' : null
        }`}
      >
        {labelText}
      </label>
      <div className="relative">
        {leftIcon ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5">
            {leftIcon}
          </div>
        ) : null}
        <input
          className={`block w-full rounded-md shadow-sm ${
            leftIcon ? "pl-10" : "pl-4"
          } ${
            error
              ? "border-red-300 focus:border-red-300 focus:ring focus:ring-red-200"
              : "border-gray-300 focus:border-primary-400 focus:ring focus:ring-primary-200"
          }  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500`}
          {...inputProps}
          {...register(inputProps.name, options)}
        />
      </div>
      {error ? (
        <p className="mt-1 text-sm text-red-500">{error.message}</p>
      ) : null}
    </div>
  );
};

export default InputField;
