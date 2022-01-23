import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import Carousel from 'react-elastic-carousel';
import CurrencyOptionsBtn from '../../components/CurrencyOptionsBtn/CurrencyOptionsBtn';
import EquityInvestmentListOverviewCard from '../../components/EquityInvestment/EquityInvestmentListOverviewCard/EquityInvestmentListOverviewCard';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import { getEquityInvestmentStat, getEquityInvestmentData, getEquityInvestmentGraphData, getEquityInvestmentDepositGraphData } from '../../redux/actions/investmentsActions';
import EIOngoingAndSoldTab from '../../components/EquityInvestment/EIOngoingAndSoldTab/EIOngoingAndSoldTab';

import './EquityInvestment.css'
import EquityLineGraphContainer from '../../components/EquityInvestment/EquityLineGraphContainer/EquityLineGraphContainer';

const EquityInvestment = ({ arrLinks }) => {
    const [currentPage, setCurrentPage] = useState("Equity Investment");

    const dispatch = useDispatch()
    const equityInvestmentStatData = useSelector(state => state.equityInvestmentStatData);

    const equityInvestmentGraphData = useSelector(state => state.equityInvestmentGraphData);
    const equityInvestmentDepositGraphData = useSelector(state => state.equityInvestmentDepositGraphData);

    const equityInvestmentData = useSelector(state => state.equityInvestmentData);
    const { equityInvestmentStat } = equityInvestmentStatData;
    const { eqData } = equityInvestmentData;

    const [invGraphData, setInvGraphData] = useState({})
    const [depGraphData, setDepGraphData] = useState({})


    const [totalDep, setTotalDep] = useState(0);

    const [totalEqInv, setTotalEqInv] = useState(0);

    useEffect(()=>{
            dispatch(getEquityInvestmentData({investment_type_id: 1, page: 0, is_sold: null, investment_completed:null}));            
    }, [dispatch])

    useEffect(() => {
        dispatch(getEquityInvestmentStat());
    }, [dispatch]);

    useEffect(()=>{

        dispatch(getEquityInvestmentGraphData())
        dispatch(getEquityInvestmentDepositGraphData());
    },[dispatch])


    useEffect(()=>{
        if(equityInvestmentGraphData.loading === false){
            const received = createInvArray(equityInvestmentGraphData.values.data);
            

            setInvGraphData(received)

            setTotalEqInv(equityInvestmentGraphData.values.total_amount)
        }
    },[equityInvestmentGraphData])

    useEffect(()=>{
        if(equityInvestmentDepositGraphData.loading === false){
            const received = createInvArray(equityInvestmentDepositGraphData.values.data);
            


            setDepGraphData(received)

            setTotalDep(equityInvestmentDepositGraphData.values.total_amount)
        }
    },[equityInvestmentDepositGraphData])


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
                <SubNav
                    currentPage={currentPage}
                    arrLinks={arrLinks}
                    rightButtons={<CurrencyOptionsBtn />}
                />
                <div className="e-i-center-content-wrapper">
                    {/* <div className="e-i-stat-wrapper"> */}
                        <Carousel 
                            // className='e-i-stat-carousel'
                            // itemPadding={[0,1]}
                            className='rec-carousel'
                            itemPadding={[0,-10]}
                            itemsToShow={3}
                            // outerSpacing={-30}
                            showArrows={false}
                            >

                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Active Users"}
                                    value_one={equityInvestmentStat && equityInvestmentStat?.data ? equityInvestmentStat?.data?.active_users : ""}
                                    title_two={"Total Number Outright Bundle Users"}
                                    value_two={equityInvestmentStat && equityInvestmentStat?.data ? `${equityInvestmentStat?.data?.total_number_of_outright_bundle_users.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Liquidity Requirement of Equity"}
                                    value_one={equityInvestmentStat && equityInvestmentStat?.data ? `₦ ${equityInvestmentStat?.data?.liquidity_requirement_equity.toLocaleString()}` : ""}
                                    title_two={"Total Number Payment Plan Bundle Users"}
                                    value_two={equityInvestmentStat && equityInvestmentStat?.data ? `${equityInvestmentStat?.data?.total_number_of_payment_plan_bundle_users.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Income Dividend Paid Out"}
                                    value_one={equityInvestmentStat && equityInvestmentStat?.data ? `₦ ${equityInvestmentStat?.data?.total_income_dividend_paid.toLocaleString()}` : ""}
                                    title_two={"Total Number Mortgage Users"}
                                    value_two={equityInvestmentStat && equityInvestmentStat?.data ? `${equityInvestmentStat?.data?.total_number_of_mortgage_users.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Number of Fractional Users"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.total_number_of_fractional_investors : ""}
                                    title_two={"Total Number of Fractions Sold"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.total_value_of_fractions_sold.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Number of Bundle Users"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.total_number_of_bundle_investors : ""}
                                    title_two={"Total Number of Bundles Sold"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.total_values_of_bundle_sold.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Number of Fractional and Bundle Users"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.total_number_of_fractional_investors + equityInvestmentStat?.data?.total_number_of_bundle_investors  : ""}
                                    title_two={"Total Number Payment Plan Bundle Sold"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.total_values_of_payment_plan_bundle_sold.toLocaleString()}` : ""}
                                />
                        </Carousel>
                    {/* </div> */}

                        <div className="e-i-stat-wrapper">
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Number Outright Bundle Sold"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.total_value_of_outright_bundle_sold.toLocaleString()}` : ""}
                                    title_two={"Value of Fractional Asset Under Management"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.total_fractional_asset_under_management.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Number Mortgage Bundle Sold"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.total_mortgage_bundles_sold : ""}
                                    title_two={"Value of Bundle Asset Under Management"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.total_bundle_asset_under_management.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Asset Under Management"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? "₦ " + equityInvestmentStat?.data?.total_asset_under_management.toLocaleString() : ""}
                                    title_two={""}
                                    value_two={""}
                                />
                    </div>

                    {eqData ?
                        <EIOngoingAndSoldTab 

                        />

                        :
                        <BeatLoader color="#03A678" loading={true} />
                    }
                        <div className="e-i-stat-wrapper-bottom">
                                <EquityLineGraphContainer
                                    heading={"Total Purchase Deposit"}                                    
                                    values={depGraphData}
                                    totals={totalDep}
                                    label={"Number of Deposits"}
                                    filter={""}
                                />
                                <EquityLineGraphContainer
                                    heading={"Total Number of Equity Investments"}
                                    values={invGraphData}
                                    totals={totalEqInv}
                                    label={"Number of Equity Investments"}
                                    filter={""}
                                />
                                {/* <EquityLineGraphContainer /> */}
                                {/* <EquityInvestmentListOverviewCard
                                    title_one={"Number of Equity Investments"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.total_no : ""}
                                    title_two={"Value of Equity Investments"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.total_value.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Number of Active Equity Investments"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.active_no : ""}
                                    title_two={"Asset Under Management"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.asset_under_management.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Number of Active Equity Investments"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.active_no : ""}
                                    title_two={"Asset Under Management"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.asset_under_management.toLocaleString()}` : ""}
                                /> */}
                    </div>
                </div>
            </div>
            {
                // showSingleModal ?
                    // <UserInvestmentModal user={singleData} closeModal={()=>setShowSingleModal(false)} />
                    // : null
            }
        </div>
    )
}

export default EquityInvestment
