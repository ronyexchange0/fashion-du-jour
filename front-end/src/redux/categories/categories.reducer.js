import catsActionsTypes from "./categories.types";

const INITIAL_STATE = {
    loading: false,
    error: null,
    categories: []
}

const catsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case catsActionsTypes.CATS_REQUEST:
            return {loading: true, error: null, categories: []}
        case catsActionsTypes.CATS_SUCCESS:
            return {loading: false, error: null, categories: action.payload}
        case catsActionsTypes.CATS_FAIL:
            return {loading: false, error: action.payload, categories: []}
        default: 
            return state
    }
}

export default catsReducer