"use client";

import { useEffect, useState } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen: isOpen,
        setOpen: setOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
