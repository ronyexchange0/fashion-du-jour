import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import Loader from '../../components/loader/loader.component';
import Product from '../../components/product/product.component';
import AsideFilter from '../../components/aside-filter/aside-filter.component';
import Button from '../../components/button/button.component';
import { productsListAction } from '../../redux/products/products.actions';

import "./shop-page.style.scss";

const ShopPage = ({match}) => {
  
    const cat = match.params.cat ? match.params.cat : "any"
    const color = match.params.color ? match.params.color : "any"
    const from = match.params.from ? match.params.from : 0
    const to = match.params.to ? match.params.to : "any"

    const productsList = useSelector(state => state.productsList)
    const {loading, error, products, productsloaded} = productsList

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productsListAction(cat, color, from, to))
        
    }, [dispatch, cat, color, from, to])


    
    const addClass = (e) => {
        const mediaQuery = window.matchMedia('(max-width: 768px)')
        if (mediaQuery.matches) {
            document.querySelector(".filter").classList.toggle("mobile");
            console.log("text")
        }
    }

    return (
        <main className="shop-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <AsideFilter catToSelect={cat}/>
                    </div>
                    {
                        loading ? (
                            <Loader/>
                        ) : error ? (
                            <h2>ERROR</h2>
                        ) : productsloaded ? (
                            <div className="products col-md-9">
                                <div className="d-flex justify-content-between align-items-center heading">
                                    <h1>Shop</h1>
                                    <p><span>{products.length} </span>items found</p>
                                </div>
                                <Button addClass={addClass} text="Filters"></Button>
                                <div className="row">
                                    {
                                        products.map((product) => (
                                            <div key={product._id} className="col-sm-6 col-lg-4 ">
                                                <Product product={product}/>
                                            </div>
                                        ))
                                    }    
                                </div>
                            </div>
                        ) : ""
                    }
                </div>
            </div>
        </main>
        )
    }

export default ShopPage
