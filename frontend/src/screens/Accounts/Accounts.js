import React, { useState } from 'react'
import AccountTypeCard from '../../components/Accounts/AccountTypeCard/AccountTypeCard';
import CreateDepositMethodButton from '../../components/Accounts/CreateDepositMethodButton/CreateDepositMethodButton';
import Header from '../../components/Header/Header';
import CreateDepositMethodModal from '../../components/modals/AccountsModal/CreateDepositMethodModal';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './Accounts.css';


const Accounts = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Accounts");
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () =>{
        setIsOpen(false);
    }

    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} rightButtons={<CreateDepositMethodButton setIsOpen={setIsOpen} />} />
                <div className="accounts-container">
                    <div className="accounts-wrapper">
                        <div className="accounts-wrapper-inner">
                        <AccountTypeCard data="Debit Card" />
                        <AccountTypeCard data="Bank Account" />
                        </div>
                    </div>
                </div>
                <CreateDepositMethodModal open={isOpen} onClose={closeModal} />
            </div>
        </div>
    )
}

export default Accounts
