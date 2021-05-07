import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import {Link} from "react-router-dom";

import HpProduct from '../hp-product/hp-prodcut.component';

import 'swiper/swiper.scss';
import "./for-you.style.scss"; 
import 'swiper/components/navigation/navigation.scss';


SwiperCore.use(Navigation);

const ForYou = ({products}) => {

    useEffect(() => {

        if (products.length > 1) {
            console.log("test")
            const mediaQuery = window.matchMedia('(min-width: 768px)')
            const slideHeight =  document.querySelector(".swiper-slide").getBoundingClientRect().height
            if (mediaQuery.matches) {
                document.querySelector(".for-you").style.height = `${(slideHeight*2) + 200}px`
            } else {
                document.querySelector(".for-you").style.height = `${slideHeight + 100}px`
            }
        }
        
    }, [products]) 

    return (
        <section className="for-you">
            <div className="container">
                <div className="for-you-container">
                    <div className="headline">
                        <h2>For You</h2>
                        <Link to="shop">View all</Link>
                    </div>

                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    slidesPerColumn={1}
                    scrollbar={{ draggable: true }}
                    navigation
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            slidesPerColumn: 2
                        }
                        }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product._id} >
                                <HpProduct product={product}/>
                            </SwiperSlide>
                        ))}
                        
                    </Swiper>
                </div>
            </div>  
        </section>
    )
}

export default ForYou
