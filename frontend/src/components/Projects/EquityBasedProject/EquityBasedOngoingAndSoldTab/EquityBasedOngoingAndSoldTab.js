import React, { useState } from 'react'
import EquityBasedOngoingTab from '../EquityBasedOngoingTab/EquityBasedOngoingTab';
import EquityBasedSoldTab from '../EquityBasedSoldTab/EquityBasedSoldTab';
import './EquityBasedOngoingAndSoldTab.css';

const EquityBasedOngoingAndSoldTab = ({
    eqLoading, eqError, equityInvestments
}) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab) =>{
        setToggleState(tab)
    }

    return (
        <div className="equity-based-projects-tabs-container">
            <div className="tabs-controls">
                <div className={toggleState === 1 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(1)}>Ongoing</div>
                <div className={toggleState === 2 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(2)}>Sold</div>
            </div>

            <div className="tabs-content">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <EquityBasedOngoingTab
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

export default EquityBasedOngoingAndSoldTab
