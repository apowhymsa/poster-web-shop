import "./globals.css";
import type { Metadata } from "next";
import { Comfortaa, Montserrat, Rubik } from "next/font/google";
import Header from "@/components/Header/Header";
import NavigationContextProvider from "@/contexts/NavigationContext/NavigationContextProvider";
import Providers from "@/utils/store/provider";
import Footer from "@/components/Footer/Footer";
import { SkeletonTheme } from "react-loading-skeleton";
import * as firebase from "../utils/firebase/firebase";
import AuthContextProvider from "@/contexts/AuthContext/AuthContextProvider";
import ModalAuth from "@/components/ModalSignUp/ModalAuth";
import ModalContextProvider from "@/contexts/ModalContext/ModalContextProvider";
import { ToastContainer } from "react-toastify";
import { doc, getDoc, onSnapshot } from "@firebase/firestore";
import { db } from "../utils/firebase/firebase";
import { setCart } from "@/utils/store/cartSlice";
import { useAppDispatch } from "@/utils/store/hooks";

const rubik = Rubik({ subsets: ["cyrillic"] });
const montserrat = Montserrat({ subsets: ["cyrillic"] });
const comfarta = Comfortaa({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[comfarta.className].join(" ")}>
        <Providers>
          <NavigationContextProvider>
            <AuthContextProvider>
              <ModalContextProvider>
                <Header />
                <main id="main" className="flex-1">
                  {children}
                </main>
                <Footer />
                <ModalAuth />
                <ToastContainer />
              </ModalContextProvider>
            </AuthContextProvider>
          </NavigationContextProvider>
        </Providers>
      </body>
    </html>
  );
}
