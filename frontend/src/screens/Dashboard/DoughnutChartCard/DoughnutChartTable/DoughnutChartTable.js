import React from 'react'
import { numberWithComma } from '../../../../redux/numberFormatter'
import DoughnutChartTableRow from './DoughnutChartTableRow/DoughnutChartTableRow'

const DoughnutChartTable = ({assetAllocationData}) => {

    return (
            <div className="doughnut-data-container">
                <div className="doughnut-data-table-heading">
                    <div>Type</div>
                    <div className="text-center-align">Number</div>
                    <div className="text-right-align">Value</div>
                </div>
                <div className="doughnut-data-table-body">
                    <DoughnutChartTableRow dotColor={"dot-color-blue"} description={"Fixed Income"} count={assetAllocationData.fixed_income?.count} value={assetAllocationData.fixed_income?.value} />
                    <DoughnutChartTableRow dotColor={"dot-color-light-blue"} description={"Equity"} count={assetAllocationData.equity?.count} value={numberWithComma(assetAllocationData.equity?.value)} />
                    <DoughnutChartTableRow dotColor={"dot-color-light-green"} description={"Cash"} count={assetAllocationData.cash?.count} value={numberWithComma(assetAllocationData.cash?.value)} />
                    <DoughnutChartTableRow dotColor={"dot-color-green"} description={"Rewards"} count={assetAllocationData.rewards?.count} value={numberWithComma(assetAllocationData.rewards?.value)} />
                </div>
            </div>
    )
}

export default DoughnutChartTable
