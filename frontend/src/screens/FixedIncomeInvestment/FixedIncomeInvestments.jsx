import React, { useEffect, useState } from 'react'
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
import { Link } from 'react-router-dom';
import SILiquidatedInvestmentCard from '../../components/SoleInvestment/SILiquidatedInvestmentCard/SILiquidatedInvestmentCard';
import FixedIncomeOverviewCard from '../../components/FixedIncomeInvestment/FixedIncomeOverviewCard/FixedIncomeOverviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { getFixedIncomeInvestmentDepositGraphData, getFixedIncomeInvestmentGraphData, getFixedIncomeInvestmentStat } from '../../redux/actions/investmentsActions';
import VaultInvestmentLineGraphContainer from '../../components/FixedIncomeInvestment/VaultInvestmentLineGraphContainer/VaultInvestmentLineGraphContainer';


const FixedIncomeInvestment = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Vault Investment");

    const dispatch = useDispatch();

    const fixedIncomeInvestmentStatData = useSelector(state => state.fixedIncomeInvestmentStatData);
    const { fixedIncomeInvestmentStat } = fixedIncomeInvestmentStatData;

    const fixedIncomeInvestmentGraphData = useSelector(state => state.fixedIncomeInvestmentGraphData);
    const fixedIncomeInvestmentDepositGraphData = useSelector(state => state.fixedIncomeInvestmentDepositGraphData);

    const [invGraphData, setInvGraphData] = useState({})
    const [depGraphData, setDepGraphData] = useState({})

    const [totalDep, setTotalDep] = useState(0);

    const [totalFxInv, setTotalFxInv] = useState(0);


    useEffect(() => {
        dispatch(getFixedIncomeInvestmentStat());
    }, [dispatch]);


    useEffect(()=>{

        dispatch(getFixedIncomeInvestmentGraphData())
        dispatch(getFixedIncomeInvestmentDepositGraphData());
    },[dispatch])


    useEffect(()=>{
        if(fixedIncomeInvestmentGraphData.loading === false){
            const received = createInvArray(fixedIncomeInvestmentGraphData.values.data);
            

            setInvGraphData(received)

            setTotalFxInv(fixedIncomeInvestmentGraphData.values.total_amount)
        }
    },[fixedIncomeInvestmentGraphData])

    useEffect(()=>{
        if(fixedIncomeInvestmentDepositGraphData.loading === false){
            const received = createInvArray(fixedIncomeInvestmentDepositGraphData.values.data);
            


            setDepGraphData(received)

            setTotalDep(fixedIncomeInvestmentDepositGraphData.values.total_amount)
        }
    },[fixedIncomeInvestmentDepositGraphData])


    const createInvArray = (objReceived) => {
        let invValues  = [];
        let invDateValues  = [];

        for (let obj of objReceived){
            invValues.push(obj.count || obj.total_amount);
            invDateValues.push(obj.day)
        }

        return {
            values: invValues,
            labels: invDateValues
        }
    }


    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks}  />
                {console.log(fixedIncomeInvestmentStat,'stat aye')}
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
                        <FIDoughnutChartCard
                            arrData = {fixedIncomeInvestmentStat && fixedIncomeInvestmentStat?.data ? [fixedIncomeInvestmentStat?.data?.pieChartData?.sole_count,fixedIncomeInvestmentStat?.data?.pieChartData?.goal_based_count] : [0,0]}
                            pieChartData={fixedIncomeInvestmentStat && fixedIncomeInvestmentStat?.data ? fixedIncomeInvestmentStat?.data?.pie_chart_data : {}}
                        />

                        <div className=''>
                            <div className="f-i-stat-wrapper">
                                <FixedIncomeOverviewCard 
                                    title_one="Liquidity Requirement Of Vault"
                                    value_one={fixedIncomeInvestmentStat && fixedIncomeInvestmentStat?.data ? "₦ " + fixedIncomeInvestmentStat?.data?.liquidity_fixed_requirement_value.toLocaleString() : ""}
                                    title_two="Active Vault Users"
                                    value_two={fixedIncomeInvestmentStat && fixedIncomeInvestmentStat?.data ? fixedIncomeInvestmentStat?.data?.active_fixed_users : ""}
                                />
                                <FixedIncomeOverviewCard                       
                                    title_one="Total Number Of Vault Investments"
                                    value_one={fixedIncomeInvestmentStat && fixedIncomeInvestmentStat?.data ? "₦ " + fixedIncomeInvestmentStat?.data?.total_fixed_value : ""}
                                    title_two={"Active Vault Investment"}
                                    value_two={fixedIncomeInvestmentStat && fixedIncomeInvestmentStat?.data ? "₦ " + fixedIncomeInvestmentStat?.data?.active_fixed_value : ""}
                                />
                                <FixedIncomeOverviewCard                        
                                    title_one="Total Value Of Vault"
                                    value_one="54,000"
                                    title_two={""}
                                    value_two=""
                                />
                            </div>
                            <div className="f-i-stat-wrapper-bottom">
                                <VaultInvestmentLineGraphContainer
                                    heading={"Total Deposit"}
                                    values={depGraphData}
                                    totals={totalDep}
                                    label={"Number of Fixed Income Investments"}
                                    filter={""}
                                />

                                <VaultInvestmentLineGraphContainer
                                    heading={"Total Matured Investment"}
                                    values={invGraphData}
                                    totals={totalFxInv}
                                    label={"Number of Fixed Income Investments"}
                                    filter={""}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixedIncomeInvestment
