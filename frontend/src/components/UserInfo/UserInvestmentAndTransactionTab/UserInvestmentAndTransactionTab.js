import React, { useState } from 'react'
import UserInvestmentsInfoTab from '../UserInvestmentsInfoTab/UserInvestmentsInfoTab';
import UserTransactionsInfoTab from '../UserTransactionsInfoTab/UserTransactionsInfoTab';
import UserInvestmentsTab from '../UserInvestmentsTab/UserInvestmentsTab';
import UserTransactionsTab from '../UserTransactionsTab/UserTransactionsTab';
import './UserInvestmentAndTransactionTab.css'

const UserInvestmentAndTransactionTab = ({userId}) => {
    const [toggleState, setToggleState] = useState(1);
    const [totalTxnCount, setTotalTxnCount] = useState(0);
    const [totalInvCount, setTotalInvCount] = useState(0);

    const toggleTab = (tab) =>{
        setToggleState(tab)
    }
    
    return (
        <div className="user-tabs-container">
            <div className="tabs-controls">
                <div className={toggleState === 1 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(1)}>Investments({totalInvCount})</div>
                <div className={toggleState === 2 ? "tabs active-tabs": "tabs"} onClick={() => toggleTab(2)}>Transactions({totalTxnCount})</div>
            </div>

            <div className="tabs-content">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    {/* <UserInvestmentsInfoTab /> */}
                    <UserInvestmentsTab setTotalInvCount={setTotalInvCount} userId={userId}/>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    {/* <UserTransactionsInfoTab /> */}
                    <UserTransactionsTab setTotalTxnCount={setTotalTxnCount} userId={userId} />
                </div>
            </div>

        </div>
    )
}

export default UserInvestmentAndTransactionTab
