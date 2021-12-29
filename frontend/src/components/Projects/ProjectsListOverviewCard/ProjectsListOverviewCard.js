import React from 'react'
import './ProjectsListOverviewCard.css';

const ProjectListOverviewCard = ({number_of_projects}) => {
    return (
        <div className="projects-list-overview-card-container">
            <div className="projects-overview-card-heading-container">
                <div className="projects-overview-card-heading">All Projects</div>
            </div>

            <div>
                <div className="projects-overview-card-numbers">
                    <div className="projects-value-container">
                        <div className="desc">Number of Projects</div>
                        <div className="value">{number_of_projects}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectListOverviewCard
