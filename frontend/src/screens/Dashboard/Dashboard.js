import React, { useState } from 'react';
import CardOne from '../../components/Dashboard/CardOne/CardOne';
import CardTwo from '../../components/Dashboard/CardTwo/CardTwo';
import DashboardInvestmentsCard from '../../components/Dashboard/DashboardInvestmentsCard/DashboardInvestmentsCard';
import DashboardProjectsCard from '../../components/Dashboard/DashboardProjectsCard/DashboardProjectsCard';
import DashboardRevenueCard from '../../components/Dashboard/DashboardRevenueCard/DashboardRevenueCard';

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';

import './Dashboard.css';
import DoughnutChartCard from './DoughnutChartCard/DoughnutChartCard';
import DashboardTransactionsCard from '../../components/Dashboard/DashboardTransactionsCard/DashboardTransactionsCard';
import DashboardInvestorsCard from '../../components/Dashboard/DashboardInvestorsCard/DashboardInvestorsCard';
import DashboardTotalDepositCard from '../../components/Dashboard/DashboardTotalDepositCard/DashboardTotalDepositCard';
import DashboardTotalWithdrawalCard from '../../components/Dashboard/DashboardTotalWithdrawalCard/DashboardTotalWithdrawalCard';
import { Link } from 'react-router-dom';

const Dashboard = ({match, arrLinks, adminInfo}) => {
    const [currentPage, setCurrentPage] = useState("Dashboard")
    console.log('info', adminInfo);
    return (
        <div className="dashboard">
            <SideBar setCurrentPage={setCurrentPage} />
            
            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} />  
                <div className="central-content">
                    <div className="dashboard-top-items">
                            <CardOne currentRatio={adminInfo.current_ratio} />
                            <CardTwo paystackBalance={adminInfo.paystack_balance} />
                            <DoughnutChartCard assetAllocationData={adminInfo.asset_allocation_data} />    
                            <DashboardInvestmentsCard />  
                            <DashboardRevenueCard />     
                            <Link className="dashboard-txn-link" to="/investors/info"><DashboardInvestorsCard /></Link>               
                            <Link className="dashboard-txn-link" to="/projects"><DashboardProjectsCard /></Link>
                            <Link className="dashboard-txn-link" to="/transactions"><DashboardTransactionsCard /></Link>
                        </div>
                        <div className="dashboard-bottom-items">
                            <DashboardTotalDepositCard depositData={adminInfo.deposits} />
                            <DashboardTotalWithdrawalCard withdrawalData={adminInfo.withdrawals} />

                        </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
