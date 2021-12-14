import React, { useState } from 'react'
import ProjDepItemList from '../ProjDepItemList/ProjDepItemList';
import './ProjDepItem.css';


const ProjDepItem = ({
    isVerList,
    setIsVerList
}) => {
    const [toggleState, setToggleState] = useState(1);



    const toggleTab = (tab) =>{
        setToggleState(tab)
    }


    return (
        <div className="p-d-i-tabs-container">
            {/* <div className="tabs-controls">
                <div className={toggleState === 1 ? "tabs active-tabs": "tabs"} onClick={() => {toggleTab(1); setIsVerList(false)}}>Unverified</div>
                <div className={toggleState === 2 ? "tabs active-tabs": "tabs"} onClick={() => {toggleTab(2);setIsVerList(true)}}>Verified</div>
            </div> */}

            <div className="tabs-content">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    {/* verilist */}
                    <ProjDepItemList
                        veriType={isVerList} 
                    />
                </div>
            </div>

        </div>
    )
}

export default ProjDepItem
