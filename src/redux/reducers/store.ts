import { configureStore } from "@reduxjs/toolkit";
import { fileSlice } from "./file.reducer";
import { folderSlice } from "./folder.reducer";
import { profileSlice } from "./profile.reducer";
import { recentFileSlice } from "./recent-file.reducer";
import { recentFolderSlice } from "./recent-folder.reducer";
import { systemSlice } from "./system.reducer";

export const store = configureStore({
  reducer: {
    Profile: profileSlice.reducer,
    Folder: folderSlice.reducer,
    File: fileSlice.reducer,
    System: systemSlice.reducer,
    RecentFolder: recentFolderSlice.reducer,
    RecentFile: recentFileSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
