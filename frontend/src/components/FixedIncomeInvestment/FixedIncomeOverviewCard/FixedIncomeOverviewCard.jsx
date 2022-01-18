import React from 'react'
import './FixedIncomeOverviewCard.css';

import right_arrow_icon from '../../../assets/icons/comma-right-arrow-icon.png'

const FixedIncomeOverviewCard = ({title_one, title_two, value_one, value_two}) => {
    return (
        <div className="f-i-list-overview-card-two-container">

                <div className="f-i-overview-card-two-numbers">
                    <div className="p-list-two-f-i-value-container">
                        <div className="desc">{title_one}</div>
                        <div className="value">{value_one}</div>
                    </div>

                    <div className="p-list-two-f-i-value-container">
                        <div className="desc">{title_two}</div>
                        <div className="value">{value_two}</div>
                    </div>
                </div>

        </div>
    )
}

export default FixedIncomeOverviewCard
