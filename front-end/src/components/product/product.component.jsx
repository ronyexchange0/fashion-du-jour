import {Link} from "react-router-dom";

import Stars from '../stars/stars.component';

import "./product.style.scss"
import heart from "../../assets/heart.svg";

const Product = ({product}) => {
    return (
        <Link to={`/product/${product._id}`} className="product">
            <div className="image" style={{backgroundImage: `url(${product.thumb})`}}>
                <img className="heart" src={heart}/>
            </div>
            <h3>{product.name}</h3>
            <p className="price">
                {product.discount !== 0 && <span className="discount">{product.discount}$</span> }
                <span className={`price ${product.discount !== 0 && "cheaper" }`}>{product.price}$</span>
            </p>
            <div className="colors">
                {product.colors.map((color, index) => (
                    <span key={index} className={color}></span>
                ))}
            </div>
            <Stars stars={product.rating}/>
        </Link>
    )
}

export default Product
