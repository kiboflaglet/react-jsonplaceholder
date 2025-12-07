import { createSlice } from "@reduxjs/toolkit";
import { addNewPost, fetchPosts } from "./PostsThunk";



interface PostState {
    items: any;
    status: "loading" | "succeeded" | "failed" | "idle"
    error: string | null
}

const initialState: PostState = {
    items: [],
    status: 'idle',
    error: null
}

const PostSlice = createSlice({
    name: "Posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.error = null
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.error = null;
                state.items = action.payload;
                state.status = 'succeeded'
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message || "Something unexpected happened"
                state.items = []
                state.status = 'failed'
            })
            .addCase(addNewPost.pending, (state) => {
                state.error = null;
                state.status = 'loading';
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                state.error = null;
                state.status = 'succeeded';
                state.items.push(action.payload)
            })
            .addCase(addNewPost.rejected, (state, action) => {
                state.error = action.error.message || "Something unexpected happened"
                state.status = 'failed';
            })
    },
})

export const PostSliceReducer = PostSlice.reducer;
