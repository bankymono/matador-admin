import React from 'react'
import './DashboardProjectsCard.css';

import right_arrow_icon from '../../../assets/icons/comma-right-arrow-icon.png'

const DashboardProjectsCard = () => {
    return (
        <div className="dashboard-top-item">
            <div className="dashboard-projects-heading-container">
                <div className="dashboard-projects-heading">Projects</div>
                <img className="right-navto-icon" src={right_arrow_icon} alt="right-arrow" />
            </div>

            <div>
                <div className="dashboard-projects-card-numbers">
                    <div className="projects-value-container">
                        <div className="desc">Total Number</div>
                        <div className="value">8,042</div>
                    </div>

                    <div className="projects-value-container">
                        <div className="desc">Total Value</div>
                        <div className="value">₦36,254,302<sup>.00</sup></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardProjectsCard
