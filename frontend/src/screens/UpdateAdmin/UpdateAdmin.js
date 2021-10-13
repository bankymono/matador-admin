import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';

import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';


import admin_icon from '../../assets/icons/settings-admin.png';
import update_password_icon from '../../assets/icons/settings-update-password.png';
import investment_icon from '../../assets/icons/settings-investments.png';

// import admin_icon_green from '../../assets/icons/settings-admin-green.png';
// import update_password_icon_green from '../../assets/icons/settings-update-password.png';

import { Link } from 'react-router-dom';
import UpdateAdminComponent from '../../components/Settings/UpdateAdminComponent/UpdateAdminComponent';


const UpdateAdmin = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Settings");
    const [switchTab, setSwitchTab] = useState(2);


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
                            <div className={switchTab === 2 ? "settings-content-wrapper settings-content-active" : "settings-content-wrapper"}>
                                <UpdateAdminComponent />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateAdmin
