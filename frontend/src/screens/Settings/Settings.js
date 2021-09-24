import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import CircleInvestmentSettings from '../../components/Settings/CircleInvestmentSettings/CircleInvestmentSettingsCard';
import EquityInvestmentSettings from '../../components/Settings/EquityInvestmentSettings/EquityInvestmentSettings';
import FixedInvestmentSettings from '../../components/Settings/FixedInvestmentSettings/FixedInvestmentSettings';
import GeneralInvestmentSettingsCard from '../../components/Settings/GeneralInvestmentSettings/GeneralInvestmentSettings';
import InvestmentSettingsCard from '../../components/Settings/InvestmentSettingsCard/InvestmentSettingsCard';
import MutualInvestmentSettings from '../../components/Settings/MutualInvestmentSettings/MutualInvestmentSettings';
import SoleInvestmentSettings from '../../components/Settings/SoleInvestmentSettings/SoleInvestmentSettings';
import TargetInvestmentSettings from '../../components/Settings/TargetInvestmentSettings/TargetInvestmentSettings';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './Settings.css';


const Settings = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Settings");
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks}  />
                <div className="settings-container">

                    <div className="settings-input-wrapper">
                        <div>
                            <InvestmentSettingsCard />
                            <CircleInvestmentSettings />
                            <MutualInvestmentSettings />
                            <TargetInvestmentSettings />
                            <EquityInvestmentSettings />
                            <SoleInvestmentSettings />
                            <FixedInvestmentSettings />
                            <GeneralInvestmentSettingsCard />

                            <div className="settings-btn-wrapper">
                                <button className="setting-page-btn">New Investment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
