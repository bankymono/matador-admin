import React from 'react';
import { numberWithComma } from '../../../redux/numberFormatter';
import GeneralTable from '../../GeneralTable/GeneralTable';
import ProjectListOverviewCard from '../ProjectsListOverviewCard/ProjectsListOverviewCard';
import './AllProjects.css'
import ProjectListOverviewCardTwo from './ProjectsListOverviewCardTwo/ProjectsListOverviewCardTwo';



const AllProjects = ({
        stat, 
        handleTabControl, 
        setCurrentPageNumber, 
        currentPageNumber,
        handleCellClick,
        paginate,
        headList,
        bodyList,
        total_count,
        handleSearch
    }) => {
    return (
        <>
            <div className="all-projects-stat-wrapper">
                <ProjectListOverviewCard number_of_projects={stat?.number_of_projects} />
            
                <ProjectListOverviewCardTwo data={
                    {data_one: {title: 'Total Value', value: stat && stat?.total_projects_value? numberWithComma(stat?.total_projects_value) : 'N/A'},
                     data_two: {title: 'Total Investments Value', value: stat && stat?.total_projects_value? numberWithComma(stat?.total_projects_value) : 'N/A'}}} />
                <ProjectListOverviewCardTwo 
                data={
                    {
                        data_one: {title: 'Number of Sold Out Projects', value: stat?.number_of_soldout_projects},
                        data_two: {title: 'Number of Completed Projects', value: stat?.number_of_completed_projects}
                    }
                     }/>
            </div>

            {/* <OngoingAndSoldTab 
            /> */}
            <GeneralTable 
                showTabControls={true}
                tabControlsButtonText={{ buttonOne: 'Published', buttonTwo: 'Unpublished' }}
                handleTabControl={handleTabControl}
                bodyList={bodyList}
                total_count={total_count}
                usersPerPage={10}
                paginate={paginate}
                setCurrentPageNumber={setCurrentPageNumber}
                currentPageNumber={currentPageNumber}
                handleCellClick={handleCellClick}
                handleSearch={handleSearch}
                headList={headList}
            />
        </>
    )
}

export default AllProjects
