import React,{useEffect, useRef} from 'react';
import {Bar,Chart} from 'react-chartjs-2';
import './DashboardBarChartCard.css';

const DashboardBarChartCard = ({id}) => {

    const data =  {
            labels:['one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine'],
            datasets:[{
                label:"Total Deposits('000)",
                data:[3, 2, 3, 5, 1,3, 5, 1,6],
                borderColor: 'rgba(73, 163, 123, 1)',
                backgroundColor: 'rgba(73, 163, 123, 1)',
                pointBackgroundColor: 'rgba(200, 189, 32, 0.2)',
                pointBorderColor: 'rgba(200, 189, 132, 0.2)',
            }]
        }
    

    return (
        <div className="dashboard-line-chart">
            <Bar height={150} redraw={false} data={data} />
        </div>
    )
}

export default DashboardBarChartCard
