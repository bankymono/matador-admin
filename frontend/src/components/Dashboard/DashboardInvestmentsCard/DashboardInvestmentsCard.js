import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import './DashboardInvestmentsCard.css';

const DashboardInvestmentsCard = () => {
    const allTime = () => {
        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: "Total Deposits(000)",
                data: [3, 2, 3, 5, 1, 3, 5, 1, 6, 10, 11, 12],
                borderColor: 'rgba(73, 163, 123, 1)',
                backgroundColor: 'rgba(73, 163, 123, 1)',
                pointBackgroundColor: 'rgba(200, 189, 32, 0.2)',
                pointBorderColor: 'rgba(200, 189, 132, 0.2)',
            }]
        }
    };
    const [redrawFirstChart, setRedrawFirstChart] = useState(false);
    const [firstChartData, setFirstChartData] = useState(allTime());
    const setOptionsForFirstChart = (option) => {
        let selectedOption = option.target.value;
        setRedrawFirstChart(false);
        switch (selectedOption) {
            case 'allTime':
                setFirstChartData(allTime());
                break;
            case 'optionTwo':
                setFirstChartData({
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: "Total Deposits(000)",
                        data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        borderColor: 'rgba(73, 163, 123, 1)',
                        backgroundColor: 'rgba(73, 163, 123, 1)',
                        pointBackgroundColor: 'rgba(200, 189, 32, 0.2)',
                        pointBorderColor: 'rgba(200, 189, 132, 0.2)',
                    }]
                });
                setRedrawFirstChart(!redrawFirstChart);
                break;
            default:
                setFirstChartData(allTime());
                break;
        }
        console.log(firstChartData);
        return setRedrawFirstChart(true);
    }

    return (
        <div className="dashboard-top-item dashboard-investments-card">

            <div>
                <div className="dashboard-investments-heading-container">
                    <div className="dashboard-investments-card-heading">Investments</div>
                    <select className="dashboard-select" onChange={setOptionsForFirstChart}>
                        <option value='allTime'>All time</option>
                        <option value='optionTwo'>option 2</option>
                        <option value='optionThree'>option 3</option>
                    </select>
                </div>

                <div className="investments-value">
                    <div className="desc">Total Worth</div>
                    <div className="value">₦36,254,302<sup>.00</sup></div>
                </div>
                <div className="dashboard-line-chart">
                    <Bar height={150} redraw={redrawFirstChart} data={firstChartData} />
                </div>
            </div>

            <div>
                <div className="dashboard-investments-heading-container">
                    <div className="dashboard-investments-card-heading">Investments</div>
                    <select className="dashboard-select" onChange={setOptionsForFirstChart}>
                        <option value='allTime'>All time</option>
                        <option value='optionTwo'>option 2</option>
                        <option value='optionThree'>option 3</option>
                    </select>
                </div>

                <div className="investments-value">
                    <div className="desc">Total Number</div>
                    <div className="value">₦42,254</div>
                </div>
                {/* <DashboardBarChartCard /> */}
                <div className="dashboard-line-chart">
                    <Bar height={150} redraw={redrawFirstChart} data={firstChartData} />
                </div>
            </div>

        </div>
    )
}

export default DashboardInvestmentsCard
