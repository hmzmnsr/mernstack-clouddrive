import { configureStore } from "@reduxjs/toolkit";
import { fileSlice } from "./file.reducer";
import { folderSlice } from "./folder.reducer";
import { profileSlice } from "./profile.reducer";

export const store = configureStore({
  reducer: {
    Profile: profileSlice.reducer,
    Folder: folderSlice.reducer,
    File: fileSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
