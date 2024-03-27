import { createSlice } from '@reduxjs/toolkit';
const { recommendedBooksAsync } = require('./booksOperations');

const initialState = {
  books: [],
  currentPage: 1,
  totalPages: 0,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    goToNextPage(state) {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
    goToPrevPage(state) {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(recommendedBooksAsync.fulfilled, (state, action) => {
      state.books = action.payload.results;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.page;
      console.log('builder.addCase  action.payload', action.payload);
    });
  },
});

export const {goToNextPage, goToPrevPage} = booksSlice.actions
export const booksReducer = booksSlice.reducer;
