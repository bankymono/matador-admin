import React from 'react';
import { numberWithComma } from '../../../redux/numberFormatter';
import DashboardLineChartCard from '../DashboardLineChartCard/DashboardLineChartCard';
import './DashboardTotalDepositCard.css';

const DashboardTotalDepositCard = ({depositData}) => {
    return (
        <div className="dashboard-bottom-item">
            <div className="dashboard-total-deposits-heading">
                <div className="dashboard-total-deposits-value">
                    <div className="desc">Total Deposits</div>
                    <div className="value">{numberWithComma(depositData.count)}<sup>.00</sup></div>
                </div>
                <select className="dashboard-select">
                        <option>All time</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
            </div>

            <DashboardLineChartCard />
        </div>
    )
}

export default DashboardTotalDepositCard
