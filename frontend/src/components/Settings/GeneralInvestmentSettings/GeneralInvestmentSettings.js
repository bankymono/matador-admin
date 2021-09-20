import React from 'react';
import './GeneralInvestmentSettings.css';

const GeneralInvestmentSettingsCard = () => {
    return (
        <div className="general-investment-settings-container">
            <div className="settings-form-input-item">
                <div>Matador offer on investment (example: 10% of the current value)</div>
                <div>
                    <input className='settings-input' />
                    <input className='settings-input' />
                </div>
            </div>

            <div className="settings-form-input-item">
                <div>Maximum period in which recurring payment fails</div>
                <div>
                    <input className='settings-input' />
                    <input className='settings-input' />
                </div>
            </div>

            <div className="settings-form-input-item">
                <div>Equity investment percentage returns</div>
                <div>
                    <input className='settings-input' />
                    <input className='settings-input' />
                </div>
            </div>
            
        </div>
    )
}

export default GeneralInvestmentSettingsCard
