import React, { useEffect, useState } from 'react';

import ProjDepItem from '../../components/ProjectDependencyList/ProjDepItem/ProjDepItem';

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';


import './ProjectDependencyList.css'

const NewProjDepBtn = () => {
    return (
        <div className="txn-lists-new-btn-container">
            <button className="p-d-list-new-btn">Create Project Dependency</button>
        </div>
    )
}

const ProjectDependencyList = ({arrLinks, match}) => {
    const [currentPage, setCurrentPage] = useState("Project Status");
    const [newArrLinks,setNewArrLinks] = useState([]);
    const [isVerList,setIsVerList] = useState(false);

    useEffect(()=>{
        // based on the id, fetch dependency name, then append to array
        setNewArrLinks([...arrLinks, 'project status'])
        // setNewArrLinks(prev => {
        //     return prev.map((str,id)=>{
        //         if(prev.length - 1 === id){
        //             let tempStr = "ID verification";
        //             return isVerList ? tempStr + " / Verified" : tempStr + " / Unverified"
        //         }

        //         return str
        //     })
        // })
    },[arrLinks, isVerList])

    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav 
                    currentPage={currentPage} 
                    arrLinks={newArrLinks} 
                    rightButtons={<NewProjDepBtn />}
                />

                <div className="p-d-list-center-content-wrapper">
                    <ProjDepItem
                        isVerList={isVerList}
                        setIsVerList={setIsVerList}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectDependencyList
