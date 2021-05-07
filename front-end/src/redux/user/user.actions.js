import axios from "axios";
import { userActionsTypes } from "./user.types";

export const signInUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: userActionsTypes.SIGN_IN_USER_REQUEST
        })
        
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const {data} = await axios.post("/api/users/login", 
        {email, password}, 
        config)
        
        dispatch({
            type: userActionsTypes.SIGN_IN_USER_SUCCESS,
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: userActionsTypes.SIGN_IN_USER_FAIL,
            payload: error.message
        })
    }
}

export const registerUser = (name, email, password) => async (dispatch) => {
    try {

        dispatch({
            type: userActionsTypes.SIGN_UP_USER_REQUEST
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const {data} = await axios.post("http://localhost:5000/api/users/", 
        {
            name, email, password
        },
        config)

        dispatch({
            type: userActionsTypes.SIGN_UP_USER_SUCCESS,
            payload: data
        })


        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: userActionsTypes.SIGN_UP_USER_FAIL,
            payload: error
        })
    }
} 


export const logOutUser = () => async (dispatch) => {
        dispatch({
            type: userActionsTypes.LOG_OUT_USER,
        })
        localStorage.removeItem("userInfo")
} 

export const editUserAction = (user) => async (dispatch, getState) => {
    try {
        
        const {user: {currentUser}} = getState()
        dispatch({
            type: userActionsTypes.EDIT_USER_REQUEST,
            payload: currentUser
        })

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${currentUser.token}`
            }
        }

        const {data} = await axios.put("/api/users/profile", user, config)

        dispatch({
            type: userActionsTypes.EDIT_USER_SUCCESS,
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: userActionsTypes,
            payload: error
        })
    }
}