import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FolderType } from "../../utils/types";
import { getFavoriteFiles, getFiles } from "../actions/file.action";

export interface FileState {
  list: FolderType[];
  favoriteList: FolderType[];
  loading: boolean;
  count: number;
  favoriteCount: number;
}

const initialState: FileState = {
  list: [],
  favoriteList: [],
  count: 0,
  favoriteCount: 0,
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
    setFavoriteFile: (
      state,
      action: PayloadAction<{
        favoriteList: FolderType[];
        favoriteCount: number;
      }>
    ) => {
      state.favoriteList = action.payload.favoriteList;
      state.favoriteCount = action.payload.favoriteCount;
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
      .addCase(getFiles.rejected, (state) => {
        state.loading = false;
        state.list = [];
        state.count = 0;
      })
      .addCase(getFavoriteFiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFavoriteFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.favoriteList = action.payload;
        state.favoriteCount = action.payload.length;
      })
      .addCase(getFavoriteFiles.rejected, (state) => {
        state.loading = false;
        state.favoriteList = [];
        state.favoriteCount = 0;
      });
  },
});

export const { setFileLoading, setFile, setFavoriteFile } = fileSlice.actions;

export default fileSlice.reducer;
