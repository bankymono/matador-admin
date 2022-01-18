import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './FixedIncomeInvestment.css';

import soleIcon from '../../assets/icons/sole_icon.png'
import circleIcon from '../../assets/icons/circle_icon.png'
import mutualIcon from '../../assets/icons/mutual_icon.png'
import goalBasedIcon from '../../assets/icons/goal_based_icon.png'
import FixedIncomeTypeCard from '../../components/FixedIncomeInvestment/FixedIncomeTypeCard/FixedIncomeTypeCard';
import FIDoughnutChartCard from '../../components/FixedIncomeInvestment/FIDoughnutChartCard/FIDoughnutChartCard';
import FIBarChartCard from '../../components/FixedIncomeInvestment/FIBarChartCard/FIBarChartCard';
import FILiquidationCard from '../../components/FixedIncomeInvestment/FILiquidationCard/FILiquidationCard';
import { Link } from 'react-router-dom';
import SoleInvestmentListOverviewCard from '../../components/SoleInvestment/SoleInvestmentOverviewCard/SoleInvestmentOverviewCard';
import SILiquidatedInvestmentCard from '../../components/SoleInvestment/SILiquidatedInvestmentCard/SILiquidatedInvestmentCard';
import FixedIncomeOverviewCard from '../../components/FixedIncomeInvestment/FixedIncomeOverviewCard/FixedIncomeOverviewCard';


const FixedIncomeInvestment = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Fixed Income");


    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks}  />
                <div className="f-i-i-container">
                    <div className="f-i-i-wrapper">
                        <Link className="f-i-link" to='/investments/fixed-income/sole'>
                            <FixedIncomeTypeCard
                                typeText="Sole"
                                icon = {soleIcon}
                            />
                        </Link>

                        <FixedIncomeTypeCard
                            typeText="Circle"
                            icon = {circleIcon}
                        />

                        <FixedIncomeTypeCard
                            typeText="Mutual"
                            icon = {mutualIcon}
                        />

                        <FixedIncomeTypeCard
                            typeText="Goal-Based"
                            icon = {goalBasedIcon}
                        />
                    </div>
                    <div className="f-i-graph-container">
                        <FIDoughnutChartCard />
                        {/* <FIBarChartCard /> */}
                        {/* <FILiquidationCard /> */}

                        <div className=''>
                            <div className="f-i-stat-wrapper">
                                <FixedIncomeOverviewCard 
                                    title_one="Liquidity Requirement Of Vault"
                                    value_one="54,000"
                                    title_two="Active Vault Users"
                                    value_two="₦36,254"
                                />
                                <FixedIncomeOverviewCard                       
                                    title_one="Total Number Of Vault Investments"
                                    value_one="54,000"
                                    title_two={"Active Vault Investment"}
                                    value_two="₦36,254"
                                />
                                <FixedIncomeOverviewCard                        
                                    title_one="Total Value Of Vault"
                                    value_one="54,000"
                                    title_two={""}
                                    value_two=""
                                />
                            </div>
                            <div className="f-i-stat-wrapper-bottom">
                                <SILiquidatedInvestmentCard />
                                <SILiquidatedInvestmentCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixedIncomeInvestment
