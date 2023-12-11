import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6570658f09586eff66414aaf.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: {
          page: 1,
          limit: 12,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchLoadMoreAdverts = createAsyncThunk(
  'adverts/fetchLoadMore',
  async (params, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: {
          page: params,
          limit: 12,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchSearchAdverts = createAsyncThunk(
  'adverts/fetchByParams',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts`, {
        params: query,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
