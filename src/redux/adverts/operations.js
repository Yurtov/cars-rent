import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6570658f09586eff66414aaf.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      console.log('Adverts fetched successfully:', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAdvertsById = async id => {
  const response = await axios.get(`/adverts/${id}`);
  return response.data;
};

export const fetchSearchAdverts = async (page, query) => {
  const response = await axios.get(`/adverts`, {
    params: {
      include_adult: false,
      query: query,
      page: page,
    },
  });
  return response.data;
};
