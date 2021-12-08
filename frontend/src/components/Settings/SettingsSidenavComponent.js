import React from 'react';
import admin_icon from '../../assets/icons/settings-admin.png';
import marketplace_icon from '../../assets/icons/marketplace.svg';
import reward_icon from '../../assets/icons/reward.svg';
import interest_icon from '../../assets/icons/interest.svg';
import update_password_icon from '../../assets/icons/settings-update-password.png';
import investment_icon from '../../assets/icons/settings-investments.png';

import { Link } from 'react-router-dom';

const SettingsSidenavComponent = () => {

    return (<div className="settings-buttons-tab-container">

        <Link to="/settings" className={"settings-tab-btn"}>
            <img src={investment_icon} alt="investment" />
            <div>Investments</div>
        </Link>

        <Link to="/settings/market-place" className="settings-tab-btn settings-tab-btn-active" >
            <img src={marketplace_icon} alt="market icon" />
            <div>Marketplace</div>
        </Link>

        <Link to="/settings/rewards" className="settings-tab-btn" >
            <img src={reward_icon} alt="reward icon" />
            <div>Rewards</div>
        </Link>

        <Link to="/settings/interest-rate" className="settings-tab-btn" >
            <img src={interest_icon} alt="interest icon" />
            <div>Interest Rate</div>
        </Link>


        <Link to="/settings/admin-manager" className="settings-tab-btn" >
            <img src={admin_icon} alt="admin" />
            <div>Admin Manager</div>
        </Link>

        <Link to="/settings/update-password" className="settings-tab-btn" >
            <img src={update_password_icon} alt="update password" />
            <div>Update Password</div>
        </Link>

    </div>)
}

export default SettingsSidenavComponent;