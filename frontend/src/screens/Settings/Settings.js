import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
// import CircleInvestmentSettings from '../../components/Settings/CircleInvestmentSettings/CircleInvestmentSettingsCard';
// import EquityInvestmentSettings from '../../components/Settings/EquityInvestmentSettings/EquityInvestmentSettings';
// import FixedInvestmentSettings from '../../components/Settings/FixedInvestmentSettings/FixedInvestmentSettings';
// import GeneralInvestmentSettingsCard from '../../components/Settings/GeneralInvestmentSettings/GeneralInvestmentSettings';
// import InvestmentSettingsCard from '../../components/Settings/InvestmentSettingsCard/InvestmentSettingsCard';
// import MutualInvestmentSettings from '../../components/Settings/MutualInvestmentSettings/MutualInvestmentSettings';
// import SoleInvestmentSettings from '../../components/Settings/SoleInvestmentSettings/SoleInvestmentSettings';
// import TargetInvestmentSettings from '../../components/Settings/TargetInvestmentSettings/TargetInvestmentSettings';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './Settings.css';

import admin_icon from '../../assets/icons/settings-admin.png';
import update_password_icon from '../../assets/icons/settings-update-password.png';
import investment_icon from '../../assets/icons/settings-investments.png';

// import admin_icon_green from '../../assets/icons/settings-admin-green.png';
// import update_password_icon_green from '../../assets/icons/settings-update-password.png';
// import investment_icon_green from '../../assets/icons/settings-investment-green.png';
import InvestmentSettingsContainer from '../../components/Settings/InvestmentSettingsContainer/InvestmentSettingsContainer';
// import AdminList from '../../components/Settings/AdminList/AdminList';
// import UpdatePassword from '../../components/Settings/UpdatePassword/UpdatePassword';
// import CreateAdminComponent from '../../components/Settings/CreateAdminComponent/CreateAdminComponent';
import { Link } from 'react-router-dom';


const Settings = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Settings");
    const [switchTab, setSwitchTab] = useState(1);

    const toggleTab = (tab) =>{
        setSwitchTab(tab)
    }

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

                            <Link to="/settings/market-place" className={switchTab === 2 ? "settings-tab-btn settings-tab-btn-active":"settings-tab-btn"} >
                                <img src={admin_icon} alt="admin" />
                                <div>Market Place</div>
                            </Link>

                            <Link to="/settings/rewards" className={switchTab === 3 ? "settings-tab-btn settings-tab-btn-active":"settings-tab-btn"} >
                                <img src={admin_icon} alt="admin" />
                                <div>Rewards</div>
                            </Link>

                            <Link to="/settings/interest-rate" className={switchTab === 4 ? "settings-tab-btn settings-tab-btn-active":"settings-tab-btn"} >
                                <img src={admin_icon} alt="admin" />
                                <div>Interest Rate</div>
                            </Link>


                            <Link to="/settings/admin-manager" className={switchTab === 5 ? "settings-tab-btn settings-tab-btn-active":"settings-tab-btn"} >
                                <img src={admin_icon} alt="admin" />
                                <div>Admin Manager</div>
                            </Link>

                            <Link to="/settings/update-password" className={switchTab === 6 ? "settings-tab-btn settings-tab-btn-active":"settings-tab-btn"} >
                                <img src={update_password_icon} alt="update password" />
                                <div>Update Password</div>
                            </Link>

                        </div>

                        <div className="settings-pages-content">
                            <div className={switchTab === 1 ? "settings-content-wrapper settings-content-active" : "settings-content-wrapper"}>
                                <InvestmentSettingsContainer />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
