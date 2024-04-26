import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  logIn,
  signUp,
  logOut,
  token,
  currentUser,
  refreshToken,
} from 'services/authApi';

export const registerAsync = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await signUp(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await logIn(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signoutAsync = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await logOut();
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserAsync = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Token is not available');
    }

    token.set(persistedToken);
    try {
      const { data } = await currentUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const refreshTokenAsync = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;

    if (persistedToken === null) {
      // return thunkAPI.rejectWithValue();
      throw new Error('No refresh token');
    }

    token.set(persistedToken);

    try {
      const { data } = await refreshToken();

      const newToken = data.token;
      token.set(newToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
