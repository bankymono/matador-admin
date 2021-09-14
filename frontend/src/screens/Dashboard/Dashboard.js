import React from 'react';
import './Dashboard.css';

const Dashboard = ({match}) => {
    return (
        <div className="dashboard">
            <div className="dashboard-top-items">
                <div className="dashboard-top-item">1 1</div>
                <div className="dashboard-top-item">1 2</div>
                <div className="dashboard-top-item">1 3</div>
                <div className="dashboard-top-item">2 1</div>
                <div className="dashboard-top-item">2 2</div>
                <div className="dashboard-top-item">2 3</div>
                <div className="dashboard-top-item">3 1</div>
                <div className="dashboard-top-item">3 2</div>
            </div>
            <div className="dashboard-bottom-items">
                <div className="dashboard-bottom-item">item 1</div>
                <div className="dashboard-bottom-item"> item 2</div>
            </div>

        </div>
    )
}

export default Dashboard
