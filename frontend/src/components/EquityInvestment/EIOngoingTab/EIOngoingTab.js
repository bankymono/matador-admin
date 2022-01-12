import React, {useEffect, useMemo, useState} from 'react';
import './EIOngoingTab.css';


import { useTable }from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, COLUMNS2} from './columns';
// import ReusableTable from '../../../ReusableTable/ReusableTable';
import Pagination from '../../Pagination/Pagination';
import ReusableTable from '../../ReusableTable/ReusableTable';
import { useDispatch, useSelector } from 'react-redux';
import { getEquityInvestmentData } from '../../../redux/actions/investmentsActions';
import EquityInvestmentTable from '../EquityInvestmentTable/EquityInvestmentTable';
import PaginationVerTwo from '../../PaginationVerTwo/PaginationVerTwo';

const EIOngoingTab = ({isSold}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [eqInvList, setEqInvList] = useState([]);
    const [eqInvId, setEqInvId] = useState('');
    const [pagiOffset, setPagiOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [eqInvStatus, setEqInvStatus] = useState('all');

    const dispatch = useDispatch();
    const equityInvestmentData = useSelector(state => state.equityInvestmentData);
    // const columns = useMemo(() => COLUMNS, []);
    // const data = useMemo(() => MOCK_DATA, []);
    useEffect(()=>{
        if(isSold === 1){
            dispatch(getEquityInvestmentData({investment_type_id: 1, page: 0, is_sold: false, investment_completed:eqInvStatus}));            
        }else if (isSold === 2){
            dispatch(getEquityInvestmentData({investment_type_id: 1, page: 0, is_sold: true, investment_completed:eqInvStatus}));          
        }
        
    }, [dispatch,isSold, eqInvStatus])

    useEffect(()=>{
        if(equityInvestmentData.loading === false && !equityInvestmentData.error){

            constructObject(equityInvestmentData.eqData)
            setPageCount(equityInvestmentData.eqData.count)
        }
    },[equityInvestmentData])

    const constructObject = (eqInvDataList) => {

        let newArr = eqInvDataList?.data?.map(invData => {
            let dt = new Date(invData.created_at)

            return({
                investor_name: invData.user.first_name + " " + invData.user.last_name,
                amount_invested: invData.amount_invested.toLocaleString(),
                investment_date: dt.toDateString(),
                number_of_fractions: invData.number_of_fractions,
                equity_type: invData.bundle ? "bundles": "fractions"
            })
        })
        setEqInvList(newArr);
    }


    const handlePageClick=(data) => {
        dispatch(getEquityInvestmentData({investment_type_id:1, page:data.selected,is_sold:isSold, investment_completed:eqInvStatus}))
    }


    // eqInvList.length===0 && 
    return (
        <>
            <div>
                {eqInvList.length===0 &&  equityInvestmentData?.loading ? null : <EquityInvestmentTable
                    columnsConfig={COLUMNS} 
                    columnsConfig2={COLUMNS2} 
                    dataConfig={eqInvList} 
                    dataConfig2={MOCK_DATA} 
                    eqInvStatus={eqInvStatus}
                    setEqInvStatus={setEqInvStatus}
                />}  

            <div className="e-i-ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">{pageCount}</span></div>
                <div><PaginationVerTwo pageCount={pageCount} handlePageClick={handlePageClick} /></div>
            </div>
            
        </div>

{/* ####################################################################################### */}
        {/* <div>
            <div className="e-i-ongoing-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input placeholder="Search" />
                </div>

                <select className="e-i-ongoing-select">
                    <option>All investment</option>
                    <option>investment 2</option>
                    <option>investment 3</option>
                </select>
            </div>

            <div className="e-i-ongoing-info-heading">
                <input type="checkbox" />
                <div className="e-i-ongoing-info-heading-wrapper">
                    <div className="e-i-ongoing-info-heading-item">Investor name</div>
                    <div className="e-i-ongoing-info-heading-item">Equity Type</div>
                    <div className="e-i-ongoing-info-heading-item">Number of fractions</div>
                    <div className="e-i-ongoing-info-heading-item">Investment Date</div>
                    <div className="e-i-ongoing-info-heading-item">Amount Invested</div>
                </div>
            </div>

            <div className="e-i-ongoing-info-body-list">
                <div className="e-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="e-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="e-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="e-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="e-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="e-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="e-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="e-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="e-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="e-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="e-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="e-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>
            </div>

            <div className="e-i-ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            
        </div> */}
        </>
        
    )
}

export default EIOngoingTab
