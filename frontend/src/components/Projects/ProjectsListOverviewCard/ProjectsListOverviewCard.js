import React from 'react'
import './ProjectsListOverviewCard.css';

import right_arrow_icon from '../../../assets/icons/comma-right-arrow-icon.png'

const ProjectListOverviewCard = () => {
    return (
        <div className="projects-list-overview-card-container">
            <div className="projects-overview-card-heading-container">
                <div className="projects-overview-card-heading">Projects</div>
            </div>

            <div>
                <div className="projects-overview-card-numbers">
                    <div className="projects-value-container">
                        <div className="desc">Number of Projects</div>
                        <div className="value">54,000</div>
                    </div>

                    <div className="projects-value-container">
                        <div className="desc">Revenue Guaranteed</div>
                        <div className="value">₦36,254</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectListOverviewCard
