import { createSlice } from "@reduxjs/toolkit";
import { FolderType } from "../../utils/types";
import { getRecentFiles } from "../actions/file.action";

export interface RecentFileState {
  list: FolderType[];
  loading: boolean;
  count: number;
}

const initialState: RecentFileState = {
  list: [],
  count: 0,
  loading: true,
};

export const recentFileSlice = createSlice({
  name: "RECENT_FILE",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecentFiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecentFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.count = action.payload.length;
      })
      .addCase(getRecentFiles.rejected, (state, action) => {
        state.loading = false;
        state.list = [];
        state.count = 0;
      });
  },
});

export default recentFileSlice.reducer;
