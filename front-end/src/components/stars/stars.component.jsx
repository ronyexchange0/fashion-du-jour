import React from 'react';

import "./stars.style.scss";
import star from "../../assets/star.svg";
import halfStar from "../../assets/half-star.svg";

const Stars = ({stars}) => {
    return (
        <div className="stars">
            {
                stars == 1 && <img src={star}/> 
            }

            {
                stars > 1 && stars < 2 && 
                <>
                    <img src={star}/>
                    <img src={halfStar}/>
                </>
            }

            {
                stars == 2 && 
                <>
                    <img src={star}/> 
                    <img src={star}/>
                </>
            }

            {
                stars > 2 && stars < 3 && 
                <>
                    <img src={star}/> 
                    <img src={star}/>
                    <img src={halfStar}/>
                </>
            }

            {
                stars == 3 && 
                <>
                    <img src={star}/> 
                    <img src={star}/>
                    <img src={star}/>
                </>
            }

            {
                stars > 3 && stars < 4 && 
                <>
                    <img src={star}/> 
                    <img src={star}/>
                    <img src={star}/>
                    <img src={halfStar}/>
                </>
            }

            {
                stars == 4 && 
                <>
                    <img src={star}/> 
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                </>
            }

            {
                stars > 4 && stars < 5 && 
                <>
                    <img src={star}/> 
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={halfStar}/>
                </>
            }

            {
                stars == 5 && 
                <>
                    <img src={star}/> 
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                </>
            }

            {/* THE REVIEWS LATER (304 reviews) DESIGN FOR MORE */}
        </div>
    )
}

export default Stars
