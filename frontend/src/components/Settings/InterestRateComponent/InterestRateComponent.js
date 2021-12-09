import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import './InterestRateComponent.css';

const sections = [
    {
        titleHead: 'daily interest rate', fieldText: 'months', name: 'daily',
        fields: [{ name: 'input-one' }, { name: 'input-two' },
        { name: 'input-three' }, { name: 'input-two' },
        { name: 'input-one' }, { name: 'input-two' }, { name: 'input-one' }, { name: 'input-two' }]
    },
    {
        titleHead: 'weekly interest rate', fieldText: 'months', name: 'weekly',
        fields: [{ name: 'input-one' }, { name: 'input-two' },
        { name: 'input-three' }, { name: 'input-two' },
        { name: 'input-one' }, { name: 'input-two' }, { name: 'input-one' }, { name: 'input-two' }]
    },
    {
        titleHead: 'monthly interest rate', fieldText: 'months', name: 'monthly',
        fields: [{ name: 'input-one' }, { name: 'input-two' },
        { name: 'input-three' }, { name: 'input-two' },
        { name: 'input-one' }, { name: 'input-two' }, { name: 'input-one' }, { name: 'input-two' }
        ]
    },
]
const InterestRateComponent = () => {

    const [interestDailyData, setInterestDailyData] = useState({});
    const [interestsWeeklyData, setInterestWeeklyData] = useState({});
    const [interestMonthlyData, setInterestMonthlyData] = useState({});
    const [loading, setLoading] = useState(false);
    const handleInterestsFields = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name.includes('daily')){
            populateDailyData(name, value);
        }else if(name.includes('monthly')){
            populateMonthlyData(name, value);
        }else if(name.includes('weekly')){
            populateWeeklyData(name, value);
        };
    }
    const populateDailyData=(name, value)=>{
        setInterestDailyData(prev => {
            prev[`${name}`] = value;
                return { ...prev };
        })
    }
    const populateWeeklyData=(name, value)=>{
        setInterestWeeklyData(prev => {
            prev[`${name}`] = value;
                return { ...prev };
        })
    }
    const populateMonthlyData=(name, value)=>{
        setInterestMonthlyData(prev => {
            prev[`${name}`] = value;
                return { ...prev };
        })
    }
    const handleSubmission = () => {
        //Request api update to market period
        setLoading(true);
        setInterval(() => {
            console.log({
                ...interestDailyData, 
                ...interestMonthlyData, 
                ...interestsWeeklyData
            }); setLoading(false)}, 5000);
        //  (console.log(rewardsData)); setLoading(false)
        clearInterval(); 

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
                        return <div key={index}>
                            <div className="sectionOne">
                                <div className="section-title">{section.titleHead}</div>
                                <div className="section-content">
                                    {section.fields.map((field, fieldIndex) =>
                                        <div className="first-field" key={fieldIndex}>
                                            <label>
                                                {fieldIndex === 0 ? <span>&nbsp;&nbsp;</span> : null}
                                                {fieldIndex === 1 ? <span>&nbsp;&nbsp;</span> : null}
                                                {(fieldIndex + 1) * 3} {section.fieldText} interest rate
                                            </label>
                                            <input
                                                name={section.name + '-input-' + fieldIndex}
                                                placeholder="Enter rate"
                                                onChange={handleInterestsFields}
                                                type="number"
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
                    <button className="update-adm-save-btn" onClick={handleSubmission}>{loading? <ClipLoader size={12} /> :'Save Changes'}</button>
                </div>
            </div>

        </div>
    )
}

export default InterestRateComponent;