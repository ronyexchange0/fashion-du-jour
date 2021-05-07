import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import ForYou from "../../components/for-you/for-you.component";
import Categories from '../../components/categories/categories.component';
import Deals from '../../components/deals/deals.component';
import FeedsContainer from '../../components/feeds/feeds.container';
import HpBlog from '../../components/hp-blog/hp-blog.component';
import { productsListAction } from '../../redux/products/products.actions';

import "./homepage.style.scss";

const Homepage = () => {

    const productsList = useSelector(state => state.productsList)
    const {products} = productsList
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productsListAction("any", "any", "0", "any"))
    }, [dispatch])

    return (
        <main className="homepage"> 
            <ForYou products={products}/> 
            <Categories/>
            <Deals products={products}/>
            {/* <FeedsContainer heading="Instagram"/>
            <FeedsContainer heading="Facebook"/> */}
            <HpBlog/>
        </main>
    )
}

export default Homepage
