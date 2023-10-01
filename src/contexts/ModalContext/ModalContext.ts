import { createContext, Dispatch, SetStateAction } from "react";

type ContextProps = {
  // signInModal: {
  //   isOpen: boolean;
  //   setOpen: Dispatch<SetStateAction<boolean>>;
  // };
  // signUpModal: {
  //   isOpen: boolean;
  //   setOpen: Dispatch<SetStateAction<boolean>>;
  // };
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export const ModalContext = createContext<ContextProps>({
  // signInModal: {
  //   isOpen: false,
  //   setOpen: () => {},
  // },
  // signUpModal: {
  //   isOpen: false,
  //   setOpen: () => {},
  // },
  isOpen: false,
  setOpen: () => {},
});
