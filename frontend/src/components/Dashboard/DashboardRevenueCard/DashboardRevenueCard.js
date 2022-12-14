import React from 'react'
import "./DashboardRevenueCard.css";
import arrow_up_icon from '../../../assets/icons/arrow-up.png'
import { numberWithComma } from '../../../redux/numberFormatter';

const DashboardRevenueCard = ({ revenueData }) => {
    return (
        <div className="dashboard-top-item dashboard-revenue-container">
            <div className="dashboard-revenue-heading">Revenue</div>

            <div>
                <div className="dashboard-revenue-value">{numberWithComma(revenueData)}</div>
                <div className="dashboard-revenue-growth-rate-container">
                    <div className="revenue-grwth-percent increase-color"><img src={arrow_up_icon} alt="arrow up" /><div>5.7%</div></div>
                    <div>Since last month</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardRevenueCard
