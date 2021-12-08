import React, { useState } from 'react'
import UnverifiedList from '../UnverifiedList/UnverifiedList';
import EquityBasedSoldTab from '../EquityBasedSoldTab/EquityBasedSoldTab';
import './VIDTabs.css';

const VIDTabs = ({
    eqLoading, eqError, equityInvestments
}) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab) =>{
        setToggleState(tab)
    }

    return (
        <div className="v-id-tabs-container">
            <div className="tabs-controls">
                <div className={toggleState === 1 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(1)}>Unverified</div>
                <div className={toggleState === 2 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(2)}>Verified</div>
            </div>

            <div className="tabs-content">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <UnverifiedList
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

export default VIDTabs
