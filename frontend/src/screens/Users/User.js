import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import UserInvestmentsInfoTab from '../../components/UserInfo/UserInvestmentsInfoTab/UserInvestmentsInfoTab';
import './User.css';



const User = ({match, arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Investors")
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} />
                <div className="user-info-container">
                    <UserInvestmentsInfoTab />
                </div>
            </div>
        </div>
    )
}

export default User
