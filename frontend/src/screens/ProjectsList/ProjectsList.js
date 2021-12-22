import React, {useEffect, useState} from 'react'
import './ProjectsList.css'

import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import SubNav from '../../components/SubNav/SubNav';
import ProjectsSubNavButton from '../../components/Projects/ProjectsSubNavButton/ProjectsSubNavButton';
import AllProjects from '../../components/Projects/AllProjects/AllProjects';
import EquityBasedProjects from '../../components/Projects/EquityBasedProject/EquityBasedProjects';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsStat, getProjectsData } from '../../redux/actions/projectActions';
import { BeatLoader } from 'react-spinners';
import { numberWithComma } from '../../redux/numberFormatter';

const ProjectsList = ({ match, arrLinks }) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState("Projects");
    const [selectedProj, setSelectedProj] = useState('all');
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [isPublished, setIsPublished] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    
    const projectsStatData = useSelector(state=> state.projectsStat);
    const projectsDataState = useSelector(state => state.projectsData);
    const {projectsStat} = projectsStatData;
    const {projectsListData} = projectsDataState 
    const [tableData, setTableData] = useState();

    useEffect(()=>{
        dispatch(getProjectsStat());
        dispatch(getProjectsData({search: '', page: 1, published: true}));
    }, [dispatch]);
    useEffect(() => {
        dispatch(getProjectsData({search: searchTerm, page: currentPageNumber, published: isPublished}));
        if (projectsListData) {
            formattedTableData(projectsListData.data);
        };
    }, [currentPageNumber, isPublished, searchTerm]);

    const handleTabControl = (data) => {
        console.log('CALLED', data)
        if (data === 'Published') {
            setCurrentPageNumber(1);
            setIsPublished(true);
        } else {
            setCurrentPageNumber(1);
            setIsPublished(false);
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
        setSearchTerm(value);
    }
    const formattedTableData = (data) =>{
        let formattedData = []
        if(data){
            data.forEach(element => {
                let data = {
                    data_one: `${element.name}`,
                    data_two: new Date().toDateString(`${element.completed_timestamp}`),
                    data_three: `${numberWithComma(element.total_fractions)}`,
                    data_four: `${numberWithComma(element.total_fractions - element.total_purchased_fractions)}`,
                    data_five: `₦${numberWithComma(element.evaluation)}`,
                    data_six: ''
                }
                formattedData.push(data);
            });
            return formattedData
        }
    } 
    const headList = ['project name', 'Completion Date', 'Totla Fractions', 'Fractions Available', 'Evaluation'];
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav
                    currentPage={currentPage}
                    arrLinks={arrLinks}
                    rightButtons={<ProjectsSubNavButton selectedProj={selectedProj} setSelectedProj={setSelectedProj} />} />

                {   projectsStat || projectsListData !== null?
                    <div className="projects-center-content-wrapper">
                        {selectedProj === 'all' ? 
                        <AllProjects 
                            stat={projectsStat?.data} 
                            handleTabControl={handleTabControl}
                            setCurrentPageNumber={setCurrentPageNumber}
                            currentPageNumber={currentPageNumber}
                            handleCellClick={handleCellClick}
                            paginate={paginate}
                            headList={headList}
                            total_count={projectsListData?.count}
                            bodyList={projectsListData? formattedTableData(projectsListData.project): null}
                            handleSearch={handleSearch}
                        /> : null}
                        {selectedProj === 'equity_based' ? <EquityBasedProjects /> : null}
                        {selectedProj === 'loan_based' ? "Loan Based Based" : null}
                    </div>
                    : <BeatLoader color="#03A678" loading={true} />
                }
            </div>
        </div>
    )
}

export default ProjectsList
