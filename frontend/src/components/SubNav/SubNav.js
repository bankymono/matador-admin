import React from 'react';

import {NavLink} from 'react-router-dom';

import './SubNav.css';

const SubNav = ({currentPage, arrLinks}) => {
    return (
        <div className="subnav-container">
            <div className="subnav-heading">{currentPage}</div>
            <ul className="nav-breadcrumbs"> 
                {arrLinks.map((el,index,array)=>(
                    <li key={index} className="nav-breadcrumbs-item">
                        <NavLink 
                            onClick={(event)=>{if(array.length - 1 === index) event.preventDefault()} } 
                            to={`/${el}`} 
                            className="nav-breadcrumb-link">{el}
                        </NavLink>
                    </li>))}
            </ul>
        </div>
    )
}

export default SubNav
