import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PageNames } from "../../utils/enums";

export interface SystemState {
  page: PageNames;
}

const initialState: SystemState = {
  page: PageNames.HOME,
};

export const systemSlice = createSlice({
  name: "SYSTEM",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<PageNames>) => {
      state.page = action.payload;
    },
  },
});

export const { setCurrentPage } = systemSlice.actions;

export default systemSlice.reducer;
