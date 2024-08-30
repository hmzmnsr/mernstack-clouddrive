import { createSlice } from "@reduxjs/toolkit";
import { FolderType } from "../../utils/types";
import { getAllFolders, getFolders } from "../actions/folder.action";

export interface FolderState {
  list: FolderType[];
  loading: boolean;
  count: number;
  allFolders: FolderType[];
}

const initialState: FolderState = {
  list: [],
  count: 0,
  loading: false,
  allFolders: [],
};

export const folderSlice = createSlice({
  name: "FOLDER",
  initialState,
  reducers: {},
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
      })
      .addCase(getAllFolders.fulfilled, (state, action) => {
        state.allFolders = action.payload;
      })
      .addCase(getAllFolders.rejected, (state, action) => {
        state.allFolders = [];
      });
  },
});

export default folderSlice.reducer;
