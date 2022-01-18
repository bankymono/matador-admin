import React from 'react';
import {Line} from 'react-chartjs-2';
import './DashboardLineChartCard.css';

const DashboardLineChartCard = ({id,label, values}) => {

    const data =  {
            // labels:['Jan', 'Feb', 'March', 'Apr', 'May'],
            labels:values?.labels || [],
            datasets:[{
                label:label,
                // data:[3, 2, 3, 0, 10],
                data:values?.values || [],
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
