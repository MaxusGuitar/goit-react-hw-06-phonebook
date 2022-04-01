import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { itemsSlice } from "./redux-things/action";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReduser = combineReducers({});

// const persistedReduser = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: {
    contacts: itemsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development", //инструменты показываются только у разраба
});

// export const persistor = persistStore(store);

export const { add, remove } = itemsSlice.actions;
