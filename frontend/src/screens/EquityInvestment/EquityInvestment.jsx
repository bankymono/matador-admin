import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import Carousel from 'react-elastic-carousel';
import CurrencyOptionsBtn from '../../components/CurrencyOptionsBtn/CurrencyOptionsBtn';
import EquityInvestmentListOverviewCard from '../../components/EquityInvestment/EquityInvestmentListOverviewCard/EquityInvestmentListOverviewCard';
import GeneralTable from '../../components/GeneralTable/GeneralTable';
import Header from '../../components/Header/Header';
import UserInvestmentModal from '../../components/modals/UserInvestmentModal';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import { getEquityInvestmentStat, getEquityInvestmentData } from '../../redux/actions/investmentsActions';
import { numberWithComma } from '../../redux/numberFormatter';
import EIOngoingAndSoldTab from '../../components/EquityInvestment/EIOngoingAndSoldTab/EIOngoingAndSoldTab';

import './EquityInvestment.css'
import EquityLineGraphContainer from '../../components/EquityInvestment/EquityLineGraphContainer/EquityLineGraphContainer';
// import ProjectListOverviewCardTwo from './ProjectsListOverviewCardTwo/ProjectsListOverviewCardTwo';

const EquityInvestment = ({ arrLinks }) => {
    const [currentPage, setCurrentPage] = useState("Equity Investment");
    const dispatch = useDispatch()
    const equityInvestmentStatData = useSelector(state => state.equityInvestmentStatData);
    const equityInvestmentData = useSelector(state => state.equityInvestmentData);
    const { equityInvestmentStat } = equityInvestmentStatData;
    const { eqData } = equityInvestmentData;
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [isSold, setIsSold] = useState(false);
    const headList = ['investor name', 'Amount Invested', 'Investment Date', 'Number of Fractions', 'Equity Type'];
    const [singleData, setSingleData] = useState({});
    const [showSingleModal, setShowSingleModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        dispatch(getEquityInvestmentStat());
        // dispatch(getEquityInvestmentData({ investment_type_id: 1, page: 1, is_sold: false }));
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(getEquityInvestmentData({ investment_type_id: 1, page: currentPageNumber, is_sold: isSold, search: searchTerm }));
    //     if (eqData) {
    //         formattedEquityData(eqData.data);
    //     };
    // }, [currentPageNumber, isSold, searchTerm]);

    const formattedEquityData = (eData) => {
        let formattedData = [];
        if (eData)
            eData.forEach(obj => {
                let data = {
                    data_one: `${obj.user.first_name.toLowerCase()} ${obj.user.last_name.toLowerCase()}`,
                    data_two: `₦${numberWithComma(obj.amount_invested)}`,
                    data_three: new Date(`${obj.created_at}`).toDateString(),
                    data_four: `${obj.number_of_fractions}`,
                    data_five: `${obj.bundle ? 'bundles' : 'fractions'}`,
                    data_six: `${obj.project.name}`,
                    data_seven: `₦${numberWithComma(obj.quarterly_income)}`,
                    data_eight: `${numberWithComma(obj.fraction_value)}`
                }
                formattedData.push(data);
            });

        return formattedData;
    }
    const handleCellClick = (data) => {
        setSingleData(data);
        setShowSingleModal(true);
    }
    const handleTabControl = (data) => {
        if (data === 'Sold') {
            setCurrentPageNumber(1);
            setIsSold(true);
        } else {
            setCurrentPageNumber(1);
            setIsSold(false);
        }
    }
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        setSearchTerm(value);
    }
    const paginate = (pageNumber) => {
        setCurrentPageNumber(pageNumber);
    };

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
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.active_no : ""}
                                    title_two={"Total Number Outright Bundle Users"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `${equityInvestmentStat?.data?.no_of_bundles_sold.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Liquidity Requirement of Equity"}
                                    value_one={"₦ 0"}
                                    title_two={"Total Number Payment Plan Bundle Users"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `${equityInvestmentStat?.data?.number_of_bundles_sold_with_payment_plan.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Income Dividend Paid Out"}
                                    value_one={"₦ 0"}
                                    title_two={"Total Number Mortgage Users"}
                                    value_two={"0"}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Number of Fractional Users"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.number_of_fractions_sold : ""}
                                    title_two={"Total Number of Fractions Sold"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.total_value_of_fractions_sold.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Number of Bundle Users"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.no_of_bundles_sold : ""}
                                    title_two={"Total Number of Bundles Sold"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `₦ ${equityInvestmentStat?.data?.total_values_of_bundle_sold.toLocaleString()}` : ""}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Number of Fractional and Bundle Users"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.number_of_fractions_sold + equityInvestmentStat?.data?.no_of_bundles_sold  : ""}
                                    title_two={"Total Number Payment Plan Bundle Sold"}
                                    value_two={equityInvestmentStat && equityInvestmentStat.data ? `${equityInvestmentStat?.data?.number_of_bundles_sold_with_payment_plan.toLocaleString()}` : ""}
                                />
                        </Carousel>
                    {/* </div> */}

                        <div className="e-i-stat-wrapper">
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Number Outright Bundle Sold"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.total_values_of_bundle_sold : ""}
                                    title_two={"Value of Fractional Asset Under Management"}
                                    value_two={"₦ 0"}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Number Mortgage Bundle Sold"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? equityInvestmentStat?.data?.active_no : ""}
                                    title_two={"Value of Bundle Asset Under Management"}
                                    value_two={"₦ 0"}
                                />
                                <EquityInvestmentListOverviewCard
                                    title_one={"Total Asset Under Management"}
                                    value_one={equityInvestmentStat && equityInvestmentStat.data ? "₦ " + equityInvestmentStat?.data?.asset_under_management.toLocaleString() : ""}
                                    title_two={""}
                                    value_two={""}
                                />
                    </div>

                    {eqData ?
                        <EIOngoingAndSoldTab 
                        
                        />
                        // <GeneralTable
                        //     showTabControls={true}
                        //     tabControlsButtonText={{ buttonOne: 'Ongoing', buttonTwo: 'Sold' }}
                        //     handleTabControl={handleTabControl}
                        //     bodyList={eqData ? formattedEquityData(eqData.data) : null}
                        //     total_count={eqData.count}
                        //     usersPerPage={10}
                        //     paginate={paginate}
                        //     setCurrentPageNumber={setCurrentPageNumber}
                        //     currentPageNumber={currentPageNumber}
                        //     handleCellClick={handleCellClick}
                        //     handleSearch={handleSearch}
                        //     headList={headList}
                        // /> 
                        :
                        <BeatLoader color="#03A678" loading={true} />
                    }
                        <div className="e-i-stat-wrapper-bottom">
                                <EquityLineGraphContainer
                                    heading={"Total Purchase"}
                                    // value={}
                                />
                                <EquityLineGraphContainer
                                    heading={"Total Number of Equity Investments"}
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
                showSingleModal ?
                    <UserInvestmentModal user={singleData} closeModal={()=>setShowSingleModal(false)} />
                    : null
            }
        </div>
    )
}

export default EquityInvestment
