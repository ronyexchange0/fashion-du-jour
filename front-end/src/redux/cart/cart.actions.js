import axios from "axios";
import {cartActionsTypes} from "./cart.types";

export const addItemToCart = (id, color, size, price) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type: cartActionsTypes.ADD_ITEM_TO_CART,
        payload: {
            id: id,
            name: data.name,
            thumb: data.thumb,
            size: size,
            color: color,
            price: price,
            qty: 1
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}


export const removeItemFromCart = (id , color, size) => (dispatch, getState) => {

    dispatch({
        type: cartActionsTypes.REMOVE_ITEM_FROM_CART,
        payload: {id , color, size}
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const increaseItemQuantity = (id , color, size) => (dispatch, getState) => {

    dispatch({
        type: cartActionsTypes.INCREASE_ITEM_QUANTITY,
        payload: {id, color, size}
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const decreaseItemQuantity = (id , color, size) => (dispatch, getState) => {

    dispatch({
        type: cartActionsTypes.DECREASE_ITEM_QUANTITY,
        payload: {id, color, size}
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}