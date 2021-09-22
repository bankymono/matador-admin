import React from 'react';
import './TargetInvestmentSettings.css';

const TargetInvestmentSettings = () => {
    return (
        <div className="target-investment-settings-container">

            <div className="target-investment-settings-heading">Target Investment</div>

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

export default TargetInvestmentSettings
