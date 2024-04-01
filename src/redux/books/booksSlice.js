import { createSlice } from '@reduxjs/toolkit';
const { recommendedBooksAsync, addBookAsync, getOwnBooksAsync, deleteOwnBookAsync, getBookByIdAsync, startReadingBookAsync, stopReadingBookAsync } = require('./booksOperations');

const initialState = {
  books: [],
  ownBooks: [],
  readingBook: [],
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
      state.ownBooks.push(action.payload);
    });
    builder.addCase(getOwnBooksAsync.fulfilled, (state, action) => {
      state.ownBooks = action.payload;
    });
    builder.addCase(deleteOwnBookAsync.fulfilled, (state, action) => {
      state.ownBooks = state.ownBooks.filter(book => action.payload.id !== book._id);
    });
    builder.addCase(startReadingBookAsync.fulfilled, (state, action) => {
      state.readingBook = action.payload;
    });
    builder.addCase(stopReadingBookAsync.fulfilled, (state, action) => {
      state.readingBook = action.payload;
    });
    builder.addCase(getBookByIdAsync.fulfilled, (state, action) => {
      state.readingBook = action.payload;
      console.log("builder.addCase  action.payload", action.payload)
    });
  },
  
});

export const {goToNextPage, goToPrevPage} = booksSlice.actions
export const booksReducer = booksSlice.reducer;
