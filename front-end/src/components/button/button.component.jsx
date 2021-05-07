import React from 'react';
import {Link} from "react-router-dom";

import "./button.style.scss";

const Button = ({text, addClass, type, icon, link, disabled, ...otherProps}) => {
    if (type) {
        return (
            <button className="custom-button form" type="submit" {...otherProps}>{text}</button>
        )
    } 
    else if (disabled) {
        return (
            <span className="custom-button link isDisabled"><img src={icon}/>{text}</span>
        )
    } else {
        return (
            <Link to={link} onClick={addClass} className="custom-button link"><img src={icon}/>{text}</Link>
        )
    }
    
}

export default Button
