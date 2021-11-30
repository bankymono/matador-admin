import React, { useState } from 'react';
import CurrencyOptionsBtn from '../../components/CurrencyOptionsBtn/CurrencyOptionsBtn';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import UserAccountBalance from '../../components/UserInfo/UserAccountBalance/UserAccountBalance';
import UserDetails from '../../components/UserInfo/UserDetails/UserDetails';
import UserInvestmentAndTransactionTab from '../../components/UserInfo/UserInvestmentAndTransactionTab/UserInvestmentAndTransactionTab';
import './UserInfo.css';

import {useHistory} from 'react-router-dom'


const UserInfo = ({match, arrLinks}) => {
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("Investors")
    const getId =()=>{
        let id = history.location.search.split('=')[1];
        return id;
    }
    console.log(getId());

    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} rightButtons={<CurrencyOptionsBtn />}/>
                <div className="user-info-container">
                    <UserDetails />
                    <UserAccountBalance />
                    <UserInvestmentAndTransactionTab />
                </div>
            </div>
        </div>
    )
}

export default UserInfo
