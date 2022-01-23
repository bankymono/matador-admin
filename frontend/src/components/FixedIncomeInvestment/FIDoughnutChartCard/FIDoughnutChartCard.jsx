import React from 'react'
import './FIDoughnutChartCard.css'
import {Doughnut, Pie} from 'react-chartjs-2';
import FIDoughnutChartTable from './FIDoughnutChartTable/FIDoughnutChartTable';
// import DoughnutChartTable from './FIDoughnutChartTable/FIDoughnutChartTable';

const FIDoughnutChartCard = ({pieChartData}) => {
    

    const data =  {
        labels:false,
        datasets:[{
            label:"Vault Investment",
            // data:[200,120],
            data:[pieChartData?.goal_based_count,pieChartData?.sole_count],
            borderColor: ['#8D30FF','#1DC293','#FB9A99','rgba(31, 120, 180, 1)','rgba(166, 206, 227, 1)', '#B2DF8A','#33A02C'],
            backgroundColor: ['#8D30FF','#1DC293','#FB9A99','rgba(31, 120, 180, 1)','rgba(166, 206, 227, 1)', '#B2DF8A','#33A02C'],
            pointBackgroundColor: 'rgba(200, 189, 32, 0.2)',
            pointBorderColor: 'rgba(200, 189, 132, 0.2)',
        }],
    }

    var options = {        
        // cutout: '90%',
    };

    return (
            <div className="fi-bottom-item dougnut-chart-card">
                <div className="fi-doughnut-card-heading-text">Current Ratio</div>
                <div className="fi-doughnut-chart">
                   <Pie redraw={false} data={data} options={options} />
                </div>
                <FIDoughnutChartTable
                    pieChartData={pieChartData}
                />
            </div>
    )
}

export default FIDoughnutChartCard
