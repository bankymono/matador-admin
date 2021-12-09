import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners'
import './UpdatePassword.css';

const UpdatePassword = () => {
    const [loading, setLoading] = useState(false);
    const [passwordData, setPasswordData] = useState({});
    const handleSubmission =()=>{
        setLoading(true);
        console.log(passwordData);
        setLoading(false);
    }
    const handlePasswordDataChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setPasswordData(prev => {
            prev[`${name}`] = value;
                return { ...prev };
        })
    }
    return (
        <div className="create-admin-container">
            <div className="create-adm-nav-back">
                <Link className="create-back-arr-link" to="/settings">
                    <AiOutlineArrowLeft className="arr-back-icon" />
                </Link>
                <div>Update Password</div>
            </div>
            <div className="update-password-wrapper">
                <div className="section-content">
                    <div className="password-field">
                        <label>Current Password</label>
                        <input name="oldPassword" placeholder="Enter current password" onChange={handlePasswordDataChange}  />
                    </div>
                    <div className="password-field">
                        <label>New Password</label>
                        <input name="newPassword" placeholder="Enter new password" onChange={handlePasswordDataChange} />
                    </div>
                    <div className="password-field">
                        <label>Confirm New Password</label>
                        <input name="confirmNewPassword" placeholder="Confirm new password" onChange={handlePasswordDataChange} />
                    </div>
                </div>
                <div className="section-divider"></div>
                <div className="interest-btn">
                    <button className="update-adm-save-btn" onClick={handleSubmission} >{loading ? <ClipLoader size={12} /> : 'Save Changes'}</button>
                </div>
            </div>

        </div>
    )
}

export default UpdatePassword
