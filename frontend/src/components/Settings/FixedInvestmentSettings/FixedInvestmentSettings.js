import React from 'react';
import './FixedInvestmentSettings.css';

const FixedInvestmentSettings = () => {
    return (
        <div className="fixed-investment-settings-container">

            <div className="fixed-investment-settings-heading">Fixed Investment</div>

            <div className="settings-form-input-item">
                <div>Minimum investment amount</div>
                <div>
                    <input className='settings-input' />
                    <input className='settings-input' />
                </div>
            </div>

            <div className="settings-form-input-item">
                <div>Interest rates</div>
                <div>
                    <input className='settings-input' />
                    <input className='settings-input' />
                </div>
            </div>

        </div>
    )
}

export default FixedInvestmentSettings
