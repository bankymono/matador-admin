import React from 'react';
import DashboardLineChartCard from '../../Dashboard/DashboardLineChartCard/DashboardLineChartCard';

import './VaultInvestmentLineGraphContainer.css';

const VaultInvestmentLineGraphContainer = ({heading, values, totals,label}) => {
    return (
        <div className="v-i-l-g-item">
            <div className="v-i-l-g-heading">
                <div className="v-i-l-g-value">
                    <div className="desc">{heading}</div>
                    {/* <div className="value">₦36,254<sup>.00</sup></div> */}
                    <div className="value">{totals}</div>
                </div>
                <select className="v-i-l-g-select">
                        <option>All time</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
            </div>

            <DashboardLineChartCard label={label} values={values} />
        </div>
    )
}

export default VaultInvestmentLineGraphContainer
