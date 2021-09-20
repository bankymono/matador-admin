import React from 'react'
import './DashboardTransactionsCard.css';

import right_arrow_icon from '../../../assets/icons/comma-right-arrow-icon.png'

const DashboardTransactionsCard = () => {
    return (
        <div className="dashboard-top-item">
            <div className="dashboard-transactions-heading-container">
                <div className="dashboard-transactions-heading">Transactions</div>
                <img className="right-navto-icon" src={right_arrow_icon} alt="right-arrow" />
            </div>

            <div>
                <div className="dashboard-transactions-card-numbers">
                    <div className="transactions-value-container">
                        <div className="desc">Total Number</div>
                        <div className="value">8,042</div>
                    </div>

                    <div className="transactions-value-container">
                        <div className="desc">Total Value</div>
                        <div className="value">₦36,254,302<sup>.00</sup></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
        
export default DashboardTransactionsCard
        
 


