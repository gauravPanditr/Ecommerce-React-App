import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./signUpSlice";

export const store=configureStore({
      reducer:{
            signup:signUpSlice
      }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;