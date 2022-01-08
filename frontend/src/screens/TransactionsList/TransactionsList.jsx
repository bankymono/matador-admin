import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './TransactionsList.css'
import MoreOptionsMenu from '../../components/MoreOptionsMenu/MoreOptionsMenu'


import Pagination from '../../components/Pagination/Pagination';   
import SideBar from '../../components/SideBar/SideBar';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import SubNav from '../../components/SubNav/SubNav';
import TransactionsListTable from '../../components/TransactionsList/TransactionsListTable/TransactionsListTable';

import {COLUMNS, COLUMNS2} from './columns';
import MOCK_DATA from './MOCK_DATA.json';
import TransactionsDetail from '../../components/modals/TransactionsDetail/TransactionsDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../redux/actions/transactionsActions';
import PaginationVerTwo from '../../components/PaginationVerTwo/PaginationVerTwo';

const NewInvBtn = () => {
    return (
        <div className="txn-lists-new-btn-container">
            <button className="txn-lists-new-btn">New Investment</button>
            <MoreOptionsMenu />
        </div>
    )
}

const TransactionsList = ({match, arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Transactions");
    const [isOpen, setIsOpen] = useState(false);

    const [txns, setTxns] = useState([]);
    const [txnId, setTxnId] = useState('');

    const [pageCount, setPageCount] = useState(0);

    const dispatch = useDispatch();
    const transactionsList = useSelector(state => state.transactionsList);

    useEffect(()=>{
        dispatch(getTransactions())
    },[dispatch])
    

    useEffect(()=>{

        if(transactionsList.transactionsLoading === false && !transactionsList.transactionsError){
            constructObject(transactionsList.transactions);
        }
    },[transactionsList])

        const constructObject = (receivedObj) => {

            setPageCount(receivedObj.count)

        let newArr = receivedObj.results.map(obj => {
            let dt = new Date(obj.created_at)
            return({
                id:obj.id,
                name: obj.user.first_name + " " + obj.user.last_name,
                amount: obj.amount.toLocaleString(),
                transaction_action_type: obj.transaction_action_type === null ? "Not available" : obj.transaction_action_type,
                description: obj.description,
                created_at: dt.toLocaleString()
            })
        })

        setTxns(newArr)
    }

    const handlePageClick=(data) => {
        dispatch(getTransactions(data.selected))
    }


    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} rightButtons={<NewInvBtn />} />

                <div className="transactions-list-container">

                    <TransactionsListTable 
                        columnsConfig={COLUMNS2} 
                        dataConfig={txns} 
                        setIsOpen={setIsOpen}
                        setTxnId={setTxnId}
                    />

                    <div className="user-transactions-bottom-pagination-container">
                        <div>Showing: <span className="val">{Math.ceil(pageCount/10)}</span></div>
                        {/* <div><Pagination /></div> */}
                        {/* <div><ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={pageCount/10}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination-container'}
                            pageClassName={'pagination-item-li'}
                            pageLinkClassName={'pagination-item-li-link'}
                            previousClassName={'pagination-item-li'}
                            previousLinkClassName={'pagination-item-li-link'}
                            nextClassName={'pagination-item-li'}
                            nextLinkClassName={'pagination-item-li-link'}
                            breakClassName={'pagination-item-li'}
                            breakLinkClassName={'pagination-item-li-link'}
                            activeClassName={'pagi-active'}
                        /></div> */}
                        <PaginationVerTwo pageCount={pageCount} handlePageClick={handlePageClick} />
                    </div>
                </div>
            </div>

            <TransactionsDetail open={isOpen} closeModal = {() => setIsOpen(false)} txnId={txnId} />
        </div>
    )
}

export default TransactionsList
