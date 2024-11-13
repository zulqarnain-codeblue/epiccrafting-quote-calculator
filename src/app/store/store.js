// configuring the store
import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./slices/quoteSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// persisting the store
const persistConfig = {
  key: "root",
  storage,
};

// combining the reducers
const persistedReducer = persistReducer(persistConfig, quoteReducer);

// configuring the store
const store = configureStore({
  reducer: persistedReducer,
});

// persisting the store
const persistor = persistStore(store);

export { store, persistor };
