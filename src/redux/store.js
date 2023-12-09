import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/advertsReducer';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
