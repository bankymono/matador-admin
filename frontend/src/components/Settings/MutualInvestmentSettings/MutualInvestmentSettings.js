import React from 'react';
import './MutualInvestmentSettings.css';

const MutualInvestmentSettings = () => {
    return (
        <div className="mutual-investment-settings-container">

            <div className="mutual-investment-settings-heading">Mutual Investment</div>

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

export default MutualInvestmentSettings
