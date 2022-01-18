import React from 'react';
import './UserInvestmentModal.css';
import ReactDom from 'react-dom';
import close_icon from '../../assets/icons/close-icon.png';
import user_img from '../../assets/images/Male_dp2.png';
const UserInvestmentModal = ({ user, open, closeModal }) => {
    if(!open) return null;
    return ReactDom.createPortal(
        <>
        <div className="user-invest-method-container">

            <div className='user-invest-wrapper'>
                <div className="close-holder" onClick={()=>closeModal()}>
                    <img src={close_icon} alt="close" />
                </div>
                <div className='user-invest-details'>
                    <div className='user-details'>
                        <h3 className='name'>{user.full_name}</h3>
                        <p className='title'>Amount Invested</p>
                        <h3 className='amount'>{user.amount_invested}</h3>
                    </div>
                    <div className='image-holder'>
                        <img src={user_img} alt="user_image" />
                    </div>
                </div>
                <div className='user-invest-section-one'>
                    <div className='flex-holder'>
                        <p className='title'>Equity Type</p>
                        <p className='eq-type'>{user.equity_type}</p>
                    </div>
                    <div className='flex-holder'>
                        <p className='title'>Project Name</p>
                        <p>{user.project_name}</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='user-invest-section-one'>
                    <div className='flex-holder'>
                        <p className='title'>Number of Fractions</p>
                        <p>{user.number_of_fractions}</p>
                    </div>
                    <div className='flex-holder'>
                        <p className='title'>Quarterly Income</p>
                        <p>{user.quarterly_income}</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='user-invest-section-one'>
                    <div className='flex-holder'>
                        <p className='title'>Investment Date</p>
                        <p>{user.investment_date}</p>
                    </div>
                    <div className='flex-holder'>
                        <p className='title'>Fraction Value</p>
                        <p>{user.fraction_value}</p>
                    </div>
                </div>
            </div>
        </div>
        </>,
    document.getElementById('modal-portal')
    )
}

export default UserInvestmentModal;