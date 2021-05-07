import {combineReducers} from "redux";
import cartReducer from "./cart/cart.reducer.js";
import productDetailsReducer from "./productDetails/productDetails.reducer.js";
import productsReducer from "./products/products.reducer.js";
import userReducer from "./user/user.reducer.js";
import blogReducer from "./blog/blog.reducer.js";
import catsReducer from "./categories/categories.reducer.js";

export default combineReducers({
    productsList: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer ,
    user: userReducer,
    blog: blogReducer,
    cat: catsReducer
})