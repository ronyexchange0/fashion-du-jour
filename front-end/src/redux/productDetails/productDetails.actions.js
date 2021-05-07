import {productDetailsActionsTypes} from "./productDetails.types";
import axios from "axios";

export const productDetailsAction = (id) => async (dispatch) => {
    try {
        dispatch({type: productDetailsActionsTypes.PRODUCT_DETAILS_REQUEST })

        const {data} = await axios.get(`/api/products/${id}`)

        dispatch({type: productDetailsActionsTypes.PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (error){
        dispatch({type: productDetailsActionsTypes.PRODUCT_DETAILS_FAIL, payload: error})
    }
}
