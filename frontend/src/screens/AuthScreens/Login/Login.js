import React from 'react';
import {Link} from 'react-router-dom'
import './Login.css';
import matador_logo from '../../../assets/images/MATADOR-LOGO.png';

const Login = () => {
    return (
        <div className="login-container">
            <img className="auth-matador-logo"  src={matador_logo} alt="matador-logo" />
            <div className="login-card-wrapper">
                <div className="login-heading">Sign in</div>

                <div className="login-input-wrapper">
                    <div className="login-label">Email Address</div>
                    <input className="login-input" type="text" />
                </div>

                <div className="login-input-wrapper">
                    <div className="login-label">Password</div>
                    <input className="login-input" type="password" />
                    <Link className="login-recover-link" to="/recover-password"><div className="login-forgot-password">forgot password?</div></Link>
                </div>


                <Link to="/dashboard"><button className="login-submit-button">Login</button></Link>
            </div>
        </div>
    )
}

export default Login
