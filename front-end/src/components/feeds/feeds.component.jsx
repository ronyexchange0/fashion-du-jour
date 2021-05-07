import React, { Component } from 'react'

import Feed from '../feed/feed.component';

import "./feeds.style.scss";

export class Feeds extends Component {
    state = {
        FEEDS_EXAMPLE: [1, 2, 3, 4]
    }
    render() {
        return (
            <div className="feeds-inner row">
                {
                    this.state.FEEDS_EXAMPLE.map((v, i) => (
                        <Feed key={i}/>
                    ))
                }
            </div>
        )
    }
}

export default Feeds
