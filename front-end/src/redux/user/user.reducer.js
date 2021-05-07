import { userActionsTypes } from "./user.types"


const INITIAL_STATE = {
    loading: false,
    currentUser: null,
    error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionsTypes.SIGN_IN_USER_REQUEST:
            return {loading: true, currentUser: null}
        case userActionsTypes.SIGN_IN_USER_SUCCESS:
            return {loading: false, currentUser: action.payload}
        case userActionsTypes.SIGN_IN_USER_FAIL:
            return {loading: true, error: action.payload}
        case userActionsTypes.SIGN_UP_USER_REQUEST:
            return {loading: true, currentUser: null}
        case userActionsTypes.SIGN_UP_USER_SUCCESS:
            return {loading: false, currentUser: action.payload}
        case userActionsTypes.SIGN_UP_USER_FAIL:
            return {loading: true, error: action.payload}
        case userActionsTypes.EDIT_USER_REQUEST:
            return {loading: true, currentUser: action.payload}
        case userActionsTypes.EDIT_USER_SUCCESS:
            return {loading: false,success: true, currentUser: action.payload}
        case userActionsTypes.EDIT_USER_FAIL:
            return {loading: true, error: action.payload}
        case userActionsTypes.LOG_OUT_USER:
            return {loading: false, currentUser: null}
        default:
            return state
    }
}

export default userReducer