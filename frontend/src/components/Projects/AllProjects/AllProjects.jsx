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
        handleSearch
    }) => {
    return (
        <>
            <div className="all-projects-stat-wrapper">
                <ProjectListOverviewCard number_of_projects={stat.number_of_projects} />
            
                <ProjectListOverviewCardTwo data={
                    {data_one: {title: 'Total Value', value: numberWithComma(stat.total_projects_value)},
                     data_two: {title: 'Total Investments Value', value: numberWithComma(stat.total_projects_value)}}} />
                <ProjectListOverviewCardTwo 
                data={
                    {
                        data_one: {title: 'Number of Sold Out Projects', value: stat.number_of_soldout_projects},
                        data_two: {title: 'Number of Completed Projects', value: stat.number_of_completed_projects}
                    }
                     }/>
            </div>

            {/* <OngoingAndSoldTab 
            /> */}
            <GeneralTable 
                showTabControls={true}
                tabControlsButtonText={{ buttonOne: 'Ongoing', buttonTwo: 'Sold' }}
                handleTabControl={handleTabControl}
                bodyList={[]}
                total_count={stat.number_of_projects}
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
