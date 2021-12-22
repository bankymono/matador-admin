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
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProjectsStat());
        // dispatch(getProjectsData());
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState("Projects");
    const [selectedProj, setSelectedProj] = useState('all');
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [isSold, setIsSold] = useState(false);
    
    const {projectsStat} = useSelector(state=> state.projectsStat);

    
    const handleTabControl = (data) => {
        if (data === 'Sold') {
            setCurrentPageNumber(1);
            setIsSold(true);
        } else {
            setCurrentPageNumber(1);
            setIsSold(false);
        }
    }
    const handleCellClick = (data) => {
        console.log(data);
    }
    const paginate = (pageNumber) => {
        setCurrentPageNumber(pageNumber);
    };
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        console.log(value);
    }
    const headList = ['project name', 'Completion Date', 'Totla Fractions', 'Fractions Available', 'Amount Invested'];
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
                        {selectedProj === 'all' ? 
                        <AllProjects 
                            stat={projectsStat.data} 
                            handleTabControl={handleTabControl}
                            setCurrentPageNumber={setCurrentPageNumber}
                            currentPageNumber={currentPageNumber}
                            handleCellClick={handleCellClick}
                            paginate={paginate}
                            headList={headList}
                            handleSearch={handleSearch}
                        /> : null}
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
