import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { type AppDispatch } from '../../app/store'
import { addNewPost } from './PostsThunk'

const AddPostItem = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !body.trim()) {
            return
        }

        dispatch(addNewPost({ title, body }))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title'
                    />
                </label>
                <label>
                    Body
                    <input
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder='Body'
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default AddPostItem
