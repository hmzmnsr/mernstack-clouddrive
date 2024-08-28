import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FolderType } from "../../utils/types";
import { getFolders } from "../actions/folder.action";

export interface FolderState {
  list: FolderType[];
  loading: boolean;
  count: number;
}

const initialState: FolderState = {
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
  extraReducers: (builder) => {
    builder
      .addCase(getFolders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFolders.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.count = action.payload.length;
      })
      .addCase(getFolders.rejected, (state, action) => {
        state.loading = false;
        state.list = [];
        state.count = 0;
      });
  },
});

export const { setFolderLoading, setFolders } = folderSlice.actions;

export default folderSlice.reducer;
