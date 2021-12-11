import React, { useState } from 'react'
import VeriList from '../VeriList/VeriList';
import EquityBasedSoldTab from '../EquityBasedSoldTab/EquityBasedSoldTab';
import './VIDTabs.css';

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { listVerificationId } from '../../../redux/actions/userActions';

const VIDTabs = ({
    setIsVerList
}) => {
    const [toggleState, setToggleState] = useState(1);

    // const dispatch = useDispatch()
    // const verificationIdList = useSelector(state => state.verificationIdList);
    // const { verificationIds, verifyIdLoading, verificationIdError } = verificationIdList


    const toggleTab = (tab) =>{
        setToggleState(tab)
    }

    return (
        <div className="v-id-tabs-container">
            <div className="tabs-controls">
                <div className={toggleState === 1 ? "tabs active-tabs": "tabs"} onClick={() => {toggleTab(1); setIsVerList(false)}}>Unverified</div>
                <div className={toggleState === 2 ? "tabs active-tabs": "tabs"} onClick={() => {toggleTab(2);setIsVerList(true)}}>Verified</div>
            </div>

            <div className="tabs-content">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <VeriList
                        veriType={false} 
                    />
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <VeriList
                        veriType={true} 
                    />
                </div>
            </div>

        </div>
    )
}

export default VIDTabs
