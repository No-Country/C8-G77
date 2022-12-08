import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/book.slice";

export default configureStore({
    reducer:{
        bookSlice
    }
})