import React, { useState } from 'react';
import './AccountTypeCard.css';
import Switch from '@mui/material/Switch';
import debit_card_icon from '../../../assets/images/card-placeholder-icon.png'
import paystack_icon from '../../../assets/images/paystack.png'
import bank_card_icon from '../../../assets/images/bank-placeholder-icon.png'
import EditDepositMethodModal from '../../modals/AccountsModal/EditDepositMethodModal';

const AccountTypeCard = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () =>{
        setIsOpen(false);
    }

    return (
        <div className="acc-type-container">
            <div className="acc-type-content-wrapper">
                <Switch className="acc-type-switch" defaultChecked />
                <div className="acc-type-image-container">
                    <img className="acc-type-img" src={debit_card_icon} alt="icon" />
                    <div className="acc-type-name">{data}</div>
                </div>

                <div className="acc-type-desc">
                    <div className="acc-type-desc-heading">Description</div>
                    <div className="acc-type-desc-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore.
                    </div>
                </div>

                <div className="acc-type-powered-by">
                    <span>Powered by</span>
                    <img className="" src={paystack_icon} alt="icon" />
                </div>

                <button onClick={() => setIsOpen(true)} className="acc-type-card-edit-btn">Edit</button>
            </div>
            <EditDepositMethodModal open={isOpen} onClose={closeModal} />
        </div>
    )
}

export default AccountTypeCard
