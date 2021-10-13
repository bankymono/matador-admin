import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './AdminList.css';

import admin_icon from '../../assets/icons/settings-admin.png';
import update_password_icon from '../../assets/icons/settings-update-password.png';
import investment_icon from '../../assets/icons/settings-investments.png';

import AdminListComp from '../../components/Settings/AdminList/AdminListComponent';
import { Link } from 'react-router-dom';


const AdminListTemp = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Settings");
    const [switchTab, setSwitchTab] = useState(2);



    // const toggleTab = (tab) =>{
    //     setSwitchTab(tab)
    // }


    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks}  />
                <div className="settings-container">

                    <div className="settings-input-wrapper">

                        <div className="settings-buttons-tab-container">
                            <Link to="/settings" className={switchTab === 1 ? "settings-tab-btn settings-tab-btn-active":"settings-tab-btn"}>
                                <img src={investment_icon} alt="investment" />
                                <div>Investments</div>
                            </Link>

                            <Link to="/settings/admin-manager"  className={switchTab === 2 ? "settings-tab-btn settings-tab-btn-active":"settings-tab-btn"} >
                                <img src={admin_icon} alt="admin" />
                                <div>Admin Manager</div>
                            </Link>

                            <Link to="/settings/update-password" className={switchTab === 3 ? "settings-tab-btn settings-tab-btn-active":"settings-tab-btn"} >
                                <img src={update_password_icon} alt="update password" />
                                <div>Update Password</div>
                            </Link>
                        </div>

                        <div className="settings-pages-content">
                            <AdminListComp />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminListTemp
