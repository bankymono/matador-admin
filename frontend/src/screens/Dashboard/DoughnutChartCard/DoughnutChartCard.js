import React, {useState} from 'react'
import './DoughnutChartCard.css'
import {Doughnut} from 'react-chartjs-2';
import DoughnutChartTable from './DoughnutChartTable/DoughnutChartTable';

const DoughnutChartCard = ({assetAllocationData}) => {
    const [redraw, setRedraw] = useState(false); 
    const [data, setData] = useState({
        labels:false,
        datasets:[{
            label:"",
            // data:[assetAllocationData.fixed_income.value, assetAllocationData.equity.value, assetAllocationData.cash.value, assetAllocationData.rewards.value],
            data: [2,6,3,8],
            borderColor: ['rgba(31, 120, 180, 1)','rgba(166, 206, 227, 1)', '#B2DF8A','#33A02C'],
            backgroundColor: ['rgba(31, 120, 180, 1)','rgba(166, 206, 227, 1)', '#B2DF8A','#33A02C'],
            pointBackgroundColor: 'rgba(200, 189, 32, 0.2)',
            pointBorderColor: 'rgba(200, 189, 132, 0.2)',
        }],
    });
    const resetData =()=>{
        setData(({
            labels:false,
            datasets:[{
                label:"",
                // data:[assetAllocationData.fixed_income.value, assetAllocationData.equity.value, assetAllocationData.cash.value, assetAllocationData.rewards.value],
                data: [5,5,5,5],
                borderColor: ['rgba(31, 120, 180, 1)','rgba(166, 206, 227, 1)', '#B2DF8A','#33A02C'],
                backgroundColor: ['rgba(31, 120, 180, 1)','rgba(166, 206, 227, 1)', '#B2DF8A','#33A02C'],
                pointBackgroundColor: 'rgba(200, 189, 32, 0.2)',
                pointBorderColor: 'rgba(200, 189, 132, 0.2)',
            }],
        }));
        setRedraw(!redraw);
        return data;
    };

    var options = {        
        cutout: '90%',
    };

    return (
            <div className="dashboard-top-item dougnut-chart-card">
                <div className="doughnut-card-heading-text">Asset Allocation</div>
                <div className="doughnut-chart">
                   <Doughnut redraw={redraw} data={data} options={options} />
                </div>
                <DoughnutChartTable assetAllocationData={assetAllocationData} />
                <div onClick={()=>resetData()}>redraw doughnut button</div>
            </div>
    )
}

export default DoughnutChartCard
