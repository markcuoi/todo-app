import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { TActionSlice, TUpdateTextShowed, IModel } from "../../types";

const initialState: IModel[] = [];

export const createCustomSlice = (name: string) => {
  const { actions, reducer } = createSlice({
    name,
    initialState,
    reducers: {
      add: {
        reducer: (state, action: PayloadAction<IModel>) => {
          state.push(action.payload);
        },
        prepare: (text: string) => ({
          payload: {
            id: uuidv4(),
            text,
            isFinished: false,
            createdAt: new Date().toLocaleString(),
            isTextShowed: false,
          },
        }),
      },
    },
  });

  const { add } = actions;
  return {
    add,
    reducer,
  };
};
