import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./profile.reducer";

export const store = configureStore({
  reducer: {
    Profile: profileSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
