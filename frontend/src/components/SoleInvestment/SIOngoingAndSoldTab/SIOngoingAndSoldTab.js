import React, { useState } from 'react'
import SIOngoingTab from '../SIOngoingTab/SIOngoingTab';
import EquityBasedSoldTab from '../EquityBasedSoldTab/EquityBasedSoldTab';
import './SIOngoingAndSoldTab.css';

const SIOngoingAndSoldTab = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab) =>{
        setToggleState(tab)
    }

    return (
        <div className="s-i-tabs-container">
            <div className="tabs-controls">
                <div className={toggleState === 1 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(1)}>Ongoing</div>
                <div className={toggleState === 2 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(2)}>Sold</div>
            </div>

            <div className="tabs-content">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <SIOngoingTab
                    />
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <EquityBasedSoldTab />
                </div>
            </div>

        </div>
    )
}

export default SIOngoingAndSoldTab
