import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ProfileType } from "../../utils/types";

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
    setProfileLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProfile: (state, action: PayloadAction<ProfileType | null>) => {
      state.profile = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.profile = null;
    },
  },
});

export const { setProfile, logOut, setProfileLoading } = profileSlice.actions;

export default profileSlice.reducer;
