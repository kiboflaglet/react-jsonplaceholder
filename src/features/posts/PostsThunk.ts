import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return res.data
    }
)


export const addNewPost = createAsyncThunk(
    'posts/newTask',
    async (newPost: { title: string; body: string }) => {
        const res = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            newPost
        )
        return res.data
    }
)