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

import SILiquidatedInvestmentCard from '../../components/SoleInvestment/SILiquidatedInvestmentCard/SILiquidatedInvestmentCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSoleInvestmentStat } from '../../redux/actions/investmentsActions';
// import ProjectListOverviewCardTwo from './ProjectsListOverviewCardTwo/ProjectsListOverviewCardTwo';

const SoleInvestment = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Sole");
    const dispatch = useDispatch();

    const soleInvestmentStatData = useSelector(state => state.soleInvestmentStatData);

    const { soleInvestmentStat } = soleInvestmentStatData;

    useEffect(() => {
        dispatch(getSoleInvestmentStat());
    }, [dispatch])

    useEffect(() => {
        console.log('sole data', soleInvestmentStat)
    }, [soleInvestmentStat])

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
                            title_one="Total Number of Sole Vault Users"
                            value_one={soleInvestmentStat && soleInvestmentStat?.data ? soleInvestmentStat?.data?.total_fixed_users : ""}
                            title_two="Active Sole Vault Users"
                            value_two={soleInvestmentStat && soleInvestmentStat?.data ? soleInvestmentStat?.data?.active_fixed_users : ""}
                        />
                        <SoleInvestmentListOverviewCard                        
                            title_one="Total Value of Sole Vault Investments"
                            value_one={soleInvestmentStat && soleInvestmentStat?.data ? "₦ " + soleInvestmentStat?.data?.total_fixed_value.toLocaleString() : ""}
                            title_two={"Active Sole Vault Investment"}
                            value_two={soleInvestmentStat && soleInvestmentStat?.data ? "₦ " + soleInvestmentStat?.data?.active_fixed_value.toLocaleString() : ""}
                        />
                        <SoleInvestmentListOverviewCard                        
                            title_one="Liquidity Requirement of Sole Vault"
                            value_one={soleInvestmentStat && soleInvestmentStat?.data ? "₦ " + soleInvestmentStat?.data?.liquidity_fixed_requirement_value.toLocaleString() : ""}
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
