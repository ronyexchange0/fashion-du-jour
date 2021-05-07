import blogActionsTypes from "./blog.types";

const INITIAL_STATE = {
    loading: false,
    error: null,
    posts: []
}

const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case blogActionsTypes.POSTS_LIST_REQUEST:
            return {loading: true, error: null, posts: []}
        case blogActionsTypes.POSTS_LIST_SUCCESS:
            return {loading: false, error: null, posts: action.payload}
        case blogActionsTypes.POSTS_LIST_FAIL:
            return {loading: false, error: action.payload, posts: []}
        default: 
            return state
    }
}

export default blogReducer