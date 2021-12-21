import React from 'react';
import './UserInvestmentModal.css';
import close_icon from '../../assets/icons/close-icon.png';

const UserInvestmentModal = ({ user, closeModal }) => {
    return (
        <div className="user-invest-method-container">

            <div className='user-invest-wrapper'>
                <div className="close-holder">
                    <img src={close_icon} alt="close" onClick={() => closeModal()} />
                </div>
                <div className='user-invest-details'>
                    <div className='user-details'>
                        Name
                    </div>
                    <div className='image-holder'>
                        <img src={close_icon} alt="user_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInvestmentModal;