import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../app/store'
import { fetchPosts } from './PostsThunk'

const PostsList = () => {

    const dispatch = useDispatch<AppDispatch>()


    const posts = useSelector((state: RootState) => state.PostSliceReducer.items)
    const status = useSelector((state: RootState) => state.PostSliceReducer.status)
    const error = useSelector((state: RootState) => state.PostSliceReducer.error)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts())
        }
    }, [status, dispatch])

    if (status === 'failed') return <>Error: {error}</>
    if (status === 'loading') return <>Loading</>

    return (
        <div>
            {JSON.stringify(posts)}
        </div>
    )
}

export default PostsList
