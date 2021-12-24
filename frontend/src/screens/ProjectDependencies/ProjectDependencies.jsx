import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './ProjectDependencies.css';

import projStatus from '../../assets/icons/project_status.png'
import landTitle from '../../assets/icons/land_title.png'
import buildingType from '../../assets/icons/building_type.png'

import ProjDepTypeCard from '../../components/ProjectDependencies/ProjDepTypeCard/ProjDepTypeCard';
import { Link } from 'react-router-dom';
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

    // rightButtons={<NewProjDepBtn  setIsOpen={setIsOpen}/>}
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks}   />
                <div className="proj-deps-container">
                    <div className="proj-deps-wrapper">
                        <Link className="f-i-link" to='/project-dependencies/project-status'>
                            <ProjDepTypeCard
                                typeText="Project Status"
                                icon = {projStatus}
                            />
                        </Link>

                        <Link className="f-i-link" to='/project-dependencies/land-title'>
                        <ProjDepTypeCard
                            typeText="Land Title"
                            icon = {landTitle}
                        />
                        </Link>

                        <Link className="f-i-link" to='/project-dependencies/amenity'>
                        <ProjDepTypeCard
                            typeText="Amenities"
                            icon = {buildingType}
                        />
                        </Link>

                        <Link className="f-i-link" to='/project-dependencies/building-type'>
                        <ProjDepTypeCard
                            typeText="Building Type"
                            icon = {projStatus}
                        />
                        </Link>

                        <Link className="f-i-link" to='/project-dependencies/categorys'>
                        <ProjDepTypeCard
                            typeText="Category"
                            icon = {projStatus}
                        />
                        </Link>

                    </div>

                </div>
            </div>
            <CreateProjectDependency open={isOpen} onClose={closeModal} />
        </div>
    )
}

export default ProjectDependencies
