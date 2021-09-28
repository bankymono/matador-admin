import React from 'react'
import './ProjectsList.css'


import SideBar from '../../components/SideBar/SideBar';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import SubNav from '../../components/SubNav/SubNav';
import OngoingAndSoldTab from '../../components/Projects/OngoingAndSoldTab/OngoingAndSoldTab';
import ProjectsSubNavButton from '../../components/Projects/ProjectsSubNavButton/ProjectsSubNavButton';
import ProjectListOverviewCard from '../../components/Projects/ProjectsListOverviewCard/ProjectsListOverviewCard';




const ProjectsList = ({match, arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Projects");

    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} rightButtons={<ProjectsSubNavButton />} />

                <div className="projects-center-content-wrapper">
                    <ProjectListOverviewCard />
                    <OngoingAndSoldTab />
                </div>
            </div>
        </div>
    )
}

export default ProjectsList
