import React, { useState } from 'react'
import EIOngoingTab from '../EIOngoingTab/EIOngoingTab';
import EquityBasedSoldTab from '../EquityBasedSoldTab/EquityBasedSoldTab';
import './EIOngoingAndSoldTab.css';

const EIOngoingAndSoldTab = () => {
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
                        isSold={toggleState}
                    />
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <EIOngoingTab
                        isSold={toggleState}
                    />
                </div>
            </div>

        </div>
    )
}

export default EIOngoingAndSoldTab
