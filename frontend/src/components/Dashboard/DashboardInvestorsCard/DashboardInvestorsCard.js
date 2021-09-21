import React from 'react'
import './DashboardInvestorsCard.css'
import arrow_up_icon from '../../../assets/icons/arrow-up.png'
import right_arrow_icon from '../../../assets/icons/comma-right-arrow-icon.png'

const DashboardInvestorsCard = () => {
    return (
            <div className="dashboard-top-item">
                <div className="dashboard-investors-heading-container">
                    <div className="dashboard-investors-heading">Investors</div>
                    <img className="right-navto-icon" src={right_arrow_icon} alt="right-arrow" />
                </div>

                <div>
                    <div className="dashboard-investors-value">12,254</div>
                    <div className="dashboard-investors-growth-rate-container">
                        <div className="investors-grwth-percent increase-color">
                            <img src={arrow_up_icon} alt="arrow up"/>
                            <div>5.7%</div>
                        </div>
                        <div>Since last month</div>
                    </div>
                </div>
            </div>
        )
}

export default DashboardInvestorsCard
