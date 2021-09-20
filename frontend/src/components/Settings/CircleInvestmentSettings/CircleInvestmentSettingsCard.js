import React from 'react';
import './CircleInvestmentSettings.css';

const CircleInvestmentSettings = () => {
    return (
        <div className="circle-investment-settings-container">

            <div className="circle-investment-settings-heading">Circle Investment</div>

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

export default CircleInvestmentSettings
