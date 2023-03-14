import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { HadithCategories } from "../models";

interface CategoriesState {
  data: HadithCategories[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  data: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategoriesStart(state) {
      state.loading = true;
      state.error = null;
    },
    getCategoriesSuccess(state, action: PayloadAction<HadithCategories[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getCategoriesFailure(state, action: PayloadAction<string>) {
      state.data = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
} = categoriesSlice.actions;

export const getCategories = () => {
  return async (dispatch: any) => {
    try {
      dispatch(getCategoriesStart());
      const response = await axios.get(
        "https://hadeethenc.com/api/v1/categories/list/?language=en"
      );
      dispatch(getCategoriesSuccess(response.data));
    } catch (error: any) {
      dispatch(getCategoriesFailure(error.message));
    }
  };
};

export default categoriesSlice.reducer;
