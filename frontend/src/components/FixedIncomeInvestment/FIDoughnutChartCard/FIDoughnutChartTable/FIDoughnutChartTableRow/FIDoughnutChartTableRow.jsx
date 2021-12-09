import React from 'react'

const FIDoughnutChartTableRow = ({dotColor, description, count, value}) => {
    return (
            <div className={"fi-doughnut-data-table-row "}>
                <div className="fi-doughnut-row-first-col-item">
                    <div className={"colored-dot " + dotColor}></div>
                    <div>{description}</div>
                </div>

                <div className="text-center-align fi-doughnut-row-item">
                    {count}
                </div>

                <div className="text-right-align fi-doughnut-row-item">
                    ₦{value}<sup>.00</sup>
                </div>
            </div>
    )
}

export default FIDoughnutChartTableRow
