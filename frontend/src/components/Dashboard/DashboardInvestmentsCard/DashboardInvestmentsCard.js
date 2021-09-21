import React from 'react'
import DashboardBarChartCard from '../DashboardBarChartCard/DashboardBarChartCard';
import './DashboardInvestmentsCard.css';

const DashboardInvestmentsCard = () => {
    return (
        <div className="dashboard-top-item dashboard-investments-card">
            
            <div>
                <div className="dashboard-investments-heading-container">
                    <div className="dashboard-investments-card-heading">Investments</div>
                    <select className="dashboard-select">
                        <option>All time</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                </div>

                <div className="investments-value">
                    <div className="desc">Total Worth</div>
                    <div className="value">₦36,254,302<sup>.00</sup></div>
                </div>
                <DashboardBarChartCard />
            </div>

            <div>
                <div className="dashboard-investments-heading-container">
                    <div className="dashboard-investments-card-heading">Investments</div>
                </div>

                <div className="investments-value">
                    <div className="desc">Total Number</div>
                    <div className="value">₦42,254</div>
                </div>
                <DashboardBarChartCard />
            </div>

        </div>
    )
}

export default DashboardInvestmentsCard
