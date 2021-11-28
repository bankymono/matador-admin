import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import GeneralTable from '../../components/GeneralTable/GeneralTable';
import './User.css';



const User = ({match, arrLinks}) => {
    const headList = ['investor name', 'Amount', 'Duration', 'Duration Left', 'Start Date'];
    const bodyList = [
        {name: 'Ahmed Ola', amount: '#36,353,333', duration: 'six years', durationLeft: '10 years', startDate: '23/20/2018'},
        {name: 'Banky Mono', amount: '#36,353,333', duration: 'six years', durationLeft: '10 years', startDate: '23/20/2018'},
        {name: 'Ayo Ola', amount: '#36,353,333', duration: 'six years', durationLeft: '10 years', startDate: '23/20/2018'},
    ]
    const [currentPage, setCurrentPage] = useState("Investors")
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} />
                <div className="user-info-container">
                    <GeneralTable headList={headList} bodyList={bodyList} />
                </div>
            </div>
        </div>
    )
}

export default User
