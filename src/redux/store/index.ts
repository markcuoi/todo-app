import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { todoSlice } from "../slice/todo";

export const store = configureStore({
  reducer: combineReducers({
    todo: todoSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
