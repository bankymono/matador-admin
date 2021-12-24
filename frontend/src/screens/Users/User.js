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
const User = ({match, arrLinks}) => {
    const dispatch = useDispatch();
    const investorsList = useSelector(state => {
        return state.investorsList !== 'error fetching list'?
         [
        ...state.investorsList.investorsList
    ] : []});
    const [loading, setLoading] = useState(true);
    const [duplicatedList, setDuplicatedList] = useState();    
    useEffect(()=>{
        const getData =()=>{
            dispatch(getInvestors());
        }
        getData();
        setDuplicatedList(investorsList);
    }, []);
    const history = useHistory();
    const headList = ['investor name', 'Amount', 'Duration', 'Duration Left', 'Start Date'];
    const [currentPage, setCurrentPage] = useState("Investors")
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
                <div className="user-info-container">
                    {investorsList.length > 0?
                    <GeneralTable 
                        headList={headList} 
                        bodyList={investorsList} 
                        handleCellClick={handleCellClick} 
                        showTabControls={false}
                    />
                    : <BeatLoader loading={true} color="#03A678" />
                    }
                </div>
            </div>
        </div>
    )
}

export default User
