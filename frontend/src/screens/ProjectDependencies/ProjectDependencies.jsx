import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './ProjectDependencies.css';

import soleIcon from '../../assets/icons/sole_icon.png'
import projStatus from '../../assets/icons/project_status.png'
import landTitle from '../../assets/icons/land_title.png'
import buildingType from '../../assets/icons/building_type.png'
import circleIcon from '../../assets/icons/circle_icon.png'
import mutualIcon from '../../assets/icons/mutual_icon.png'
import goalBasedIcon from '../../assets/icons/goal_based_icon.png'
import FixedIncomeTypeCard from '../../components/ProjectDependencies/ProjDepTypeCard/ProjDepTypeCard';
// import FIDoughnutChartCard from '../../components/ProjectDependencies/FIDoughnutChartCard/FIDoughnutChartCard';
// import FIBarChartCard from '../../components/ProjectDependencies/FIBarChartCard/FIBarChartCard';
// import FILiquidationCard from '../../components/ProjectDependencies/FILiquidationCard/FILiquidationCard';
import { Link } from 'react-router-dom';
// import CreateProjectDependency from '../../components/modals/CreateProjectDependency/CreateProjectDependency';
// import CreateProjectDependency from '../../../'
import CreateProjectDependency from '../../components/modals/CreateProjectDependency/CreateProjectDependency'

const NewProjDepBtn = ({setIsOpen}) => {
    
    return (
        <div className="txn-lists-new-btn-container">
            <button onClick={() => {setIsOpen(true)}} className="p-d-list-new-btn">Create Project Dependency</button>
        </div>
    )
}

const ProjectDependencies = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Project Dependencies");
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () =>{
        setIsOpen(false);
    }


    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} rightButtons={<NewProjDepBtn  setIsOpen={setIsOpen}/>}  />
                <div className="proj-deps-container">
                    <div className="proj-deps-wrapper">
                        <Link className="f-i-link" to='/project-dependencies/4'>
                            <FixedIncomeTypeCard
                                typeText="Project Status"
                                icon = {projStatus}
                            />
                        </Link>

                        <Link className="f-i-link" to='/project-dependencies/4'>
                        <FixedIncomeTypeCard
                            typeText="Land Title"
                            icon = {landTitle}
                        />
                        </Link>

                        <Link className="f-i-link" to='/project-dependencies/4'>
                        <FixedIncomeTypeCard
                            typeText="Amenities"
                            icon = {buildingType}
                        />
                        </Link>

                        <Link className="f-i-link" to='/project-dependencies/4'>
                        <FixedIncomeTypeCard
                            typeText="Building Type"
                            icon = {projStatus}
                        />
                        </Link>

                        <Link className="f-i-link" to='/project-dependencies/4'>
                        <FixedIncomeTypeCard
                            typeText="Category"
                            icon = {projStatus}
                        />
                        </Link>

                    </div>
                    {/* <div className="f-i-graph-container"> */}
                        {/* <FIDoughnutChartCard /> */}
                        {/* <FIBarChartCard /> */}
                        {/* <FILiquidationCard /> */}
                    {/* </div> */}
                </div>
            </div>
            {/* <CreateProjectDependency  /> */}
            <CreateProjectDependency open={isOpen} onClose={closeModal} />
            {/* <CreateProjectDepen */}
        </div>
    )
}

export default ProjectDependencies
