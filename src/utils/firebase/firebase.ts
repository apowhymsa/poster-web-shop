import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByk7n5JzbWrLCffBJXGiXWnc8MZbe0JqU",
  authDomain: "poster-ecommerce-shop.firebaseapp.com",
  projectId: "poster-ecommerce-shop",
  storageBucket: "poster-ecommerce-shop.appspot.com",
  messagingSenderId: "14361184003",
  appId: "1:14361184003:web:d17bfd870e4195075bcb36",
  measurementId: "G-N1HBV39R4Y",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
