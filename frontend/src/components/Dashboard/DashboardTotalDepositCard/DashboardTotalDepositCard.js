import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { numberWithComma } from '../../../redux/numberFormatter';
import './DashboardTotalDepositCard.css';

const DashboardTotalDepositCard = ({ depositData }) => {
    const allTime = () => {
        return {
            labels: ['Jan', 'Feb', 'March', 'Apr', 'May'],
            datasets: [{
                label: "Total Deposits('000)",
                data: [3, 2, 3, 0, 10],
                borderColor: 'rgba(73, 163, 123, 1)',
                // backgroundColor: 'rgba(255, 89, 32, 0.2)',
                // pointBackgroundColor: 'rgba(200, 189, 32, 0.2)',
                // pointBaorderColor: 'rgba(200, 189, 132, 0.2)',
            }]
        };
    };
    const [redraw, setRedraw] = useState(false);
    const [chartData, setChartData] = useState(allTime());

    const setOptionsForChart = (option) => {
        let selectedOption = option.target.value;
        setRedraw(false);
        let newData={...chartData};
        switch (selectedOption) {
            case 'allTime':
                setChartData(allTime());
                break;
            case 'optionTwo':
                newData.datasets[0]['data'] = [2, 1, 0, 22, 3, 44, 55, 2, 11, 2, 3, 9];
                setChartData(newData);
                break;
            case 'optionThree':
                newData.datasets[0]['data'] = [24.0, 1, 30, 22, 3, 4, 5, 2, 11, 2, 33, 9];
                setChartData(newData);
                break;
            default:
                setChartData(allTime());
                break;
        }
        return setRedraw(true);
    }

    return (
        <div className="dashboard-bottom-item">
            <div className="dashboard-total-deposits-heading">
                <div className="dashboard-total-deposits-value">
                    <div className="desc">Total Deposits</div>
                    <div className="value">{numberWithComma(depositData.count)}<sup>.00</sup></div>
                </div>
                <select className="dashboard-select" onChange={setOptionsForChart}>
                    <option value='allTime'>All time</option>
                    <option value='optionTwo'>option 2</option>
                    <option value='optionThree'>option 3</option>
                </select>
            </div>
            <div className="dashboard-line-chart">
                <Line height={150} redraw={redraw} data={chartData} />
            </div>
        </div>
    )
}

export default DashboardTotalDepositCard
