import React from 'react'
import './ProjectsListOverviewCardTwo.css';

import right_arrow_icon from '../../../../assets/icons/comma-right-arrow-icon.png'

const ProjectListOverviewCardTwo = () => {
    return (
        <div className="projects-list-overview-card-two-container">
            {/* <div className="projects-overview-card-two-heading-container">
                <div className="projects-overview-card-two-heading">All Projects</div>
            </div> */}


                <div className="projects-overview-card-two-numbers">
                    <div className="p-list-two-projects-value-container">
                        <div className="desc">Total Value</div>
                        <div className="value">54,000</div>
                    </div>

                    <div className="p-list-two-projects-value-container">
                        <div className="desc">Total Investments Value</div>
                        <div className="value">₦36,254</div>
                    </div>
                </div>

        </div>
    )
}

export default ProjectListOverviewCardTwo
