import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./root-reducer.js"

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [] 

const userInfo = localStorage.getItem("userInfo") ? 
{
    loding: false,
    currentUser: JSON.parse(localStorage.getItem("userInfo")),
    error: null 
}
: {
    loading: false,
    currentUser: null,
    error: null,
}

const initalState = {
    cart: {cartItems},
    user: {...userInfo}
}

const middlewares = [thunk]

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store