import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import './SideBar.css';

import matador_white_logo from '../../assets/images/MATADOR-WHITE.png'

import {SideBarData} from './SideBarData'; 

const SideBar = ({location,}) => {

    return (
        <div className="sidebar">
            <div className="sidebar-matador-logo-container">
                <img className="sidebar-matador-logo" src={matador_white_logo} alt="matador-logo" />
                <div className="sidebar-matador-text">Matador</div>
            </div>
            <ul className="sidebar-nav-item-container">
                {SideBarData.map((val, key)=>{
                    return (<NavLink className="sidebar-nav-link" to={val.link} key={key}>
                                <li id={location.pathname===val.link ? 'sidebar-item-active': ""} className="sidebar-item sidebar-item-active">
                                    <img className="sidebar-item-icon" src={val.icon} alt="sidebar-icon" />
                                    <div className="sidebar-desc">{val.title}</div>
                                </li>
                            </NavLink>);
                })}
            </ul>
        </div>
    )
}

export default withRouter(SideBar);
