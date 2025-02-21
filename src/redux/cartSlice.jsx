import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        message.error("Item is alread added");
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        message.success("Item Added to Cart!..");
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      message.success("Item Removed From Cart!");
    },
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      } else {
        message.warning("Quantity cannot be less than one");
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
