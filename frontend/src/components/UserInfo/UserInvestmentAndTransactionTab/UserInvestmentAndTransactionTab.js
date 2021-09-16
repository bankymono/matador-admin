import React, { useState } from 'react'
import UserInvestmentsInfoTab from '../UserInvestmentsInfoTab/UserInvestmentsInfoTab';
import './UserInvestmentAndTransactionTab.css'

const UserInvestmentAndTransactionTab = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab) =>{
        setToggleState(tab)
    }
    return (
        <div className="user-tabs-container">
            <div className="tabs-controls">
                <div className={toggleState === 1 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(1)}>Investments(7)</div>
                <div className={toggleState === 2 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(2)}>Transactions(80)</div>
            </div>

            <div className="tabs-content">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <UserInvestmentsInfoTab />
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>Fusce luctus congue pretium. Praesent interdum at ligula dictum varius. Integer sodales aliquet nisl, eget dictum sem ultrices quis. Sed ultrices ex ac nulla hendrerit fringilla. </div>
            </div>

        </div>
    )
}

export default UserInvestmentAndTransactionTab
