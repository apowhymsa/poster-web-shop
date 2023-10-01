import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import categoriesReducer from "./categoriesSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    productsReducer,
    categoriesReducer,
    cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
