import React from 'react'
// import DashboardBarChartCard from '../DashboardBarChartCard/DashboardBarChartCard';
import FIBarChartCard from '../FIBarChartCard/FIBarChartCard';
import './FILiquidationCard.css';

const FILiquidationCard = () => {
    return (
        <div className="fi-bottom-item dashboard-investments-card">
            
            <div>
                <div className="dashboard-investments-heading-container">
                    <div className="dashboard-investments-card-heading">Liquidation</div>
                    <select className="dashboard-select">
                        <option>All time</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                </div>

                <div className="investments-value">
                    <div className="desc">Total Amount</div>
                    <div className="value">₦36,254,302<sup>.00</sup></div>
                </div>
                <FIBarChartCard />
            </div>


        </div>
    )
}

export default FILiquidationCard
