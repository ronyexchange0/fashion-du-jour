import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";

import Stars from '../../components/stars/stars.component'
import Loader from '../../components/loader/loader.component'
import Button from '../../components/button/button.component'
import { productDetailsAction } from '../../redux/productDetails/productDetails.actions';
import { shrinkifySizes } from '../../utils/utils';

import "./product-page.style.scss";

const ProductPage = ({match}) => {

    const [sizeURL, setSize] = useState("small")
    const [colorURL, setColor] = useState("black")
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)
    const [selectedColorIndex, setSelectedColorIndex] = useState(0)

    const productDetailsReducer = useSelector(state => state.productDetails)
    const {loading, error, productDetails, loaded} = productDetailsReducer

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productDetailsAction(match.params.id))
    }, [dispatch])

    const {_id, thumb, images, name, colors, sizes, discount, price, countInStock, description} = productDetails
    console.log("TEST", sizeURL, colorURL)

    const selectSize = (index) => {
        setSelectedSizeIndex(index)
    }

    const selectColor = (index) => {
        setSelectedColorIndex(index)
    }

    return (
        <main className="product-page">
            {
                loading ? (
                    <Loader/>
                ) : error ? (
                    <h2>ERROR</h2>
                ) : loaded ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 image">
                                <div className="product-page-image-active" style={{backgroundImage: `url(${thumb})`}}></div>
                                <div className="row">
                                    {
                                        images.filter((image, idx) => idx < 6).map((image, idx) => (
                                            <div key={idx} className="col-2">
                                                <div className="product-page-image" style={{backgroundImage: `url(${image})`}}></div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-6 content">
                                <h1>{name}</h1>
                                <div className="details">
                                    <div className="colors">
                                        {
                                            colors.map((color, index) => (
                                                <span 
                                                key={index} 
                                                className={`${index == selectedColorIndex ? "selected" : ""} color ${color}`}
                                                onClick={() => {
                                                    setColor(color)
                                                    selectColor(index)
                                                }}
                                                >
                                                </span>
                                            ))
                                        }
                                    </div>

                                    <div className="sizes">
                                    {
                                        sizes.map((size, index) => {
                                            return (
                                                <span 
                                                key={index} 
                                                className={`${index == selectedSizeIndex ? "selected" : ""}  size`}
                                                onClick={() => {
                                                    setSize(size)
                                                    selectSize(index)
                                                }}
                                                >
                                                    {shrinkifySizes(size)}
                                                </span>
                                            )
                                        })
                                    }
                                    </div>
                                    <h2 className="price">
                                        {discount !== 0 && <span className="discount">{discount}$</span> }
                                        <span className={`price ${discount !== 0 && "cheaper" }`}>{price}$</span>
                                    </h2>  
                                </div>
                                <Button 
                                text={`${countInStock > 0 ? "Add To Cart" : "Out Of Stock"}`}
                                disabled={countInStock === 0}
                                link={`/cart/${_id}?${sizeURL}?${colorURL}?${discount ? discount : price }`}/>
                                <div className="description">
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>

                        {/*
                        MAYBE LATER
                        <div className="similar-products">
                            <h2>Similar Items</h2>
                            <div className="row">
                                <div className="col-md-3">
                                    <Product/>
                                </div>

                                <div className="col-md-3">
                                    <Product/>
                                </div>

                                <div className="col-md-3">
                                    <Product/>
                                </div>

                                <div className="col-md-3">
                                    <Product/>
                                </div>
                            </div>
                        </div> */}

                        <div className="reviews">
                            <h3>Reviews</h3>
                            <div className="review">
                                <div className="buyer-info">
                                    <Stars stars={4}/>
                                    <p>John Doe</p>
                                </div>
                                <p className="comment">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra sagittis pharetra est sed vulputate.
                                </p>
                            </div>

                            <div className="review">
                                <div className="buyer-info">
                                    <Stars stars="4"/>
                                    <p>John Doe</p>
                                </div>
                                <p className="comment">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra sagittis pharetra est sed vulputate.
                                </p>
                            </div>
                        </div>

                        <div className="add-review">
                            <h3>Leave a review</h3>
                            <Stars stars={4}/>
                            <textarea placeholder="Comment"></textarea>
                            <Button text="Submit"/>
                        </div>
                    </div>
                ) : ""
            }
            
        </main>
    )
}

export default ProductPage
