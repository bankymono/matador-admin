import React from 'react'
import DoughnutChartTableRow from './DoughnutChartTableRow/DoughnutChartTableRow'

const DoughnutChartTable = () => {
    return (
            <div className="doughnut-data-container">
                <div className="doughnut-data-table-heading">
                    <div>Type</div>
                    <div className="text-center-align">Number</div>
                    <div className="text-right-align">Value</div>
                </div>
                <div className="doughnut-data-table-body">
                    <DoughnutChartTableRow dotColor={"dot-color-blue"} description={"Fixed Income"} count={4} value={"1,254,302"} />
                    <DoughnutChartTableRow dotColor={"dot-color-light-blue"} description={"Equity"} count={2} value={"6,000,001"} />
                    <DoughnutChartTableRow dotColor={"dot-color-light-green"} description={"Cash"} count={10} value={"4,254,302"} />
                    <DoughnutChartTableRow dotColor={"dot-color-green"} description={"Rewards"} count={4} value={"26,154,302"} />
                </div>
            </div>
    )
}

export default DoughnutChartTable
