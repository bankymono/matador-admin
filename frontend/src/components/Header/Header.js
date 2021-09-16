import React from 'react'
import './Header.css'
import hamburger_menu from '../../assets/icons/hamburger-menu.png';
import header_search_icon from '../../assets/icons/header-search-icon.png';
import header_notification_icon from '../../assets/icons/header-notification-icon.png';
import profile_img from '../../assets/images/profile-img.png';

const Header = () => {
    return (
        <div className="header-container">
            <img className="header-hamburger" src={hamburger_menu} alt="hamburger"/>
            <div className="header-right-content-container">
                <img className="header-search-icon" src={header_search_icon} alt="search-icon" />
                <img className="header-notification-icon" src={header_notification_icon} alt="notification-icon" />
                <img src={profile_img} alt="profile" />
            </div>
        </div>
    )
}

export default Header
