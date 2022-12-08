import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./slices/book.slice";

export default configureStore({
    reducer:{
        booksSlice
    }
})