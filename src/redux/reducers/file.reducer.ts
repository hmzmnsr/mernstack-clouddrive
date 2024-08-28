import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FolderType } from "../../utils/types";
import { getFiles } from "../actions/file.action";

export interface FileState {
  list: FolderType[];
  loading: boolean;
  count: number;
}

const initialState: FileState = {
  list: [],
  count: 0,
  loading: false,
};

export const fileSlice = createSlice({
  name: "FILE",
  initialState,
  reducers: {
    setFileLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setFile: (
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
      .addCase(getFiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.count = action.payload.length;
      })
      .addCase(getFiles.rejected, (state, action) => {
        state.loading = false;
        state.list = [];
        state.count = 0;
      });
  },
});

export const { setFileLoading, setFile } = fileSlice.actions;

export default fileSlice.reducer;
