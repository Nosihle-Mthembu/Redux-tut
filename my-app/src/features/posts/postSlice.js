import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Doe", age: 25 },
]

const postsSlice = create ({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducers