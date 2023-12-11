import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchLoadMoreAdverts, fetchSearchAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchAdvertsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleFetchLoadMoreAdvertsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...action.payload];
};

const handleFetchSearchAdvertsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFetchAdvertsFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchLoadMoreAdverts.pending, handlePending)
      .addCase(fetchLoadMoreAdverts.fulfilled, handleFetchLoadMoreAdvertsFulfilled)
      .addCase(fetchLoadMoreAdverts.rejected, handleRejected)
      .addCase(fetchSearchAdverts.pending, handlePending)
      .addCase(fetchSearchAdverts.fulfilled, handleFetchSearchAdvertsFulfilled)
      .addCase(fetchSearchAdverts.rejected, handleRejected),
});

export const advertsReducer = advertsSlice.reducer;
