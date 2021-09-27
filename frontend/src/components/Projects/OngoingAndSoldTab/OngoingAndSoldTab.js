import React, { useState } from 'react'
import OngoingTab from '../OngoingTab/OngoingTab';
import SoldTab from '../SoldTab/SoldTab';
import './OngoingAndSoldTab.css';

const OngoingAndSoldTab = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab) =>{
        setToggleState(tab)
    }

    return (
        <div className="projects-tabs-container">
            <div className="tabs-controls">
                <div className={toggleState === 1 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(1)}>Ongoing</div>
                <div className={toggleState === 2 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(2)}>Sold</div>
            </div>

            <div className="tabs-content">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <OngoingTab />
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <SoldTab />
                </div>
            </div>

        </div>
    )
}

export default OngoingAndSoldTab
