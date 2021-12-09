import React from 'react';
import DashboardLineChartCard from '../DashboardLineChartCard/DashboardLineChartCard';
import './DashboardTotalWithdrawalCard.css';

const DashboardTotalWithdrawalCard = () => {
    return (
        <div className="dashboard-bottom-item">
            <div className="dashboard-total-withdrawals-heading">
                <div className="dashboard-total-withdrawals-value">
                    <div className="desc">Total Withdrawals</div>
                    <div className="value">₦36,254<sup>.00</sup></div>
                </div>
                <select className="dashboard-select">
                        <option>All time</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
            </div>
            <DashboardLineChartCard id={1} label="total withdrawal" />
        </div>
    )
}

export default DashboardTotalWithdrawalCard
