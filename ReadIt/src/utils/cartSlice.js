import { createSlice } from "@reduxjs/toolkit";
import books from "../assets/mockData";
console.log(books);

const librarySlice = createSlice({
    name: "library",
    initialState: {
        books: books,
    },
    reducers: {
        addBook: (state, action) => {
            state.books.unshift(action.payload);

        }
    },
}); 
export const { addBook } = librarySlice.actions;
export default librarySlice.reducer;