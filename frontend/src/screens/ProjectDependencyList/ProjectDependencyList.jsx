import React, { useEffect, useState } from 'react';

import ProjDepItem from '../../components/ProjectDependencyList/ProjDepItem/ProjDepItem';

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';


import './ProjectDependencyList.css'
import CreateProjectDependency from '../../components/modals/CreateProjectDependency/CreateProjectDependency';

const NewProjDepBtn = ({setIsOpen}) => {
    return (
        <div className="txn-lists-new-btn-container">
            <button onClick={() => {setIsOpen(true)}} className="p-d-list-new-btn">Create Project Dependency</button>
        </div>
    )
}

const ProjectDependencyList = ({arrLinks, match}) => {
    const [currentPage, setCurrentPage] = useState("");
    const [newArrLinks,setNewArrLinks] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        // based on the id, fetch dependency name, then append to array
        if(match.params.dep === 'project-status'){
            setNewArrLinks([...arrLinks, 'project status'])
            setCurrentPage('Project Status')
        }else if(match.params.dep === 'land-title'){
            setNewArrLinks([...arrLinks, 'land title'])
            setCurrentPage('Land Title')
        }else if(match.params.dep === 'amenity'){
            setNewArrLinks([...arrLinks, 'amenities'])
            setCurrentPage('Amenities')
        } else if(match.params.dep === 'building-type'){
            setNewArrLinks([...arrLinks, 'building type'])
            setCurrentPage('Building Type')
        }else if(match.params.dep === 'categorys'){
            setNewArrLinks([...arrLinks, 'Category'])
            setCurrentPage('Category')
        }
        
    },[arrLinks, match])

    const closeModal = () =>{
        setIsOpen(false);
    }

    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav 
                    currentPage={currentPage} 
                    arrLinks={newArrLinks} 
                    rightButtons={<NewProjDepBtn setIsOpen={setIsOpen} />}
                />

                <div className="p-d-list-center-content-wrapper">
                    <ProjDepItem
                        match={match}
                    />
                </div>
            </div>
            <CreateProjectDependency 
                open={isOpen} 
                onClose={closeModal}
                dependencyType={match.params.dep}
            />
        </div>
    )
}

export default ProjectDependencyList
