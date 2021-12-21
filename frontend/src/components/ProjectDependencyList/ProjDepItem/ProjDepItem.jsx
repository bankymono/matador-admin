import React, { useState } from 'react'
import ProjDepItemList from '../ProjDepItemList/ProjDepItemList';
import './ProjDepItem.css';


const ProjDepItem = ({match}) => {

    return (
        <div className="p-d-i-tabs-container">

            <div className="tabs-content">
                <div className="content">
                    <ProjDepItemList
                        match={match}
                    />
                </div>
            </div>

        </div>
    )
}

export default ProjDepItem
