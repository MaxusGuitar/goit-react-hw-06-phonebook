import { createAction, createSlice } from "@reduxjs/toolkit";
//import { types } from "./redux-types";
import shortid from "shortid";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    add(state, action) {
      state.name = action.payload;
      state.number = action.payload;
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const add = createAction("contacts/add", (text) => {
  return {
    payload: {
      id: shortid.generate(),
      text,
    },
  };
});

export const changeFilter = createAction("contacts/changeFilter");
export const deleteContact = createAction("contacts/deleteContact");
