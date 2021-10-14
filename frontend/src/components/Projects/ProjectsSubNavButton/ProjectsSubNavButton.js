import React from 'react';
import './ProjectsSubNavButton.css';

import plus_icon from '../../../assets/icons/fi-rr-plus.png';
import { Link } from 'react-router-dom';

const ProjectsSubNavButton = () => {
    return (
        <div className='projects-subnav-btn-container'>
            <select className="projects-dropdown-btn">
                <option>All Project</option>
                <option>equity based</option>
                <option>loan based</option>
            </select>
            <Link to="/projects/new" className="projects-subnav-btn"><img src={plus_icon} alt="create" /><div>New Project</div></Link>
        </div>
    )
}

export default ProjectsSubNavButton
