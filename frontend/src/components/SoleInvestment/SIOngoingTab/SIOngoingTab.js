import React, {useEffect, useMemo, useState} from 'react';
import './SIOngoingTab.css';

import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, COLUMNS2} from './columns';
// import ReusableTable from '../../../ReusableTable/ReusableTable';
import Pagination from '../../Pagination/Pagination';
import ReusableTable from '../../ReusableTable/ReusableTable';
import SoleFI from '../../modals/SoleFIModal/SoleFI';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSoleInvestmentData } from '../../../redux/actions/investmentsActions';
import EquityInvestmentTable from '../../EquityInvestment/EquityInvestmentTable/EquityInvestmentTable';

const SIOngoingTab = ({eqLoading, eqError, equityInvestments, isSold}) => {

    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory()

    const [soleInvList, setSoleInvList] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [soleInvStatus, setSoleInvStatus] = useState('all');

    const dispatch = useDispatch();
    const soleInvestmentData = useSelector(state => state.soleInvestmentData);

    useEffect(()=>{
        if(isSold === 1){
            dispatch(getSoleInvestmentData({investment_type_id: 2, page: 0, is_sold: false, investment_completed:soleInvStatus}));            
        }else if (isSold === 2){
            dispatch(getSoleInvestmentData({investment_type_id: 2, page: 0, is_sold: true, investment_completed:soleInvStatus}));          
        }
        
    }, [dispatch,isSold, soleInvStatus]);

    useEffect(()=>{
        if(soleInvestmentData.loading === false && !soleInvestmentData.error){
            console.log('eee', soleInvestmentData.soleData);
            
            constructObject(soleInvestmentData.soleData)
            setPageCount(soleInvestmentData.soleData.count)

        }
    },[soleInvestmentData])

    const constructObject = (soleInvDataList) => {

        let newArr = soleInvDataList?.data?.map(invData => {
            let dt = new Date(invData.start_date)
            return({
                full_name: invData.user.first_name + " " + invData.user.last_name,
                amount_invested: invData.amount_invested.toLocaleString(),
                duration: invData.duration_in_months,
                start_date: dt.toDateString(),
                status: invData.status ? "Active": "Completed",
            })
        })
        setSoleInvList(newArr);
    }

    const closeModal = () =>{
        setIsOpen(false);
        history.push(`/investments/fixed-income/sole`)
    }

    const handleClick = (id) => {
        setIsOpen(true)
        history.push(`/investments/fixed-income/sole?sole_id=${id}`)
    }

    const handlePageClick=(data) => {
        dispatch(getSoleInvestmentData({investment_type_id:2, page:data.selected,is_sold:isSold, investment_completed:soleInvStatus}))
    }

    return (
        <>
            <div>
            {soleInvList?.length===0 &&  soleInvestmentData?.loading ? null : <EquityInvestmentTable
                    columnsConfig={COLUMNS} 
                    columnsConfig2={COLUMNS2} 
                    dataConfig={soleInvList} 
                    dataConfig2={MOCK_DATA} 
                    eqInvStatus={soleInvStatus}
                    setEqInvStatus={setSoleInvStatus}
                    handleCellClick={()=>{}}
                />} 

            <div className="s-i-ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            <SoleFI setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} />
        </div>


        </>
        
    )
}

export default SIOngoingTab
