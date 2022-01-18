import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import CurrencyOptionsBtn from '../../components/CurrencyOptionsBtn/CurrencyOptionsBtn';
import SIOngoingAndSoldTab from '../../components/SoleInvestment/SIOngoingAndSoldTab/SIOngoingAndSoldTab';
import SoleInvestmentListOverviewCard from '../../components/SoleInvestment/SoleInvestmentOverviewCard/SoleInvestmentOverviewCard';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
// import { getSoleInvestmentStat } from '../../redux/actions/investmentsActions';

import './SoleInvestment.css'
import DashboardTotalDepositCard from '../../components/Dashboard/DashboardTotalDepositCard/DashboardTotalDepositCard';
import DashboardTotalWithdrawalCard from '../../components/Dashboard/DashboardTotalWithdrawalCard/DashboardTotalWithdrawalCard';
import SILiquidatedInvestmentCard from '../../components/SoleInvestment/SILiquidatedInvestmentCard/SILiquidatedInvestmentCard';
// import ProjectListOverviewCardTwo from './ProjectsListOverviewCardTwo/ProjectsListOverviewCardTwo';

const SoleInvestment = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Sole");
    // const dispatch = useDispatch()
    // const SoleInvestmentStatData = useSelector(state => state.SoleInvestmentStatData);

    // const { SoleInvestmentStat, eqInvStatLoading, eqInvStatError} = SoleInvestmentStatData;

    // useEffect(() => {
    //     dispatch(getSoleInvestmentStat());
    // }, [dispatch])

    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav 
                    currentPage={currentPage} 
                    arrLinks={arrLinks} 
                    rightButtons={<CurrencyOptionsBtn />} 
                />

                <div className="s-i-center-content-wrapper">
                    <div className="s-i-stat-wrapper">
                        <SoleInvestmentListOverviewCard 
                            title_one="Number of Investments"
                            value_one="54,000"
                            title_two="Value of Investments"
                            value_two="₦36,254"
                        />
                        <SoleInvestmentListOverviewCard                        
                            title_one="Number of Active Equity Investments"
                            value_one="54,000"
                            title_two={"Asset Under Management"}
                            value_two="₦36,254"
                        />
                        <SoleInvestmentListOverviewCard                        
                            title_one="Number of Active Equity Investments"
                            value_one="54,000"
                            title_two={""}
                            value_two=""
                        />
                        </div>
                        <div className="s-i-stat-wrapper-bottom">
                        <SILiquidatedInvestmentCard />
                        <SILiquidatedInvestmentCard />

                        </div>


                    <SIOngoingAndSoldTab />

                </div>
            </div>
        </div>
    )
}

export default SoleInvestment
