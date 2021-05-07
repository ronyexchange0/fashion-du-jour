import React from 'react'

import "./feed.style.scss";

const Feed = () => {
    return (
        <div className="col-12 col-sm-6 col-lg-3 feed">
            <div className="feed-card">
                <div className="feed-bg" style={{backgroundImage: "url(https://media.gq.com/photos/59af20a43482f876ccb37eee/3:2/w_2396,h_1597,c_limit/gq-suite-guide-thomas-whiteside05.jpg)"}}></div>
                <div className="content">
                    <div className="content-upper">
                        <img src="https://media.gq.com/photos/59af20a43482f876ccb37eee/3:2/w_2396,h_1597,c_limit/gq-suite-guide-thomas-whiteside05.jpg" />
                        <h3>Fashion <br/> du jour</h3>
                    </div>
                    <p className="content-lower">
                        Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Dui, auctor
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Feed
