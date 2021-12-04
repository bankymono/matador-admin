import React from 'react'
import './EquityBasedProjectsListOverviewCard.css';

// import right_arrow_icon from '../../../assets/icons/comma-right-arrow-icon.png'

const EquityBasedProjectListOverviewCard = () => {
    return (
        <div className="equity-based-projects-list-overview-card-container">
            <div className="equity-based-projects-overview-card-heading-container">
                <div className="equity-based-projects-overview-card-heading">Equity-based Project</div>
            </div>

            <div>
                <div className="equity-based-projects-overview-card-numbers">
                    <div className="equity-based-projects-value-container">
                        <div className="desc">Number of Equity-based</div>
                        <div className="value">54,000</div>
                    </div>

                    <div className="equity-based-projects-value-container">
                        <div className="desc">Value of Equity-based</div>
                        <div className="value">₦36,254</div>
                    </div>

                    <div className="equity-based-projects-value-container">
                        <div className="desc">Revenue generated</div>
                        <div className="value">₦36,254</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EquityBasedProjectListOverviewCard
