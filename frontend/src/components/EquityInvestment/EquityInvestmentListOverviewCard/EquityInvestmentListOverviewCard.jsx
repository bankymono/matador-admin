import React from 'react'
import './EquityInvestmentListOverviewCard.css';

import right_arrow_icon from '../../../assets/icons/comma-right-arrow-icon.png'

const EquityInvestmentListOverviewCard = ({title_one, title_two, value_one, value_two}) => {
    return (
        <div className="e-i-list-overview-card-two-container">

                <div className="e-i-overview-card-two-numbers">
                    <div className="p-list-two-e-i-value-container">
                        <div className="desc">{title_one}</div>
                        <div className="value">{value_one}</div>
                    </div>

                    <div className="p-list-two-e-i-value-container">
                        <div className="desc">{title_two}</div>
                        <div className="value">{value_two}</div>
                    </div>
                </div>

        </div>
    )
}

export default EquityInvestmentListOverviewCard
