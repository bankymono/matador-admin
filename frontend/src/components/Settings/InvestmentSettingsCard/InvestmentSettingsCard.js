import React from 'react';
import './InvestmentSettingsCard.css';

const InvestmentSettingsCard = () => {
    return (
        <div className="investment-settings-container">

            <div className="investment-settings-heading">Investment</div>

            <div className="settings-form-input-item">
                <div className="settings-text-desc">Maximum amount withdrawable without verification</div>
                <div>
                    <input className='settings-input' />
                    <input className='settings-input' />
                </div>
            </div>

            <div className="settings-form-input-item">
                <div className="settings-text-desc">Matador minimum investment amount</div>
                <div>
                    <input className='settings-input' />
                    <input className='settings-input' />
                </div>
            </div>

            <div className="settings-form-input-item">
                <div className="settings-text-desc">Set interest rates for each type of investment</div>
                <div>
                    <input className='settings-input' />
                    <input className='settings-input' />
                </div>
            </div>
            
        </div>
    )
}

export default InvestmentSettingsCard
