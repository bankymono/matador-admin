import React from 'react';
import './UserDetails.css';
import profile_img from '../../../assets/images/profile-image-random-2.jpg';

const UserDetails = ({userInfo}) => {
    return (
        <div className="user-details-container">

            <div className="profile-image-container">
                <img className="profile-image" src={profile_img} alt="profile" />
            </div>

            <div className="user-details-wrapper">
                
                <div className="user-details">

                    <div className="user-details-item">
                        <div className="user-details-item-cell">
                            <div className="detail-type">First name</div>
                            <div className="detail-text">{userInfo.firstname}</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Last name</div>
                            <div className="detail-text">{userInfo.lastname}</div>
                        </div>
                    </div>

                    <div className="user-details-item">
                        <div className="user-details-item-cell">
                            <div className="detail-type">Nick name</div>
                            <div className="detail-text">{userInfo.nick}</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Phone number</div>
                            <div className="detail-text">{userInfo.number}</div>
                        </div>
                    </div>

                    <div className="user-details-item">
                        <div className="user-details-item-cell">
                            <div className="detail-type">Email Address</div>
                            <div className="detail-text">email@email.com</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Date of birth</div>
                            <div className="detail-text">12/12/2000</div>
                        </div>
                    </div>

                    <div className="user-details-item">
                        <div className="user-details-item-cell">
                            <div className="detail-type">BVN</div>
                            <div className="detail-text">000000000000</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Address</div>
                            <div className="detail-text">213 Street name road, Lekki Phase 1, Lagos, Nigeria</div>
                        </div>
                    </div>    
                </div>

                <div className="user-bank-card-details">
                    <div className="bank-card-heading">Account</div>
                    <div className="user-details-bank-card-container">
                        <div className="user-details-bank-card">
                            <div>Zenith bank</div>
                            <div>000000000000</div>
                        </div>
                        <div className="user-details-bank-card">
                            <div>Zenith bank</div>
                            <div>000000000000</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserDetails
