import React, { useState } from 'react';
import './UserDetails.css';
import profile_img from '../../../assets/images/profile-image-random-2.jpg';
import VIDDetails from '../../modals/VIDDetails/VIDDetails';

const UserDetails = ({userInfo}) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () =>{        
        // history.push(`/investments/fixed-income/sole`)
        setIsOpen(false);
    }
    console.log(userInfo, 'e,eeee')
    return (
        <div className="user-details-container">

            <div className="profile-image-container">
                <img className="profile-image" src={profile_img} alt="profile" />
            </div>

            <div className="user-details-wrapper">
                
                <div className="user-details">

                    <div className="user-details-item">
                        <div className="user-details-item-cell">
                            <div className="detail-type">Legal First name</div>
                            <div className="detail-text">{userInfo.first_name}</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Legal Last name</div>
                            <div className="detail-text">{userInfo.last_name}</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Legal Middle name</div>
                            <div className="detail-text">{userInfo.middle_name}</div>
                        </div>
                    </div>

                    <div className="user-details-item">
                        <div className="user-details-item-cell">
                            <div className="detail-type">Username</div>
                            <div className="detail-text">{userInfo.username}</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Country</div>
                            <div className="detail-text">Nigeria</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Gender</div>
                            <div className="detail-text">{userInfo.gender || "Male"}</div>
                        </div>
                    </div>

                    <div className="user-details-item">
                        <div className="user-details-item-cell">
                            <div className="detail-type">Email Address</div>
                            <div className="detail-text">{userInfo.email}</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Date of birth</div>
                            <div className="detail-text">{userInfo.date_of_birth}</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Phone Number</div>
                            <div className="detail-text">{userInfo.phone}</div>
                        </div>
                    </div>

                    <div className="user-details-item">
                        <div className="user-details-item-cell">
                            <div className="detail-type">BVN</div>
                            <div className="detail-text">{userInfo.bvn || "00000000000"}</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">Home Address</div>
                            <div className="detail-text">{userInfo.address}</div>
                        </div>
                        <div className="user-details-item-cell">
                            <div className="detail-type">ID Document</div>
                            <div className="detail-text">
                                <span>
                                    {userInfo?.verification_data?.document_type || "Driver's License"}
                                </span>
                                <button onClick={() => setIsOpen(true)}>View</button>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className='user-detail-bottom-container'>
                    <div className="bank-card-heading">PERSONAL BANK DETAILS</div>

                    <div className="user-bank-card-details">
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

                        <div className='user-device-info-container'>                        
                            <div className='device-info-with-button'>
                                <div className='device-info'>
                                    <div className='headn'>Device Login Activities</div>
                                    <div className='info'>
                                        <div className='desc'>Current Active Device</div>
                                        <div className='val'>iPhone 11 Pro Max</div>
                                    </div>
                                </div>
                                <button>View</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <VIDDetails verId={userInfo?.verification_data?.id} setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} />
        </div>
    )
}

export default UserDetails
