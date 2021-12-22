import React, {useEffect, useState} from 'react'
import './ProjectsList.css'


import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import SubNav from '../../components/SubNav/SubNav';
import ProjectsSubNavButton from '../../components/Projects/ProjectsSubNavButton/ProjectsSubNavButton';
import AllProjects from '../../components/Projects/AllProjects/AllProjects';
import EquityBasedProjects from '../../components/Projects/EquityBasedProject/EquityBasedProjects';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsStat, } from '../../redux/actions/projectActions';
import { BeatLoader } from 'react-spinners';


const ProjectsList = ({ match, arrLinks }) => {
    const [currentPage, setCurrentPage] = useState("Projects");
    const [selectedProj, setSelectedProj] = useState('all');
    const dispatch = useDispatch();

    const {projectsStat} = useSelector(state=> state.projectsStat);

    useEffect(()=>{
        dispatch(getProjectsStat());
        // dispatch(getProjectsData());
    }, [dispatch]);
    // console.log(projectsStat.data)
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav
                    currentPage={currentPage}
                    arrLinks={arrLinks}
                    rightButtons={<ProjectsSubNavButton selectedProj={selectedProj} setSelectedProj={setSelectedProj} />} />

                {   projectsStat !== null?
                    <div className="projects-center-content-wrapper">
                        {selectedProj === 'all' ? <AllProjects stat={projectsStat.data} /> : null}
                        {selectedProj === 'equity_based' ? <EquityBasedProjects /> : null}
                        {selectedProj === 'loan_based' ? "Loan Based Based" : null}
                    </div>
                    : <BeatLoader loading={true} />
                }
            </div>
        </div>
    )
}

export default ProjectsList
