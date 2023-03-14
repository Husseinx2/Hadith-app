import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { HadithLanguage } from "../models";

interface LanguageState {
  data: HadithLanguage[];
  loading: boolean;
  error: string | null;
}

const initialState: LanguageState = {
  data: [],
  loading: false,
  error: null,
};

const languageSlice = createSlice({
  name: "Language",
  initialState,
  reducers: {
    getLanguageStart(state) {
      state.loading = true;
      state.error = null;
    },
    getLanguageSuccess(state, action: PayloadAction<HadithLanguage[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getLanguageFailure(state, action: PayloadAction<string>) {
      state.data = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getLanguageStart,
  getLanguageSuccess,
  getLanguageFailure,
} = languageSlice.actions;

export const LanguageCategories = () => {
  return async (dispatch: any) => {
    try {
      dispatch(getLanguageStart());
      const response = await axios.get(
        "https://hadeethenc.com/api/v1/languages"
      );
      dispatch(getLanguageSuccess(response.data));
    } catch (error: any) {
      dispatch(getLanguageFailure(error.message));
    }
  };
};

export default languageSlice.reducer;
