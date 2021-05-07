import React from 'react';

import Button from "../button/button.component";
import { shrinkifySizes } from '../../utils/utils';
import {Link} from "react-router-dom";

import heart from "../../assets/heart.svg";
import heartRed from "../../assets/heart-red.svg";
import "./hp-product.style.scss";

const HpProduct = ({product}) => {
    const {price, sizes, addedToWishlist, thumb, discount, _id} = product
    return (
            <Link to={`product/${_id}`} className="hp-product" style={{backgroundImage: `url(${thumb})`}}>
                <div className="overlay"></div>
                <div className="details">
                    <div className="price-wrapper">
                        {discount !== 0 && <span className="discount">{discount}$</span> }
                        <span className={`price ${discount !== 0 && "cheaper" }`}>{price}$</span>
                        
                    </div>

                    <div className="wrapper">
                        {/* <div className="action">
                            <Button text={"Add To Cart"}/>
                        </div> */}
                        <div className="size">
                            {
                                sizes.map((size, index) => {
                                    return (
                                        <span key={index}>{index !== 0 && " /"} {shrinkifySizes(size)}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
                <div className="wishlist-icon">
                    { 
                        addedToWishlist 
                        ?  <img src={heartRed} /> 
                        : <img src={heart} />    
                    }
                </div> 
            </Link>                            
    )
}

export default HpProduct