"use client";

import { AuthContext } from "@/contexts/AuthContext/AuthContext";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import {auth, db} from "@/utils/firebase/firebase";
import {doc, getDoc} from "@firebase/firestore";
import {setCart} from "@/utils/store/cartSlice";
import {useAppDispatch} from "@/utils/store/hooks";

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(true);
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setLogged(true);
      } else {
        setLogged(false);
      }
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
