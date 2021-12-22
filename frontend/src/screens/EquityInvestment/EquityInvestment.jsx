import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import CurrencyOptionsBtn from '../../components/CurrencyOptionsBtn/CurrencyOptionsBtn';
import EIOngoingAndSoldTab from '../../components/EquityInvestment/EIOngoingAndSoldTab/EIOngoingAndSoldTab';
import EquityInvestmentListOverviewCard from '../../components/EquityInvestment/EquityInvestmentListOverviewCard/EquityInvestmentListOverviewCard';
import GeneralTable from '../../components/GeneralTable/GeneralTable';
import Header from '../../components/Header/Header';
import UserInvestmentModal from '../../components/modals/UserInvestmentModal';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import { getEquityInvestmentStat, getEquityInvestmentData } from '../../redux/actions/investmentsActions';
import { numberWithComma } from '../../redux/numberFormatter';

import './EquityInvestment.css'
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
    const [allowSearch, setAllowSearch] = useState({ condition: false, search: '' });
    const [dupBodyList, setDupList] = useState([]);
    const [singleData, setSingleData] = useState({});
    const [showSingleModal, setShowSingleModal] = useState(false);

    useEffect(() => {
        dispatch(getEquityInvestmentStat());
        dispatch(getEquityInvestmentData({ investment_type_id: 1, page: 1, is_sold: false }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getEquityInvestmentData({ investment_type_id: 1, page: currentPageNumber, is_sold: isSold }));
        if (eqData) {
            formattedEquityData(eqData.data);
        };
    }, [currentPageNumber, isSold]);

    useEffect(() => {
        if (allowSearch.condition) {
            console.log(allowSearch.search);
            return formattedEquityData(allowSearch.search);
        }
    }, [allowSearch]);
    const formattedEquityData = (eData) => {
        let formattedData = [];
        if (eData)
        console.log(eData);
            eData.forEach(obj => {
                let data = {
                    data_one: `${obj.user.first_name.toLowerCase()} ${obj.user.last_name.toLowerCase()}`,
                    data_two: `₦${numberWithComma(obj.amount_invested)}`,
                    data_three: new Date().toDateString(`${obj.created_at}`),
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
        let result = [];
        result = eqData.data.filter((data) => {
            return data.user.first_name.toLowerCase().search(value) !== -1 || data.user.last_name.toLowerCase().search(value) !== -1;
        });
        setAllowSearch({ condition: true, search: result });
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
                    <div className="e-i-stat-wrapper">
                        <EquityInvestmentListOverviewCard
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
                    </div>

                    {eqData ?
                        <GeneralTable
                            showTabControls={true}
                            tabControlsButtonText={{ buttonOne: 'Ongoing', buttonTwo: 'Sold' }}
                            handleTabControl={handleTabControl}
                            bodyList={eqData ? formattedEquityData(eqData.data) : null}
                            total_count={eqData.count}
                            usersPerPage={10}
                            paginate={paginate}
                            setCurrentPageNumber={setCurrentPageNumber}
                            currentPageNumber={currentPageNumber}
                            handleCellClick={handleCellClick}
                            handleSearch={handleSearch}
                            headList={headList}
                        /> :
                        <BeatLoader color="#03A678" loading={true} />
                    }
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
