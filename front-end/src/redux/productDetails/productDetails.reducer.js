import {productDetailsActionsTypes} from "./productDetails.types";

const INITIAL_STATE = {
    loading: false,
    productDetails: [],
    error: null,
    loaded: false
}

const productDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productDetailsActionsTypes.PRODUCT_DETAILS_REQUEST:
            return {loading: true, productDetails: [], loaded: false}
        case productDetailsActionsTypes.PRODUCT_DETAILS_SUCCESS:
            return {loading: false, productDetails: action.payload, loaded: true}
        case productDetailsActionsTypes.PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload, loaded:false}
        default: 
            return state
    }
}

export default productDetailsReducer