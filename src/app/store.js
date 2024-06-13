import { configureStore } from "@reduxjs/toolkit";
import slidereducer from "../features/slices/SliderSlice";
import productReducer from "../features/slices/ProductsSlice";
import cartReducer from "../features/slices/CartSlice";
import authReducer from "../features/slices/AuthSlice";
export const store = configureStore({
  reducer: {
    slider: slidereducer,
    products: productReducer,
    cart: cartReducer,
    user:authReducer
  },
});
