import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './AdminList.css';

import AdminListComp from '../../components/Settings/AdminList/AdminListComponent';
import SettingsSidenavComponent from '../../components/Settings/SettingsSidenavComponent';


const AdminListTemp = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Settings");
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks}  />
                <div className="settings-container">

                    <div className="settings-input-wrapper">
                        <SettingsSidenavComponent activeLink={5} />
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
