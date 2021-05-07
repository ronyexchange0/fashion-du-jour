import React, {useEffect} from 'react';

import Feeds from "./feeds.component";

import "./feeds.style.scss";

const FeedsContainer = ({heading}) => {
    
    return (
        <section className="feeds">
            <div className="container">
                <h2>{heading}</h2>
                <Feeds/>
            </div>
        </section>
    )
}

export default FeedsContainer
