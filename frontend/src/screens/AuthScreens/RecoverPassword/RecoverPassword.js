import React from 'react';
import './RecoverPassword.css';

import matador_logo from '../../../assets/images/MATADOR-LOGO.png';

const RecoverPassword = () => {
    return (
        <div className="recover-password-container">
            <img className="auth-matador-logo"  src={matador_logo} alt="matador-logo" />
            <div className="recover-password-card-wrapper">
                <div className="change-password-heading">Recover Password</div>

                <div className="recover-password-input-wrapper">
                    <div className="recover-password-label">Email</div>
                    <input className="recover-password-input" type="text" />
                </div>

                <button className="recover-password-submit-button">Login</button>
            </div>
        </div>

    )
}


export default RecoverPassword
