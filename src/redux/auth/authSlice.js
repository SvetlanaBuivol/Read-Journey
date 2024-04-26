import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUserAsync,
  loginAsync,
  refreshTokenAsync,
  registerAsync,
  signoutAsync,
} from './authOperations';

const initialState = {
  name: null,
  email: null,
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(registerAsync.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(registerAsync.rejected, (state, action) => {});
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {});
    builder.addCase(signoutAsync.fulfilled, state => {
      state.name = null;
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(signoutAsync.rejected, state => {});
    builder.addCase(getCurrentUserAsync.pending, (state, action) => {
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(getCurrentUserAsync.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    });
    builder.addCase(getCurrentUserAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
      state.isLoggedIn = false;
    });
    builder.addCase(refreshTokenAsync.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshTokenAsync.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isRefreshing = false;
      state.error = null;
    });
    builder.addCase(refreshTokenAsync.rejected, (state, action) => {
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
