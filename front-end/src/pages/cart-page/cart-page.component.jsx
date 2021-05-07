import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import CartProduct from '../../components/cart-product/cart-product.component';
import { addItemToCart } from '../../redux/cart/cart.actions';

import "./cart-page.style.scss";
import StripeButton from '../../components/stripe-button/stripe-button.component';

const CartPage = ({match,location}) => {
    const URL = location.search.split("?")
    const size = URL[1]
    const color = URL[2]
    const price = URL[3]
    const id = match.params.id

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    console.log("URL", location)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addItemToCart(id, color, size, price))
    }, [dispatch, id, color, size, price])
    
    return (
        <main className="checkout-page">
            <div className="container">
                <h1>Checkout</h1>
                <div className="row checkout-inner d-none d-md-flex">
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <span className="item">Item</span>
                    </div>
                    <div className="col-md-3">
                        <span className="item">Quantity</span>
                    </div>
                    <div className="col-md-3">
                        <span className="item">Price</span>
                    </div>
                </div>

                <div className="checkout-products-list">
                    {
                        cartItems.length ? 
                            cartItems.map(({...otherProps}, index) => (
                                <CartProduct 
                                key={index}
                                {...otherProps}/>
                            ))
                        : <h2>No products Added</h2>
                        //later message
                    }
                </div>
                {
                    cartItems.length ?
                        <div className="pay text-right">
                            <p className="total-price">Total: {
                                cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)
                            }$</p>
                            <StripeButton price={cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)} />
                        </div>
                    : ""
                }
            </div>
        </main>
    )
}

export default CartPage
