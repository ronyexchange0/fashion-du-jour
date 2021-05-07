import {productsActionsTypes} from "./products.types";

const INITIAL_STATE = {
    loading: false,
    products: [],
    error: null,
    productsloaded: false
}



const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productsActionsTypes.PRODUCTS_LIST_REQUEST:
            return {loading: true, products: [], productsloaded: false}
        case productsActionsTypes.PRODUCTS_LIST_SUCCESS:
            return {
                loading: false, 
                productsloaded: true,
                products: action.payload.data.filter(product => {

                    const priceToFilter = product.discount === 0 ? product.price : product.discount 

                    if (product.category === action.payload.cat || action.payload.cat === "any") {
                        
                        if ((priceToFilter > action.payload.from && priceToFilter < action.payload.to) || (action.payload.from == 0 && action.payload.to === "any")) {
                            if (product.colors.includes(action.payload.color) || action.payload.color === "any") {
                                return true
                            } else {
                                return false
                            }
                        
                        } else {
                            return false
                        }

                    } else {
                        return false
                    }
                })
            }
  
        case productsActionsTypes.PRODUCTS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export default productsReducer