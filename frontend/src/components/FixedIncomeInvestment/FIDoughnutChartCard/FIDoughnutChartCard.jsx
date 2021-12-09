import React from 'react'
import './FIDoughnutChartCard.css'
import {Doughnut} from 'react-chartjs-2';
import FIDoughnutChartTable from './FIDoughnutChartTable/FIDoughnutChartTable';
// import DoughnutChartTable from './FIDoughnutChartTable/FIDoughnutChartTable';

const FIDoughnutChartCard = () => {
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
            <div className="fi-bottom-item dougnut-chart-card">
                <div className="fi-doughnut-card-heading-text">Investment</div>
                <div className="fi-doughnut-chart">
                   <Doughnut   redraw={false} data={data} options={options} />
                </div>
                <FIDoughnutChartTable />
            </div>
    )
}

export default FIDoughnutChartCard
