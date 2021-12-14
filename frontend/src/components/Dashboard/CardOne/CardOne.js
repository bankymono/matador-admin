import React from 'react'

const CardOne = ({currentRatio}) => {
    return (
        <div className="dashboard-top-item dashboard-first-card">
            <div className="text-desc">Current Ratio</div>
            <div className="value">{currentRatio}%</div>
        </div>
    )
}

export default CardOne
