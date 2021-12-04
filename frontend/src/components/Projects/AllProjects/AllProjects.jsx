import React from 'react';
import OngoingAndSoldTab from '../OngoingAndSoldTab/OngoingAndSoldTab';
import ProjectListOverviewCard from '../ProjectsListOverviewCard/ProjectsListOverviewCard';
import './AllProjects.css'
import ProjectListOverviewCardTwo from './ProjectsListOverviewCardTwo/ProjectsListOverviewCardTwo';

const AllProjects = () => {
    return (
        <>
            <div className="all-projects-stat-wrapper">
            <ProjectListOverviewCard />
            <ProjectListOverviewCardTwo />
            <ProjectListOverviewCardTwo />
            {/* <ProjectListOverviewCard /> */}
            </div>

            <OngoingAndSoldTab />  
        </>
    )
}

export default AllProjects
