import { createSlice } from '@reduxjs/toolkit';
import {
  recommendedBooksAsync,
  addBookAsync,
  getOwnBooksAsync,
  deleteOwnBookAsync,
  getBookByIdAsync,
  startReadingBookAsync,
  stopReadingBookAsync,
  deleteReadingEventAsync,
} from './booksOperations';

const initialState = {
  books: [],
  ownBooks: [],
  readingBook: [],
  currentPage: 1,
  totalPages: 0,
  isLoading: false,
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
    builder.addCase(recommendedBooksAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(recommendedBooksAsync.fulfilled, (state, action) => {
      state.books = action.payload.results;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.page;
      state.isLoading = false;
    });
    builder.addCase(recommendedBooksAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addBookAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addBookAsync.fulfilled, (state, action) => {
      state.ownBooks.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(addBookAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getOwnBooksAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getOwnBooksAsync.fulfilled, (state, action) => {
      state.ownBooks = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getOwnBooksAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteOwnBookAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteOwnBookAsync.fulfilled, (state, action) => {
      state.ownBooks = state.ownBooks.filter(
        book => action.payload.id !== book._id
      );
      state.isLoading = false;
    });
    builder.addCase(deleteOwnBookAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(startReadingBookAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(startReadingBookAsync.fulfilled, (state, action) => {
      state.readingBook = action.payload;
      state.isLoading = false;
    });
    builder.addCase(startReadingBookAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(stopReadingBookAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(stopReadingBookAsync.fulfilled, (state, action) => {
      state.readingBook = action.payload;
      state.isLoading = false;
    });
    builder.addCase(stopReadingBookAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getBookByIdAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getBookByIdAsync.fulfilled, (state, action) => {
      state.readingBook = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getBookByIdAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteReadingEventAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteReadingEventAsync.fulfilled, (state, action) => {
      state.readingBook = action.payload;
      state.isLoading = false;
    });
    builder.addCase(deleteReadingEventAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { goToNextPage, goToPrevPage } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
