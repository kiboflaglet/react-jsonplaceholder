import { configureStore } from "@reduxjs/toolkit";
import { PostSliceReducer } from "../features/posts/postsSlice";

export const store = configureStore({
    reducer: {
        PostSliceReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch