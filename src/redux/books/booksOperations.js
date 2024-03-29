import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBook, addBookById, deleteOwnBook, fetchRecommendedBooks, getOwnBooks } from '../../services/booksApi';

export const recommendedBooksAsync = createAsyncThunk(
  'books/recommended',
  async ({ limit, page = 1, author, title }, thunkAPI) => {
    const queryParams = {};

    if (limit) queryParams.limit = limit;
    if (page) queryParams.page = page;
    if (author) queryParams.author = author;
    if (title) queryParams.title = title;

    const queryString = new URLSearchParams(queryParams).toString();
    try {
      const { data } = await fetchRecommendedBooks(queryString);
      if (page > data.totalPages) page = 1;
          return { ...data, page };
        // return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBookByIdAsync = createAsyncThunk(
  'books/addById',
  async (credentials, thunkAPI) => {
    try {
      await addBookById(credentials)
    } catch (error) {
      console.log("error", error)
      return thunkAPI.rejectWithValue(error.message);
    }
  })

export const addBookAsync = createAsyncThunk(
  'books/addBook',
  async (credentials, thunkAPI) => {
    try {
      await addBook(credentials)
    } catch (error) {
      console.log("error", error)
      return thunkAPI.rejectWithValue(error.message);
    }
  })

  export const getOwnBooksAsync = createAsyncThunk(
  'books/getOwnBooks',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await getOwnBooks()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    })
  
export const deleteOwnBookAsync = createAsyncThunk(
  'books/deleteOwnBook',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await deleteOwnBook(credentials)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
    )