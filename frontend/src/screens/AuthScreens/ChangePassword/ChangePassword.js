import React from 'react';
import './ChangePassword.css';

import matador_logo from '../../../assets/images/MATADOR-LOGO.png';

const ChangePassword = () => {
    return (
        <div className="change-password-container">
            <img className="auth-matador-logo"  src={matador_logo} alt="matador-logo" />
            <div className="change-password-card-wrapper">
                <div className="change-password-heading">Change Password</div>

                <div className="change-password-input-wrapper">
                    <div className="change-password-label">Password</div>
                    <input className="change-password-input" type="password" />
                </div>

                <div className="change-password-input-wrapper">
                    <div className="change-password-label">Confirm</div>
                    <input className="change-password-input" type="password" />
                </div>

                <button className="change-password-submit-button">Login</button>
            </div>
        </div>

    )
}

export default ChangePassword
