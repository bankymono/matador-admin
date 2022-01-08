import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import GeneralTable from '../../components/GeneralTable/GeneralTable';
import './User.css';

import { useHistory } from 'react-router-dom';
import {getInvestors} from '../../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import UsersTable from '../../components/Users/UsersTable/UsersTable'
// import ReusableTable from '../components/ReusableTable/ReusableTable';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './columns';
import PaginationVerTwo from '../../components/PaginationVerTwo/PaginationVerTwo';

const User = ({match, arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Investors");

    const dispatch = useDispatch();
    const investorsList = useSelector(state => state.investorsList);
    const [filterOpt, setFilterOpt] = useState('all');
    const [loading, setLoading] = useState(true);
    const [duplicatedList, setDuplicatedList] = useState();    

    const [investors, setInvestors] = useState([]);
    const [investorId, setInvestorId] = useState('');
    const [pageCount, setPageCount] = useState(0);

    
    // useEffect(()=>{
    //     const getData =()=>{
    //         dispatch(getInvestors());
    //     }
    //     getData();


    // }, [dispatch]);

    // useEffect(()=>{
    //     console.log(investorsList.investors, 'ayyyya')
    //     setDuplicatedList(investorsList.investors);
    // }, [investorsList]);

    const handleClick = (id) => {
        history.push(`/investors/${id}`)
    }


    useEffect(()=>{
        dispatch(getInvestors(0, filterOpt))
    },[dispatch, filterOpt])

    useEffect(()=>{

        if(investorsList.loading === false && !investorsList.error){
            constructObject(investorsList.investors);
            // console.log('got here')
        }
    },[investorsList])

    const constructObject = (receivedObj) => {
        // console.log('received obj', receivedObj)
        setPageCount(receivedObj.data.count)

    let newArr = receivedObj.data.results.map(obj => {
        let dt = new Date(obj.created_at)
        // console.log('verr statu',obj.verification_status)
        return({
            id:obj.user_id,
            full_name: obj.first_name + " " + obj.last_name,
            phone_number: obj.phone_number,
            number_of_investments: obj.number_of_investments,
            total_asset: obj.total_asset.toLocaleString(),
            verification_status: obj.verification_status === true ? "Verified" : "Not Verified"
        })
    })

    setInvestors(newArr)
}

const handlePageClick=(data) => {
    dispatch(getInvestors(data.selected, filterOpt))
}

    const history = useHistory();
    const headList = ['Full Name', 'Phone Number', 'Number of Investments', 'Total Assets', 'Verification Status'];
    
    const handleCellClick=(emittedData)=>{
        history.push(`/investors/info?investorId=${emittedData.id}`);
        // redirect to userInfo;
    }
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} />
                <div className="user-list-container">
                    {investors?.length > 0?
                    <>
                    {/* <GeneralTable 
                        headList={headList} 
                        bodyList={duplicatedList} 
                        handleCellClick={handleCellClick} 
                        showTabControls={false}
                    /> */}
                    <UsersTable
                        columnsConfig={COLUMNS} 
                        dataConfig={investors} 
                        handleClick={handleClick}
                        filterOpt={filterOpt}
                        setFilterOpt={setFilterOpt}
                    />
                    </>
                    : <BeatLoader loading={true} color="#03A678" />
                    }
                    <div className="user-transactions-bottom-pagination-container">
                        <div>Showing: <span className="val">{pageCount > 10? Math.ceil(pageCount%10): pageCount}</span></div>
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
        </div>
    )
}

export default User
