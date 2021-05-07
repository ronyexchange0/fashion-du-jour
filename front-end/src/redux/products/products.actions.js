import {productsActionsTypes} from "./products.types";
import axios from "axios";

export const productsListAction = (cat, color, from, to) => async (dispatch) => {
    try {
        dispatch({type: productsActionsTypes.PRODUCTS_LIST_REQUEST })

        const {data} = await axios.get("/api/products")

        dispatch({
            type: productsActionsTypes.PRODUCTS_LIST_SUCCESS, 
            payload: {
                cat,
                color,
                from,
                to,
                data
            }})

    } catch (error){
        dispatch({type: productsActionsTypes.PRODUCTS_LIST_FAIL, payload: error})
    }
}
