import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../redusers";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false,
      thunk: true,
    }),
  devTools: !!process.env.REACT_APP_API_HOST,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
