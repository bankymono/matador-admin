import React,{useEffect, useRef} from 'react';
import {Line,Chart} from 'react-chartjs-2';
import './DashboardLineChartCard.css';

const DashboardLineChartCard = ({id}) => {

    const data =  {
            labels:['Jan', 'Feb', 'March', 'Apr', 'May'],
            datasets:[{
                label:"Total Deposits('000)",
                data:[3, 2, 3, 0, 10],
                borderColor: 'rgba(73, 163, 123, 1)',
                // backgroundColor: 'rgba(255, 89, 32, 0.2)',
                // pointBackgroundColor: 'rgba(200, 189, 32, 0.2)',
                // pointBaorderColor: 'rgba(200, 189, 132, 0.2)',
            }]
        }
    

    return (
        <div className="dashboard-line-chart">
            <Line height={150} redraw={false} data={data} />
        </div>
    )
}

export default DashboardLineChartCard
