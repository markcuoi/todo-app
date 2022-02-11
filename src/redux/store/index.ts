import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { doneSlice } from "../slice/done";
import { inProgressSlice } from "../slice/inProgress";

import { todoSlice } from "../slice/todo";

export const store = configureStore({
  reducer: combineReducers({
    todo: todoSlice.reducer,
    inProgress: inProgressSlice.reducer,
    done: doneSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
