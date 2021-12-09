import React from 'react';
import './ProjectsSubNavButton.css';

import plus_icon from '../../../assets/icons/fi-rr-plus.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProjectsSubNavButton = ({selectedProj, setSelectedProj}) => {


    // all, equity_based loan_based

    const handleProjChange = (e) => {
        e.preventDefault();

        setSelectedProj(e.target.value);
    }


    return (
        <div className='projects-subnav-btn-container'>
            <select 
                name="proj-type-select" 
                value={selectedProj} 
                onChange={handleProjChange}
                className="projects-dropdown-btn">
                <option value="all">All Project</option>
                <option value="equity_based">equity based</option>
                <option value="loan_based">loan based</option>
            </select>

            <Link to="/projects/new" className="projects-subnav-btn"><img src={plus_icon} alt="create" /><div>New Project</div></Link>
        </div>
    )
}

export default ProjectsSubNavButton
