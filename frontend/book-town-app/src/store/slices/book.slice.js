import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const bookSlice = createSlice({
    name: 'book',
    initialState: null,
    reducers: {
        setBooks: (state, action) => action.payload
    }
})

export const { setBooks } = bookSlice.actions
export default bookSlice.reducer

export const getAllBooks = () => (dispatch) => {
    const URL = 'https://pseudo-booktown.onrender.com/api/v1/books'
    return axios.get(URL)
        .then(res => dispatch(setBooks(res.data)))
        .catch(err => console.log(err))
}