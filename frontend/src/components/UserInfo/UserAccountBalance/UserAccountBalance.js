
import React, { useEffect, useState } from 'react'
import './UserAccountBalance.css'
import arrow_up_icon from '../../../assets/icons/arrow-up.png'
import BlockUserModal from '../../modals/BlockUserModal/BlockUserModal'
import FlagUserAccount from '../../modals/FlagUserAccount/FlagUserAccount'

const UserAccountBalance = ({investmentData}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenFlag, setIsOpenFlag] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
        setIsOpenFlag(false)
    }

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


            <div className='user-account-balance-container'>
                <div className="user-account-balance-heading-container">
                    <div className="user-account-balance-heading">Line of Credit</div>
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

            <div className='user-account-balance-controls'>
                <div className='text'>
                    <div>Account</div> 
                    <div>Moderation</div>
                </div>

                <div className='control-buttons'>
                    <button onClick={() => setIsOpenFlag(true)} className='top-btn'>Flag User Account</button>
                    <button onClick={() => setIsOpen(true)} className='bottom-btn'>Block User Account</button>
                </div>
            </div>

            <BlockUserModal setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} />
            <FlagUserAccount setIsOpen={setIsOpenFlag} open={isOpenFlag} onClose={closeModal} />
        </div>
    )
}

export default UserAccountBalance
