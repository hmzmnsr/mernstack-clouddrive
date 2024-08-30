import { createSlice } from "@reduxjs/toolkit";
import { FolderType } from "../../utils/types";
import { getRecentFolders } from "../actions/folder.action";

export interface RecentFolderState {
  list: FolderType[];
  loading: boolean;
  count: number;
}

const initialState: RecentFolderState = {
  list: [],
  count: 0,
  loading: true,
};

export const recentFolderSlice = createSlice({
  name: "RECENT_FOLDER",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecentFolders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecentFolders.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.count = action.payload.length;
      })
      .addCase(getRecentFolders.rejected, (state, action) => {
        state.loading = false;
        state.list = [];
        state.count = 0;
      });
  },
});

export default recentFolderSlice.reducer;
