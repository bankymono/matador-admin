import React, {useEffect, useMemo, useState} from 'react';
import './UserInvestmentsTab.css';
import search_icon from '../../../assets/icons/search-icon-img.png'
// import search_icon from '../../../assets/icons/search-icon-img.png'
// import Pagination from '../../../Pagination/Pagination';
// import MoreOptionsMenu from '../../../MoreOptionsMenu/MoreOptionsMenu';
import { useTable }from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, COLUMNS2} from './columns';

import { useHistory } from 'react-router-dom';
import UserInvestmentsTable from '../UserInvestmentsTable/UserInvestmentsTable';
import { useDispatch, useSelector } from 'react-redux';
// import { getinvestments } from '../../../redux/actions/investmentsActions';
import PaginationVerTwo from '../../PaginationVerTwo/PaginationVerTwo';
import { getInvestments } from '../../../redux/actions/investmentsActions';
import InvestmentDetail from '../../modals/InvestmentsDetail/InvestmentsDetail';
// import { getInvestments } from '../../../redux/actions/investmentsActions';

const UserInvestmentsTab = ({ userId, setTotalInvCount}) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory()

    const [invStatus, setInvStatus] = useState('all')
    const [invType, setInvType] = useState("0");
    // const [txnStatus, setTxnStatus] = useState('all')

    const [invs, setInvs] = useState([]);
    const [invId, setInvId] = useState('');
    const [pageCount, setPageCount] = useState(0);

    const dispatch = useDispatch();
    const investmentsList = useSelector(state => state.investmentsList);

    useEffect(()=>{
        dispatch(getInvestments(0,userId, invStatus,invType))
    },[dispatch, userId,invStatus,invType]);

    useEffect(()=>{

        if(investmentsList.investmentsLoading === false && !investmentsList.investmentsError){
            constructObject(investmentsList.investments);
            setTotalInvCount(investmentsList.investments.count)
        }
    },[investmentsList, setTotalInvCount])

    const constructObject = (receivedObj) => {

    setPageCount(receivedObj.count)


    let newArr = receivedObj?.data?.map(obj => {
        let dt = new Date(obj.created_at)

        return({
            id:obj.id,
            investment_name: "Not Available",
            amount_invested: parseInt(obj.amount_invested).toLocaleString(),
            investment_date: dt.toLocaleString(),
            investment_type: obj.investment_type.name,
            status: obj.status === true ? "Active": "Closing",
        })
    })

    setInvs(newArr)
}

const handlePageClick=(data) => {
    dispatch(getInvestments(data.selected, userId, invStatus, invType))
}

    return (
        <>
            <div>
                {investmentsList?.investmentsLoading ? null : 
               
                <UserInvestmentsTable
                    columnsConfig={COLUMNS} 
                    dataConfig={invs}
                    setIsOpen={setIsOpen}
                    setInvId={setInvId}
                    invStatus={invStatus}
                    invType={invType}
                    setInvStatus={setInvStatus}
                    setInvType={setInvType}
                />                
                }  


            <div className="u-i-tab-bottom-pagination-container">
                <div>Showing: <span className="val">{pageCount}</span></div>
                {/* <div><Pagination /></div> */}
                <PaginationVerTwo pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
        </div>
        
        <InvestmentDetail open={isOpen} closeModal = {() => setIsOpen(false)} invId={invId} />

        </>
        
    )
}

export default UserInvestmentsTab
