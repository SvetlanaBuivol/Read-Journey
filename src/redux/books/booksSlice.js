import { createSlice } from '@reduxjs/toolkit';
const { recommendedBooksAsync, addBookAsync, getOwnBooksAsync, deleteOwnBookAsync } = require('./booksOperations');

const initialState = {
  books: [],
  ownBooks: [],
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
    });
    builder.addCase(addBookAsync.fulfilled, (state, action) => {
      // state.books = action.payload.results;
      // state.totalPages = action.payload.totalPages;
      // state.currentPage = action.payload.page;
    });
    builder.addCase(getOwnBooksAsync.fulfilled, (state, action) => {
      state.ownBooks = action.payload;
    });
    builder.addCase(deleteOwnBookAsync.fulfilled, (state, action) => {
      state.ownBooks = state.ownBooks.filter(book => action.payload.id !== book._id);
    });
  },
  
});

export const {goToNextPage, goToPrevPage} = booksSlice.actions
export const booksReducer = booksSlice.reducer;
