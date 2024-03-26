import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn, signUp, logOut, token, currentUser } from 'services/authApi';

export const registerAsync = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await signUp(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      //   Notify.failure('Invalid email or password', {
      //     position: 'center-top',
      //   });
      return thunkAPI.rejectWithValue(error.message);
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
        token.unset()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserAsync = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue()
    }

    token.set(persistedToken)
    try {
      const { data } = await currentUser();
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
