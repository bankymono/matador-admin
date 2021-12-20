import React from 'react';

import {NavLink} from 'react-router-dom';

import './SubNav.css';

const SubNav = ({currentPage, arrLinks, rightButtons}) => {
    return (
        <div className="subnav-container">
            <div className="subnav-heading">{currentPage}</div>
            <div className="subnav-wrapper">
                <ul className="nav-breadcrumbs"> 
                    {arrLinks.map((el,index,array)=>(
                        <li key={index} className="nav-breadcrumbs-item">
                            <NavLink 
                                onClick={(event)=>{if(array.length - 1 === index) event.preventDefault()} } 
                                to={el === 'home'? '/' : el.trim().split(' ').length ===2 ? `/${el.replace(' ', '-')}`:`/${el}` } 
                                className="nav-breadcrumb-link">{el}
                            </NavLink>
                        </li>))}
                </ul>
                {rightButtons}
            </div>

        </div>
    )
}

export default SubNav
