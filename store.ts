import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './src/features/categoriesSlice';
import languageReducer from './src/features/languaugeSlice'
import dateReducer from './src/features/dateSlice'
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    languages: languageReducer,
    date: dateReducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
