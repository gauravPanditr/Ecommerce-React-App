import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./signUpSlice";
import cartSlice from "./cartSlice";

export const store=configureStore({
      reducer:{
            signup:signUpSlice,
            cart: cartSlice,
      }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;