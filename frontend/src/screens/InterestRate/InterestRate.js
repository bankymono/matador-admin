import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';

import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';

import SettingsSidenavComponent from '../../components/Settings/SettingsSidenavComponent';
import InterestRateComponent from '../../components/Settings/InterestRateComponent/InterestRateComponent';


const InterestRate = ({ arrLinks }) => {
    const [currentPage, setCurrentPage] = useState("Settings");

    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} />
                <div className="settings-container">

                    <div className="settings-input-wrapper">
                        <SettingsSidenavComponent activeLink={4} />
                        <div className="settings-pages-content">
                            <div className="settings-content-wrapper settings-content-active">
                                <InterestRateComponent />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterestRate;
