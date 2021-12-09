import React, { useState } from 'react'
import EIOngoingTab from '../EIOngoingTab/EIOngoingTab';
import EquityBasedSoldTab from '../EquityBasedSoldTab/EquityBasedSoldTab';
import './EIOngoingAndSoldTab.css';

const EIOngoingAndSoldTab = ({
    eqLoading, eqError, equityInvestments
}) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab) =>{
        setToggleState(tab)
    }

    return (
        <div className="e-i-tabs-container">
            <div className="tabs-controls">
                <div className={toggleState === 1 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(1)}>Ongoing</div>
                <div className={toggleState === 2 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(2)}>Sold</div>
            </div>

            <div className="tabs-content">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <EIOngoingTab
                        eqLoading={eqLoading}
                        eqError={eqError}
                        equityInvestments={equityInvestments}
                    />
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <EquityBasedSoldTab />
                </div>
            </div>

        </div>
    )
}

export default EIOngoingAndSoldTab
