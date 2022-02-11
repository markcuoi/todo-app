import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { IModel } from "../../types";

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

      remove(state, action: PayloadAction<string>) {
        const index = state.findIndex(({ id }) => id === action.payload);
        state.splice(index, 1);
      },
    },
  });

  const { add, remove } = actions;
  return {
    add,
    remove,
    reducer,
  };
};
