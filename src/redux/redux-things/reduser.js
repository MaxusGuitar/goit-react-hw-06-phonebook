import { combineReducers } from "@reduxjs/toolkit";
import reduserTypes from "./redux-types";
import { addContact, deleteContact } from "./action";
import { createReducer } from "@reduxjs/toolkit";

const valueReduser = createReducer([], {
  [addContact]: (state, action) => state + action.payload,
  [deleteContact]: (state, action) => state - action.payload,
});

const stateReduser = (state = 5, action) => state;

export default combineReducers({
  value: valueReduser,
  step: stateReduser,
});
