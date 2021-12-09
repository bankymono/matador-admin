import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import './InterestRateComponent.css';

const sections = [
    {
        titleHead: 'daily interest rate', fieldText: 'months', name: 'daily',
        fields: [{ name: 'daily-input-one' }, { name: 'daily-input-two' },
        { name: 'daily-input-three' }, { name: 'daily-input-two' },
        { name: 'daily-input-one' }, { name: 'daily-input-two' }, { name: 'daily-input-one' }, { name: 'daily-input-two' }]
    },
    {
        titleHead: 'weekly interest rate', fieldText: 'months', name: 'weekly',
        fields: [{ name: 'weekly-input-one' }, { name: 'weekly-input-two' },
        { name: 'daily-input-three' }, { name: 'daily-input-two' },
        { name: 'daily-input-one' }, { name: 'daily-input-two' }, { name: 'daily-input-one' }, { name: 'daily-input-two' }]
    },
    {
        titleHead: 'monthly interest rate', fieldText: 'months', name: 'monthly',
        fields: [{ name: 'monthly-input-one' }, { name: 'monthly-input-two' },
        { name: 'daily-input-three' }, { name: 'daily-input-two' },
        { name: 'daily-input-one' }, { name: 'daily-input-two' }, { name: 'daily-input-one' }, { name: 'daily-input-two' }
        ]
    },
]
const InterestRateComponent = () => {

    const [rewardsData, setRewardsData] = useState({});
    const [loading, setLoading] = useState(false);
    const handleRewardsField = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setRewardsData(prev => {
            prev[`${name}`] = value;
            return { ...prev };
        })
    }
    const handleRewardsUpdate = () => {
        //Request api update to market period
        setLoading(true);

        setInterval(() => { (console.log(rewardsData)); setLoading(false) }, 5000);
    }
    return (
        <div className="create-admin-container">
            <div className="create-adm-nav-back">
                <Link className="create-back-arr-link" to="/settings">
                    <AiOutlineArrowLeft className="arr-back-icon" />
                </Link>
                <div>Interest Rate</div>
            </div>
            <div className="interest-wrapper">
                {
                    sections.map((section, index) => {
                        return <div>
                            <div className="sectionOne">
                                <div className="section-title">{section.titleHead}</div>
                                <div className="section-content">
                                    {section.fields.map((field, fieldIndex) =>
                                        <div className="first-field">
                                            <label>
                                                {fieldIndex === 0 ? <span>&nbsp;&nbsp;</span> : null}
                                                {fieldIndex === 1 ? <span>&nbsp;&nbsp;</span> : null}
                                                {(fieldIndex + 1) * 3} {section.fieldText} interest rate
                                            </label>
                                            <input
                                                name={section.name + fieldIndex}
                                                placeholder="Enter rate"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="section-divider"></div>

                        </div>
                    })
                }
                <div className="interest-btn">
                    <button className="update-adm-save-btn">Save Changes</button>
                </div>
            </div>

        </div>
    )
}

export default InterestRateComponent;