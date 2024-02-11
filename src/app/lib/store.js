import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./features/basketSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      basket: basketSlice,
    }
  })
}