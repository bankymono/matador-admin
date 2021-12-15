import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import SettingsSidenavComponent from '../../components/Settings/SettingsSidenavComponent';
import UpdatePasswordComponent from '../../components/Settings/UpdatePassword/UpdatePassword';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';

const UpdatePassword=({arrLinks})=>{
    const [currentPage, setCurrentPage] = useState('Settings');
    return(
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} />
                <div className="settings-container">

                    <div className="settings-input-wrapper">
                        <SettingsSidenavComponent activeLink={6} />
                        <div className="settings-pages-content">
                            <div className="settings-content-wrapper settings-content-active">
                                <UpdatePasswordComponent />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatePassword;