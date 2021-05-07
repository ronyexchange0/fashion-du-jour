import React from 'react';
import { Link } from 'react-router-dom';

import "./post.style.scss";

const Post = ({title, date, thumbnail, id}) => {
    return (
        <Link to={`/blog/${id}`} className="col-lg-6 post">
            <div className=" wrapper mx-0">
                <div className="column bg-column">
                    <div className="bg"></div>
                </div>
                <div className="column thumb-column">
                    <div className="thumb" style={{backgroundImage: `url(${thumbnail})`}}>
                        <div className="overlay"></div>
                        <div className="content">
                            <h3>{title}</h3>
                            <div className="date-line">
                                <span className="line"></span>
                                <span className="date">{date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Post
