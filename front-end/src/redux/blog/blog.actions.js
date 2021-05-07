import blogActionsTypes from "./blog.types";
import axios from "axios";

export const getPostsAction = () => async (dispatch) => {
    try {
        dispatch({type: blogActionsTypes.POSTS_LIST_REQUEST})

        const {data} = await axios.get("/api/posts")

        dispatch({
            type: blogActionsTypes.POSTS_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: blogActionsTypes.POSTS_LIST_FAIL,
            payload: error
        })
    }
}