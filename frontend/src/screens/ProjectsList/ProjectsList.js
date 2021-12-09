import React from 'react'
import './ProjectsList.css'


import SideBar from '../../components/SideBar/SideBar';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import SubNav from '../../components/SubNav/SubNav';
// import OngoingAndSoldTab from '../../components/Projects/OngoingAndSoldTab/OngoingAndSoldTab';
import ProjectsSubNavButton from '../../components/Projects/ProjectsSubNavButton/ProjectsSubNavButton';
// import ProjectListOverviewCard from '../../components/Projects/ProjectsListOverviewCard/ProjectsListOverviewCard';
import AllProjects from '../../components/Projects/AllProjects/AllProjects';
import EquityBasedProjects from '../../components/Projects/EquityBasedProject/EquityBasedProjects';




const ProjectsList = ({match, arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Projects");
        const [selectedProj, setSelectedProj] = useState('all');

    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav 
                    currentPage={currentPage} 
                    arrLinks={arrLinks} 
                    rightButtons={<ProjectsSubNavButton selectedProj={selectedProj} setSelectedProj={setSelectedProj}   />} />

                <div className="projects-center-content-wrapper">
                    {selectedProj === 'all' ? <AllProjects />: null}            
                    {selectedProj === 'equity_based' ? <EquityBasedProjects /> : null}            
                    {selectedProj === 'loan_based' ? "Loan Based Based" : null}            
                </div>
            </div>
        </div>
    )
}

export default ProjectsList
