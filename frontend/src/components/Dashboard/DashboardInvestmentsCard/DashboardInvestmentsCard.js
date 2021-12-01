import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import './DashboardInvestmentsCard.css';

const DashboardInvestmentsCard = () => {
    const allTimeForFirstChart = () => {
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
    const allTimeForSecondChart = () => {
        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: "Total Deposits(000)",
                data: [3, 0, 3, 5, 1, 3, 0, 1, 6, 12, 1, 12],
                borderColor: 'rgba(73, 163, 123, 1)',
                backgroundColor: 'rgba(73, 163, 123, 1)',
                pointBackgroundColor: 'rgba(200, 189, 32, 0.2)',
                pointBorderColor: 'rgba(200, 189, 132, 0.2)',
            }]
        }
    };

    const [redrawFirstChart, setRedrawFirstChart] = useState(false);
    const [redrawSecondChart, setRedrawSecondChart] = useState(false);
    const [firstChartData, setFirstChartData] = useState(allTimeForFirstChart());
    const [secondChartData, setSecondChartData] = useState(allTimeForSecondChart());

    const setOptionsForFirstChart = (option) => {
        let selectedOption = option.target.value;
        setRedrawFirstChart(false);
        setRedrawSecondChart(false);
        let newData={...firstChartData};
        switch (selectedOption) {
            case 'allTimeForFirstChart':
                setFirstChartData(allTimeForFirstChart());
                break;
            case 'optionTwo':
                newData.datasets[0]['data'] = [2, 1, 0, 22, 3, 44, 55, 2, 11, 2, 3, 9];
                setFirstChartData(newData);
                break;
            case 'optionThree':
                newData.datasets[0]['data'] = [24.0, 1, 30, 22, 3, 4, 5, 2, 11, 2, 33, 9];
                setFirstChartData(newData);
                break;
            default:
                setFirstChartData(allTimeForFirstChart());
                break;
        }
        
        return setRedrawFirstChart(true);
    }
    const setOptionsForSecondChart = (option) => {
        let selectedOption = option.target.value;
        setRedrawSecondChart(false);
        setRedrawFirstChart(false);
        let newData={...secondChartData};
        switch (selectedOption) {
            case 'allTimeForSecondChart':
                setSecondChartData(allTimeForSecondChart());
                break;
            case 'optionTwo':
                newData.datasets[0]['data'] = [2, 1, 0, 22, 3, 44, 55, 2, 11, 2, 3, 9];
                setSecondChartData(newData);
                break;
            case 'optionThree':
                newData.datasets[0]['data'] = [24.0, 1, 30, 22, 3, 4, 5, 2, 11, 2, 33, 9];
                setSecondChartData(newData);
                break;
            default:
                setSecondChartData(allTimeForSecondChart());
                break;
        }
        return setRedrawSecondChart(true);
    }

    return (
        <div className="dashboard-top-item dashboard-investments-card">

            <div>
                <div className="dashboard-investments-heading-container">
                    <div className="dashboard-investments-card-heading">Investments</div>
                    <select className="dashboard-select" onChange={setOptionsForFirstChart}>
                        <option value='allTimeForFirstChart'>All time</option>
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
                    <select className="dashboard-select" onChange={setOptionsForSecondChart}>
                        <option value='allTimeForSecondChart'>All time</option>
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
                    <Bar height={150} redraw={redrawSecondChart} data={secondChartData} />
                </div>
            </div>

        </div>
    )
}

export default DashboardInvestmentsCard
