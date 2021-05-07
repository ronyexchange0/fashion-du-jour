import React from 'react';

import "./input.style.scss";

const Input = ({placeholder, type,  ...otherProps}) => {
    return (
        <input type={type} placeholder={placeholder} {...otherProps}/>
    )
}

export default Input
