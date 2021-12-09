import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyOptionsBtn from '../../components/CurrencyOptionsBtn/CurrencyOptionsBtn';
import EIOngoingAndSoldTab from '../../components/EquityInvestment/EIOngoingAndSoldTab/EIOngoingAndSoldTab';
import EquityInvestmentListOverviewCard from '../../components/EquityInvestment/EquityInvestmentListOverviewCard/EquityInvestmentListOverviewCard';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import { getEquityInvestmentStat } from '../../redux/actions/investmentsActions';

import './EquityInvestment.css'
// import ProjectListOverviewCardTwo from './ProjectsListOverviewCardTwo/ProjectsListOverviewCardTwo';

const EquityInvestment = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Equity Investment");
    const dispatch = useDispatch()
    const equityInvestmentStatData = useSelector(state => state.equityInvestmentStatData);

    const { equityInvestmentStat, eqInvStatLoading, eqInvStatError} = equityInvestmentStatData;

    useEffect(() => {
        dispatch(getEquityInvestmentStat());
    }, [dispatch])

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

                <div className="e-i-center-content-wrapper">
                    <div className="e-i-stat-wrapper">
                        <EquityInvestmentListOverviewCard 
                            title_one={"Number of Equity Investments"}
                            value_one={equityInvestmentStat.data ? equityInvestmentStat?.data?.total_no : ""}
                            title_two={"Value of Equity Investments"}
                            value_two={equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.total_value.toLocaleString()}` :""}
                        />
                        <EquityInvestmentListOverviewCard                        
                            title_one={"Number of Active Equity Investments"}
                            value_one={equityInvestmentStat.data ? equityInvestmentStat?.data?.active_no:""}
                            title_two={"Asset Under Management"}
                            value_two={equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.asset_under_management.toLocaleString()}`:""}
                        />
                    </div>

                    <EIOngoingAndSoldTab />

                </div>
            </div>
        </div>
    )
}

export default EquityInvestment
