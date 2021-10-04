import React from 'react'
import CircleInvestmentSettings from '../CircleInvestmentSettings/CircleInvestmentSettingsCard'
import EquityInvestmentSettings from '../EquityInvestmentSettings/EquityInvestmentSettings'
import FixedInvestmentSettings from '../FixedInvestmentSettings/FixedInvestmentSettings'
import GeneralInvestmentSettingsCard from '../GeneralInvestmentSettings/GeneralInvestmentSettings'
import InvestmentSettingsCard from '../InvestmentSettingsCard/InvestmentSettingsCard'
import MutualInvestmentSettings from '../MutualInvestmentSettings/MutualInvestmentSettings'
import SoleInvestmentSettings from '../SoleInvestmentSettings/SoleInvestmentSettings'
import TargetInvestmentSettings from '../TargetInvestmentSettings/TargetInvestmentSettings'

const InvestmentSettingsContainer = () => {
    return (
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
    )
}

export default InvestmentSettingsContainer
