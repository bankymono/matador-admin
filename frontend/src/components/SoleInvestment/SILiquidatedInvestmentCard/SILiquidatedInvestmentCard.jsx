import React from 'react';
import DashboardLineChartCard from '../../Dashboard/DashboardLineChartCard/DashboardLineChartCard';

import './SILiquidatedInvestmentCard.css';

const SILiquidatedInvestmentCard = () => {
    return (
        <div className="s-i-liquidated-item">
            <div className="s-i-liquidated-heading">
                <div className="s-i-liquidated-value">
                    <div className="desc">Liquidated Investment</div>
                    <div className="value">₦36,254<sup>.00</sup></div>
                </div>
                <select className="s-i-select">
                        <option>All time</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
            </div>

            <DashboardLineChartCard label="Liquidated Value" />
        </div>
    )
}

export default SILiquidatedInvestmentCard
