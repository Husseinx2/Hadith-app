import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { HijriDate } from "../models";

interface DateState {
  data: HijriDate[];
  loading: boolean;
  error: string | null;
}

const initialState: DateState = {
  data: [],
  loading: false,
  error: null,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    getDateStart(state) {
      state.loading = true;
      state.error = null;
    },
    getDateSuccess(state, action: PayloadAction<HijriDate[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getDateFailure(state, action: PayloadAction<string>) {
      state.data = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getDateStart,
  getDateSuccess,
  getDateFailure,
} = dateSlice.actions;

export const DateCategories = () => {
  return async (dispatch: any) => {
    try {
      dispatch(getDateStart());
      const response = await axios.get(
        "http://api.aladhan.com/v1/gToH"
      );
      dispatch(getDateSuccess(response.data));
    } catch (error: any) {
      dispatch(getDateFailure(error.message));
    }
  };
};

export default dateSlice.reducer;
