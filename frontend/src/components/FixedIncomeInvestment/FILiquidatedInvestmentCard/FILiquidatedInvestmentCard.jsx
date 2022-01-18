import React from 'react';
import DashboardLineChartCard from '../../Dashboard/DashboardLineChartCard/DashboardLineChartCard';

import './FILiquidatedInvestmentCard.css';

const FILiquidatedInvestmentCard = () => {
    return (
        <div className="f-i-liquidated-item">
            <div className="f-i-liquidated-heading">
                <div className="f-i-liquidated-value">
                    <div className="desc">Liquidated Investment</div>
                    <div className="value">₦36,254<sup>.00</sup></div>
                </div>
                <select className="f-i-select">
                        <option>All time</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
            </div>

            <DashboardLineChartCard label="Liquidated Value" />
        </div>
    )
}

export default FILiquidatedInvestmentCard
