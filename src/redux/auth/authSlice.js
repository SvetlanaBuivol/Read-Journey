import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserAsync, loginAsync, registerAsync, signoutAsync } from './authOperations';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
    builder.addCase(signoutAsync.rejected, state => { });
    builder.addCase(getCurrentUserAsync.fulfilled, (state, action) => {
       state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    })
    // builder.addCase(refreshCurrentUserAsync.pending, state => {
    //   state.isRefreshing = true;
    // });
    // builder.addCase(refreshCurrentUserAsync.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // });
    // builder.addCase(refreshCurrentUserAsync.rejected, state => {
    //   state.isRefreshing = false;
    // });
  },
});

export const authReducer = authSlice.reducer;
