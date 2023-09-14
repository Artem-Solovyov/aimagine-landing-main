import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";
import modalReducer from "./features/modalSlice";
import appReducer from "./features/appSlice";

export const store = configureStore({
  reducer: {
    sidebarReducer,
    modalReducer,
    appReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
