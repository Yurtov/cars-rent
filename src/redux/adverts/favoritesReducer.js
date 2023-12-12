import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },

  reducers: {
    addFavorites(state, action) {
      state.items.push(action.payload);
    },
    deleteFavorites(state, action) {
      const index = state.items.findIndex(items => items.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});
export const { addFavorites, deleteFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
