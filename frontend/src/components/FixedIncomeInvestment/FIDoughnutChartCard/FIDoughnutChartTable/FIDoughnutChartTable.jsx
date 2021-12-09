import React from 'react';
import FIDoughnutChartTableRow from './FIDoughnutChartTableRow/FIDoughnutChartTableRow';

const FIDoughnutChartTable = () => {
    return (
            <div className="fi-doughnut-data-container">
                <div className="fi-doughnut-data-table-heading">
                    <div>Type</div>
                    <div className="text-center-align">Number</div>
                    <div className="text-right-align">Value</div>
                </div>
                <div className="fi-doughnut-data-table-body">
                    <FIDoughnutChartTableRow dotColor={"dot-color-blue"} description={"Single"} count={4} value={"1,254,302"} />
                    <FIDoughnutChartTableRow dotColor={"dot-color-light-blue"} description={"Group"} count={2} value={"6,000,001"} />
                    <FIDoughnutChartTableRow dotColor={"dot-color-light-green"} description={"Collection"} count={10} value={"4,254,302"} />
                    <FIDoughnutChartTableRow dotColor={"dot-color-green"} description={"Target"} count={4} value={"26,154,302"} />
                    <FIDoughnutChartTableRow dotColor={"dot-color-pink"} description={"Equity"} count={4} value={"26,154,302"} />
                </div>
            </div>
    )
}

export default FIDoughnutChartTable
