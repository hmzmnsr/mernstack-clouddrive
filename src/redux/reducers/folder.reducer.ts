import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FolderType } from "../../utils/types";

export interface ProfileState {
  list: FolderType[];
  loading: boolean;
  count: number;
}

const initialState: ProfileState = {
  list: [],
  count: 0,
  loading: false,
};

export const folderSlice = createSlice({
  name: "FOLDER",
  initialState,
  reducers: {
    setFolderLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setFolders: (
      state,
      action: PayloadAction<{
        list: FolderType[];
        count: number;
      }>
    ) => {
      state.list = action.payload.list;
      state.count = action.payload.count;
      state.loading = false;
    },
  },
});

export const { setFolderLoading, setFolders } = folderSlice.actions;

export default folderSlice.reducer;
