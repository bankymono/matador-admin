import React from 'react';
import DashboardLineChartCard from '../../Dashboard/DashboardLineChartCard/DashboardLineChartCard';

import './EquityLineGraphContainer.css';

const EquityLineGraphContainer = ({heading, values, totals,label}) => {
    return (
        <div className="e-i-l-g-item">
            <div className="e-i-l-g-heading">
                <div className="e-i-l-g-value">
                    <div className="desc">{heading}</div>
                    {/* <div className="value">₦36,254<sup>.00</sup></div> */}
                    <div className="value">{totals}</div>
                </div>
                <select className="e-i-l-g-select">
                        <option>All time</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
            </div>

            <DashboardLineChartCard label={label} values={values} />
        </div>
    )
}

export default EquityLineGraphContainer
