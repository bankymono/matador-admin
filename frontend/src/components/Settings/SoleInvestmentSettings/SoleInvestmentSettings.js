import React from 'react';
import './SoleInvestmentSettings.css';

const SoleInvestmentSettings = () => {
    return (
        <div className="sole-investment-settings-container">

            <div className="sole-investment-settings-heading">Sole Investment</div>

            <div className="settings-form-input-item">
                <div className="settings-text-desc">Minimum investment amount</div>
                <div>
                    <input className='settings-input' />
                    <input className='settings-input' />
                </div>
            </div>

            <div className="settings-form-input-item">
                <div className="settings-text-desc">Interest rates</div>
                <div>
                    <input className='settings-input' />
                    <input className='settings-input' />
                </div>
            </div>

        </div>
    )
}

export default SoleInvestmentSettings
