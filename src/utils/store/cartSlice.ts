import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Product } from "@/types";
import cartItem from "@/components/Cart/CartItem/CartItem";
import { doc, setDoc, updateDoc } from "@firebase/firestore";
import { db } from "@/utils/firebase/firebase";

export type Cart = {
  product: Product;
  quantity: number;
};
type CartState = {
  cart: Cart[];
};

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      console.log("payload", action.payload);
    },
    setCartItem: (state, action: PayloadAction<Cart>) => {
      const userId = localStorage.getItem("authUserId");
      const productIndex = state.cart.findIndex(
        (cartItem) =>
          cartItem.product.product_id === action.payload.product.product_id,
      );

      if (productIndex !== -1) {
        state.cart[productIndex].quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }

      const setDocPromise = setDoc(
        doc(db, "users", userId!.toString()),
        {
          cart: [...state.cart],
        },
        { merge: true },
      );
    },
    updateQuantity: (state, action: PayloadAction<Cart>) => {
      const userId = localStorage.getItem("authUserId");
      const productIndex = state.cart.findIndex(
        (cartItem) =>
          cartItem.product.product_id === action.payload.product.product_id,
      );

      state.cart[productIndex].quantity = action.payload.quantity;

      const setDocPromise = setDoc(
        doc(db, "users", userId!.toString()),
        {
          cart: [...state.cart],
        },
        { merge: true },
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCartItem, updateQuantity, clearCart, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
