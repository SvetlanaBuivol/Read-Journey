import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecommendedBooks } from "services/booksApi";

export const recommendedBooksAsync = createAsyncThunk(
    'books/recommended',
    async (_, thunkAPI) => {
        try {
            const { data } = await fetchRecommendedBooks()
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)