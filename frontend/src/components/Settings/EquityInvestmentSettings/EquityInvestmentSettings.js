import React from 'react';
import './EquityInvestmentSettings.css';

const EquityInvestmentSettings = () => {
    return (
        <div className="equity-investment-settings-container">

            <div className="equity-investment-settings-heading">Equity Investment</div>

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

export default EquityInvestmentSettings
