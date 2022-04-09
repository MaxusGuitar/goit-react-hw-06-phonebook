// import { createAction, createSlice } from "@reduxjs/toolkit";
// //import { types } from "./redux-types";
// import shortid from "shortid";

// export const itemsSlice = createSlice({
//   name: "items",
//   initialState: {
//     items: [],
//     filter: "",
//   },
//   reducers: {
//     add(state, action) {
//       state.name = action.payload;
//       state.number = action.payload;
//     },
//     remove(state, action) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const add = createAction("contacts/add", (text) => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       text,
//     },
//   };
// });

// export const changeFilter = createAction("contacts/changeFilter");
// export const deleteContact = createAction("contacts/deleteContact");

import { createAction, createSlice } from "@reduxjs/toolkit";

// export const addContact = createAction("contacts/addcontact");
// export const deleteContact = createAction("contacts/deletecontact");
// export const changeFilter = createAction("contacts/changefilter");

export const itemSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    increment(state, action) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload);
    },
    decrement(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = itemSlice.actions;

export default itemSlice.reducer;
