import { createContext, Dispatch, SetStateAction } from "react";

type ContextProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export const ModalContext = createContext<ContextProps>({
  isOpen: false,
  setOpen: () => {},
});
