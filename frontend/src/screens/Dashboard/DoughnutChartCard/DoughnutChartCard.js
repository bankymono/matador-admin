import React from 'react'
import './DoughnutChartCard.css'
import {Doughnut} from 'react-chartjs-2';
import DoughnutChartTable from './DoughnutChartTable/DoughnutChartTable';

const DoughnutChartCard = ({assetAllocationData}) => { 
    const data =  {
        labels:false,
        datasets:[{
            label:"Total Deposits('000)",
            data:[3,3, 2, 3, 5],
            borderColor: ['#FB9A99','rgba(31, 120, 180, 1)','rgba(166, 206, 227, 1)', '#B2DF8A','#33A02C'],
            backgroundColor: ['#FB9A99','rgba(31, 120, 180, 1)','rgba(166, 206, 227, 1)', '#B2DF8A','#33A02C'],
            pointBackgroundColor: 'rgba(200, 189, 32, 0.2)',
            pointBorderColor: 'rgba(200, 189, 132, 0.2)',
        }],
    }

    var options = {        
        cutout: '90%',
    };

    return (
            <div className="dashboard-top-item dougnut-chart-card">
                <div className="doughnut-card-heading-text">Asset Allocation</div>
                <div className="doughnut-chart">
                   <Doughnut  data={assetAllocationData} redraw={false} data={data} options={options} />
                </div>
                <DoughnutChartTable assetAllocationData={assetAllocationData} />
            </div>
    )
}

export default DoughnutChartCard
