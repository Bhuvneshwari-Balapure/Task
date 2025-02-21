import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import localStorage from "redux-persist/es/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "Data",
  storage: localStorage,
};

const store = configureStore({
  reducer: {
    cart: persistReducer(persistConfig, cartReducer),
  },
});
export const persistor = persistStore(store);
export default store;
