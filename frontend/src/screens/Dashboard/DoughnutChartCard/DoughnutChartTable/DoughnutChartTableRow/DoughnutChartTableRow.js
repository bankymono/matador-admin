import React from 'react'

const DoughnutChartTableRow = ({dotColor, description, count, value}) => {
    return (
            <div className={"doughnut-data-table-row "}>
                <div className="doughnut-row-first-col-item">
                    <div className={"colored-dot " + dotColor}></div>
                    <div>{description}</div>
                </div>

                <div className="text-center-align doughnut-row-item">
                    {count}
                </div>

                <div className="text-right-align doughnut-row-item">
                    ₦{value}<sup>.00</sup>
                </div>
            </div>
    )
}

export default DoughnutChartTableRow
