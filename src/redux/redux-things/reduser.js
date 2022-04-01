import { createReducer } from "@reduxjs/toolkit";
import { types } from "joi";
import actions from "./action";

console.log(actions);

export const items = createReducer([], {
  "contacts/add": (state, { payload }) => [...(state + payload)],
  "contacts/deleteContact": (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filter = (state = "", { type, payload }) => {
  switch (type) {
    case "contacts/changeFilter":
      return payload;
    default:
      return state;
  }
};
