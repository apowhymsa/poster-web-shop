import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Product } from "@/types";
import cartItem from "@/components/Cart/CartItem/CartItem";

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
    setCartItem: (state, action: PayloadAction<Cart>) => {
      const productIndex = state.cart.findIndex(
        (cartItem) =>
          cartItem.product.product_id === action.payload.product.product_id,
      );

      if (productIndex !== -1) {
        state.cart[productIndex].quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    updateQuantity: (state, action: PayloadAction<Cart>) => {
      const productIndex = state.cart.findIndex(
        (cartItem) =>
          cartItem.product.product_id === action.payload.product.product_id,
      );

      state.cart[productIndex].quantity = action.payload.quantity;
      console.log([...state.cart]);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCartItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
