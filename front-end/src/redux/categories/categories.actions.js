import catsActionsTypes from "./categories.types";
import axios from "axios";

export const getCats = () => async (dispatch) => {
    try {
        dispatch({type: catsActionsTypes.CATS_REQUEST})

        const {data} = await axios.get("/api/categories")
        
        dispatch({
            type: catsActionsTypes.CATS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: catsActionsTypes.CATS_FAIL,
            payload: error
        })
    }
}