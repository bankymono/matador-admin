import React, {useEffect, useMemo, useState} from 'react';
import './UserTransactionsTab.css';
import search_icon from '../../../assets/icons/search-icon-img.png'
// import search_icon from '../../../assets/icons/search-icon-img.png'
// import Pagination from '../../../Pagination/Pagination';
// import MoreOptionsMenu from '../../../MoreOptionsMenu/MoreOptionsMenu';
import { useTable }from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, COLUMNS2} from './columns';
// import ReusableTable from '../../../ReusableTable/ReusableTable';
import Pagination from '../../Pagination/Pagination';
import ReusableTable from '../../ReusableTable/ReusableTable';
import SoleFI from '../../modals/SoleFIModal/SoleFI';
import { useHistory } from 'react-router-dom';
import UserTransactionsTable from '../UserTransactionsTable/UserTransactionsTable';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../../redux/actions/transactionsActions';
import PaginationVerTwo from '../../PaginationVerTwo/PaginationVerTwo';
import TransactionsDetail from '../../modals/TransactionsDetail/TransactionsDetail';

const UserTransactionsTab = ({ userId, setTotalTxnCount}) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory()

    const [txnStatus, setTxnStatus] = useState('all')
    const [txnType, setTxnType] = useState('all')
    // const [txnStatus, setTxnStatus] = useState('all')

    const [txns, setTxns] = useState([]);
    const [txnId, setTxnId] = useState('');
    const [pageCount, setPageCount] = useState(0);

    const dispatch = useDispatch();
    const transactionsList = useSelector(state => state.transactionsList);

    useEffect(()=>{
        dispatch(getTransactions(0,userId, txnStatus,txnType))
    },[dispatch, userId,txnStatus,txnType]);

    useEffect(()=>{

        if(transactionsList.transactionsLoading === false && !transactionsList.transactionsError){
            constructObject(transactionsList.transactions);
            setTotalTxnCount(transactionsList.transactions.count)
        }
    },[transactionsList, setTotalTxnCount])

    const constructObject = (receivedObj) => {

    setPageCount(receivedObj.count)

    let newArr = receivedObj.results.map(obj => {
        let dt = new Date(obj.created_at)
        return({
            id:obj.id,
            transaction_name: "Not Available",
            amount_transacted: obj.amount.toLocaleString(),
            transaction_date: dt.toLocaleString(),
            transaction_type: obj.transaction_type,
            status: obj.status,
        })
    })

    setTxns(newArr)
}

const handlePageClick=(data) => {
    dispatch(getTransactions(data.selected, userId, txnStatus, txnType))
}

    return (
        <>
            <div>
                {transactionsList?.transactionsLoading ? null : 
               
                <UserTransactionsTable
                    columnsConfig={COLUMNS} 
                    dataConfig={txns}
                    setIsOpen={setIsOpen}
                    setTxnId={setTxnId}
                    txnStatus={txnStatus}
                    txnType={txnType}
                    setTxnStatus={setTxnStatus}
                    setTxnType={setTxnType}
                />                
                }  


            <div className="u-txns-tab-bottom-pagination-container">
                <div>Showing: <span className="val">{pageCount}</span></div>
                {/* <div><Pagination /></div> */}
                <PaginationVerTwo pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
        </div>

        <TransactionsDetail open={isOpen} closeModal = {() => setIsOpen(false)} txnId={txnId} />
        </>
        
    )
}

export default UserTransactionsTab
