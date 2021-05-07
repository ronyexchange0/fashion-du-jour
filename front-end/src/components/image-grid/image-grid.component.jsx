import React from 'react';

import "./image-grid.style.scss";
import gridImage1 from "../../assets/grid-image1.png";
import gridImage2 from "../../assets/grid-image2.png";
import gridImage3 from "../../assets/grid-image3.png";

const ImageGrid = () => {
    return (
        <div className="row image-grid">
            <div className="col-md-8 gridImage1">
                <img className="img-fluid" src={gridImage1}/>
            </div>
            <div className="col-md-6 gridImage2">
                <img className="img-fluid" src={gridImage2}/>
            </div>
            <div className="col-md-6 gridImage3">
                <img className="img-fluid" src={gridImage3}/>
            </div>
        </div>
    )
}

export default ImageGrid
