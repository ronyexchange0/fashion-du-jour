import React from 'react';
import {useDispatch} from "react-redux";

import { decreaseItemQuantity, 
    increaseItemQuantity, 
    removeItemFromCart 
} from '../../redux/cart/cart.actions';

import "./cart-product.style.scss";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeft from "../../assets/arrow-left.svg";

const CartProduct = ({id, name, price, color, size, thumb, qty}) => {
    const dispatch = useDispatch()
    return (
        <div className="row checkout-product">
            <div className="col-md-3 product-image">
                <div className="image" style={{backgroundImage: `url(${thumb})`}}></div>
            </div>

            <div className="col-md-3 options">
                <h3>{name}</h3>
                <span className={`color ${color}`}></span>
                <span className="size">{size}</span>
            </div>

            <div className="col-md-3 quantity">

                <img src={arrowLeft}
                onClick={() => {
                    qty > 1 
                    ? dispatch(decreaseItemQuantity(id, color, size))
                    : dispatch(removeItemFromCart(id, color, size))
                }}/>
                
                <span>{qty}</span>

                <img 
                src={arrowRight}
                onClick={() => {
                    dispatch(increaseItemQuantity(id, color, size))
                }}/>
            </div>

            <div className="col-md-3 price">
                <span>{price * qty}$</span>
            </div>
        </div>
    )
}

export default CartProduct
