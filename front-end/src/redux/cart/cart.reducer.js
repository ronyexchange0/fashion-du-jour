import { 
    removeItemFromCart,
    addItemToCart,
    increaseItemQuantity,
    decreaseItemQuantity
} from "./cart.utils.js";
import {cartActionsTypes} from "./cart.types";

const INITIAL_STATE = {
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionsTypes.ADD_ITEM_TO_CART:
            return {cartItems: addItemToCart(state.cartItems, action.payload)}
            
        case cartActionsTypes.REMOVE_ITEM_FROM_CART:
            return {cartItems: removeItemFromCart(state.cartItems, action.payload)}

        case cartActionsTypes.INCREASE_ITEM_QUANTITY: 
            return {cartItems: increaseItemQuantity(state.cartItems, action.payload)}

        case cartActionsTypes.DECREASE_ITEM_QUANTITY:
            return {cartItems: decreaseItemQuantity(state.cartItems, action.payload)}

        default:
            return state
    }
}

export default cartReducer