import { createSlice } from "@reduxjs/toolkit";
import { ProfileType } from "../../utils/types";
import { getProfile } from "../actions/user.action";

export interface ProfileState {
  profile: ProfileType | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: ProfileState = {
  profile: null,
  isAuthenticated: false,
  loading: false,
};

export const profileSlice = createSlice({
  name: "PROFILE",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.profile = null;
      localStorage.removeItem("token"); // Clear token on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.profile = null;
        state.isAuthenticated = false;
      });
  },
});

export const { logOut } = profileSlice.actions;

export default profileSlice.reducer;
