import React, { useEffect } from 'react'
import './Header.css'
import hamburger_menu from '../../assets/icons/hamburger-menu.png';
import header_search_icon from '../../assets/icons/header-search-icon.png';
import header_notification_icon from '../../assets/icons/header-notification-icon.png';
import profile_img from '../../assets/images/profile-img.png';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { logout } from '../../redux/actions/userActions';

const Header = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch  = useDispatch();
    const adminLogin = useSelector(state => state.adminLogin);
    const { adminInfo } = adminLogin;

    useEffect(()=>{
        if(adminInfo){
            const decodedToken = jwtDecode(adminInfo.token);

            if(decodedToken.exp * 1000 < new Date().getTime()){
                dispatch(logout())
                // localStorage.removeItem('mtdX');
                history.push('/login');
            }
        }
    },[adminInfo, dispatch, history])


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
