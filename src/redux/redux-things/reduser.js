import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, changeFilter } from "./action";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialStateContacts = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};
const initialStateFilter = {
  keyword: "",
};

const contacts = createReducer(initialStateContacts, {
  [addTodo]: (state, action) => {
    state.items = [action.payload, ...state.items];
  },

  [deleteTodo]: (state, action) => {
    const filtredContacts = state.items.filter(
      (contact) => contact.id !== action.payload
    );
    state.items = filtredContacts;
  },
});

const filter = createReducer(initialStateFilter, {
  [changeFilter]: (state, { payload }) => {
    state.keyword = payload;
  },
});

const persistConfig = {
  key: "phonebook",
  storage,
  blacklist: ["filter"],
};
const rootReducer = combineReducers({
  contacts,
  filter,
});
export const persistedReducer = persistReducer(persistConfig, rootReducer);
