import { createSlice } from '@reduxjs/toolkit';
const { recommendedBooksAsync } = require("./booksOperations")

const initialState = {
    books: []
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    extraReducers: builder => {
        builder.addCase(recommendedBooksAsync.fulfilled, (state, action) => {
            state.books = action.payload.results;
            console.log("builder.addCase  action.payload", action.payload)
        })
    }
})

export const booksReducer = booksSlice.reducer; 