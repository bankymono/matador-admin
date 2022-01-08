import React from 'react'
import './UserAccountBalance.css'
import arrow_up_icon from '../../../assets/icons/arrow-up.png'

const UserAccountBalance = ({investmentData}) => {
    return (
        <div className="user-account-balance-top-item">
            <div className='user-account-balance-container'>
                <div className="user-account-balance-heading-container">
                    <div className="user-account-balance-heading">Total Asset</div>
                </div>

                <div>
                    <div className="user-account-balance-value">₦ {investmentData.total_asset}<sup>.00</sup></div>
                    <div className="user-account-balance-growth-rate-container">
                        {/* <div className="user-account-balance-grwth-percent increase-color">
                            <img className="arr-up-icon" src={arrow_up_icon} alt="arrow up"/>
                            <div>5.7%</div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='user-account-balance-container'>
                <div className="user-account-balance-heading-container">
                    <div className="user-account-balance-heading">Account Balance</div>
                </div>

                <div>
                    <div className="user-account-balance-value">₦ {investmentData.account_balance}<sup>.00</sup></div>
                    <div className="user-account-balance-growth-rate-container">
                        {/* <div className="user-account-balance-grwth-percent increase-color">
                            <img className="arr-up-icon" src={arrow_up_icon} alt="arrow up"/>
                            <div>5.7%</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAccountBalance
