import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { getCats } from '../../redux/categories/categories.actions';

import "./categories.style.scss";
import catImage1 from "../../assets/cat-image1.png"
import catImage2 from "../../assets/cat-image2.png"
import catImage3 from "../../assets/cat-image3.png"

const Categories = () => {
    
    const cat = useSelector(state => state.cat);
    const {categories} = cat;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCats())
    }, [dispatch]) 
  

    return (
        <section className="categories">
            <div className="container">
                <div className="row categories-inner">
                    <div className="col-6 pics">
                        <div className="row image-grid-cat">
                            <div className="col-8 img1">
                                <img className="img-fluid" src={catImage1}/>
                            </div>
                            
                            <div className="col-6 img2">
                                <img className="img-fluid" src={catImage3}/>
                            </div>

                            <div className="col-4 img3">
                                <img className="img-fluid" src={catImage2}/>
                            </div>
                        </div>
                    </div>

                    <div className="separator"></div>

                    <div className="col-6 content">
                        <h2>Categories</h2>
                        <div className="cats">
                            {
                                categories.map(({name, _id}) => (
                                    <h3 key={_id} className="cat"><Link to={`/shop/${_id}/any/0/any`}>{name}</Link></h3>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
