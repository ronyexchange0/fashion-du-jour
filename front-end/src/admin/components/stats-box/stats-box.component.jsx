import React from 'react'

import "./stats-box.style.scss";

const StatsBox = ({amount, title, percentage}) => {
    return (
        <div className="stats-box">
            <div className="stats">
                <span>{amount}</span>
                <p>{title}</p>
            </div>
            {
                percentage && <span className="percentage">increased by {percentage}%</span>
            }
        </div>
    )
}

export default StatsBox
