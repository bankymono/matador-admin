import React from 'react';
import { numberWithComma } from '../../../redux/numberFormatter';
import OngoingAndSoldTab from '../OngoingAndSoldTab/OngoingAndSoldTab';
import ProjectListOverviewCard from '../ProjectsListOverviewCard/ProjectsListOverviewCard';
import './AllProjects.css'
import ProjectListOverviewCardTwo from './ProjectsListOverviewCardTwo/ProjectsListOverviewCardTwo';

const AllProjects = ({stat}) => {
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

            <OngoingAndSoldTab />

        </>
    )
}

export default AllProjects
