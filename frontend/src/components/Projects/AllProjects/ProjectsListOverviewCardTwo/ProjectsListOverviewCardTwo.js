import React from 'react'
import './ProjectsListOverviewCardTwo.css';


const ProjectListOverviewCardTwo = ({data}) => {
    return (
        <div className="projects-list-overview-card-two-container">
                <div className="projects-overview-card-two-numbers">
                    <div className="p-list-two-projects-value-container">
                        <div className="desc">{data.data_one.title}</div>
                        <div className="value">{data.data_one.value}</div>
                    </div>

                    <div className="p-list-two-projects-value-container">
                        <div className="desc">{data.data_two.title}</div>
                        <div className="value">{data.data_two.value}</div>
                    </div>
                </div>

        </div>
    )
}

export default ProjectListOverviewCardTwo
