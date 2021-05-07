import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import HpProduct from "../hp-product/hp-prodcut.component";

import "./deals.style.scss";
import 'swiper/swiper.scss';

const Deals = ({products}) => {
    
    return (
        <section className="deals">
            <div className="container text-center">
                <h2>Hot Deals</h2>
            </div>
            <Swiper
            slidesPerView= "auto"
            spaceBetween= {50}
            centeredSlides= {true}
            initialSlide= {2}
            breakpoints={{
                768: {
                    spaceBetween : 150
                }
            }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product._id} >
                        <HpProduct product={product}/>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </section>
    )
}

export default Deals
