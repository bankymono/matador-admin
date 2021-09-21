import React from 'react';
import CircleInvestmentSettings from '../../components/Settings/CircleInvestmentSettings/CircleInvestmentSettingsCard';
import EquityInvestmentSettings from '../../components/Settings/EquityInvestmentSettings/EquityInvestmentSettings';
import FixedInvestmentSettings from '../../components/Settings/FixedInvestmentSettings/FixedInvestmentSettings';
import GeneralInvestmentSettingsCard from '../../components/Settings/GeneralInvestmentSettings/GeneralInvestmentSettings';
import InvestmentSettingsCard from '../../components/Settings/InvestmentSettingsCard/InvestmentSettingsCard';
import MutualInvestmentSettings from '../../components/Settings/MutualInvestmentSettings/MutualInvestmentSettings';
import SoleInvestmentSettings from '../../components/Settings/SoleInvestmentSettings/SoleInvestmentSettings';
import TargetInvestmentSettings from '../../components/Settings/TargetInvestmentSettings/TargetInvestmentSettings';
import './Settings.css';


const Settings = () => {
    return (
        
        <div className="settings-container">

            <div className="settings-top-nav">
                <div>left content</div>
            </div>

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
    )
}

export default Settings
