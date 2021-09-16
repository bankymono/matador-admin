import React from 'react';
import UserAccountBalance from '../../components/UserInfo/UserAccountBalance/UserAccountBalance';
import UserDetails from '../../components/UserInfo/UserDetails/UserDetails';
import UserInvestmentAndTransactionTab from '../../components/UserInfo/UserInvestmentAndTransactionTab/UserInvestmentAndTransactionTab';
import './UserInfo.css';

const UserInfo = () => {
    return (
        <div className="user-info-container">
            <UserDetails />
            <UserAccountBalance />
            <UserInvestmentAndTransactionTab />
        </div>
    )
}

export default UserInfo
