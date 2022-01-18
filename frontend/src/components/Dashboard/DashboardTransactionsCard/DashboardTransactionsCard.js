import React from 'react'
import './DashboardTransactionsCard.css';
import { numberWithComma } from '../../../redux/numberFormatter';
import right_arrow_icon from '../../../assets/icons/comma-right-arrow-icon.png'

const DashboardTransactionsCard = ({transactionsData}) => {
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
                        <div className="value">{transactionsData?.count}</div>
                    </div>

                    <div className="transactions-value-container">
                        <div className="desc">Total Value</div>
                        <div className="value">₦{numberWithComma(transactionsData?.value)}<sup>.00</sup></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
        
export default DashboardTransactionsCard
        
 


