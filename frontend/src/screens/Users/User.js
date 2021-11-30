import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import GeneralTable from '../../components/GeneralTable/GeneralTable';
import './User.css';

import { useHistory } from 'react-router-dom';

const User = ({match, arrLinks}) => {
    const history = useHistory();
    const headList = ['investor name', 'Amount', 'Duration', 'Duration Left', 'Start Date'];
    const bodyList = [
        {name: 'Ahmed Ola', id: 1, amount: '#36,353,333', duration: 'six years', durationLeft: '10 years', startDate: '23/20/2018'},
        {name: 'Banky Mono', id: 2, amount: '#36,353,333', duration: 'six years', durationLeft: '10 years', startDate: '23/20/2018'},
        {name: 'Ayo Ola', id: 3, amount: '#36,353,333', duration: 'six years', durationLeft: '10 years', startDate: '23/20/2018'},
        {name: 'Mac Dona', id: 4, amount: '#36,353,333', duration: 'six years', durationLeft: '10 years', startDate: '23/20/2018'},
        {name: 'Philip Miles', id: 5, amount: '#36,353,333', duration: 'six years', durationLeft: '10 years', startDate: '23/20/2018'},
        {name: 'Ben frank', id: 6, amount: '#36,353,333', duration: 'six years', durationLeft: '10 years', startDate: '23/20/2018'},

    ]
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
                    <GeneralTable headList={headList} bodyList={bodyList} handleCellClick={handleCellClick} />
                </div>
            </div>
        </div>
    )
}

export default User
