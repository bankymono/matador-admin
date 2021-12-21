import React from 'react';
import './UserInvestmentModal.css';
import close_icon from '../../assets/icons/close-icon.png';
import user_img from '../../assets/images/Male_dp2.png';
const UserInvestmentModal = ({ user, closeModal }) => {
    return (
        <div className="user-invest-method-container">

            <div className='user-invest-wrapper'>
                <div className="close-holder" onClick={()=>closeModal()}>
                    <img src={close_icon} alt="close" />
                </div>
                <div className='user-invest-details'>
                    <div className='user-details'>
                        <h3 className='name'>{user.body.data_one}</h3>
                        <p className='title'>Amount Invested</p>
                        <h3 className='amount'>{user.body.data_two}</h3>
                    </div>
                    <div className='image-holder'>
                        <img src={user_img} alt="user_image" />
                    </div>
                </div>
                <div className='user-invest-section-one'>
                    <div className='flex-holder'>
                        <p className='title'>Equity Type</p>
                        <p className='eq-type'>{user.body.data_five}</p>
                    </div>
                    <div className='flex-holder'>
                        <p className='title'>Project Name</p>
                        <p>{user.body.data_six}</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='user-invest-section-one'>
                    <div className='flex-holder'>
                        <p className='title'>Number of {user.body.data_five}</p>
                        <p>{user.body.data_four}</p>
                    </div>
                    <div className='flex-holder'>
                        <p className='title'>Quarterly Income</p>
                        <p>{user.body.data_seven}</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='user-invest-section-one'>
                    <div className='flex-holder'>
                        <p className='title'>Investment Date</p>
                        <p>{user.body.data_three}</p>
                    </div>
                    <div className='flex-holder'>
                        <p className='title'>Fraction Value</p>
                        <p>{user.body.data_eight}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInvestmentModal;