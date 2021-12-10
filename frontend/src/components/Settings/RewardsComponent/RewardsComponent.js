import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { ClipLoader } from 'react-spinners'
import './RewardsComponent.css'


import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSettings, updateSettingsReward } from '../../../redux/actions/investmentsActions';

const RewardsComponent = () => {
    const [submissionLoading, setSubmissionLoading] = useState(false);
    const [showEmptyState, setShowEmptyState] = useState(true);
    const [rewardsData, setRewardsData] = useState({});

    const adminSettings = useSelector(state => state.adminSettings);
    const adminSettingsUpdate = useSelector(state=> state.adminSettingsUpdate)
    const {settingsFail, settingsData} = adminSettings;
    const {updateSuccess, updateError} = adminSettingsUpdate;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getSettings());
        if(settingsData){
            setRewardsData(settingsData.reward);
            setShowEmptyState(false);
        }else if(settingsFail){
            setShowEmptyState(false);
        }
        if(submissionLoading && updateSuccess){
            console.log('updated');
        }else if(submissionLoading && updateError){
            console.log('error');
        }
    }, [dispatch, submissionLoading])
    
    const handleRewardsField =(e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setRewardsData(prev => {
            prev[`${name}`] = parseInt(value);
            return {...prev};
        })
    }
    
    const handleRewardsUpdate = () =>{
        //Request api update to market period
        setSubmissionLoading(true);
        if(rewardsData){
            console.log(rewardsData);
            updateSettingsReward(rewardsData)

        }
        
        setInterval(setSubmissionLoading(false), 3000);
    }
    return (
        <div className="create-admin-container">
            <div className="create-adm-nav-back">
                <Link className="create-back-arr-link" to="/settings">
                    <AiOutlineArrowLeft className="arr-back-icon" />
                </Link>
                <div>Rewards</div>
            </div>

            {!showEmptyState && settingsData?
            <div className="rewards-wrapper">
                <div className="create-input-item">
                    <label>Point per referral</label>
                    <input 
                        type="text" 
                        name="point_per_referral" 
                        onChange={handleRewardsField} 
                        value={settingsData.reward.point_per_referral}
                    />
                </div>
                <div className="create-input-item">
                    <label>Point per investment</label>
                    <input 
                        type="text" 
                        name="point_per_investment" 
                        onChange={handleRewardsField} 
                        value={settingsData.reward.point_per_investment}
                    />
                </div>
                <div className="create-input-item">
                    <label>Point per gift purchase</label>
                    <input 
                        type="text" 
                        name="point_per_gift_purchase" 
                        onChange={handleRewardsField}
                        value={settingsData.reward.point_per_gift_purchase}
                    />
                </div>
                <div className="create-input-item">
                    <label>Minimum point withdrawable</label>
                    <input 
                        type="number"
                        name="min_point_withdrawable" 
                        value={settingsData.reward.min_point_withdrawable} 
                        onChange={handleRewardsField} />
                </div>
                <div className="create-input-item">
                    <label>Value per point</label>
                    <input 
                        type="text" 
                        name="value_per_point" 
                        onChange={handleRewardsField}
                        value={settingsData.reward.value_per_point}
                    />
                </div>
                <div className="create-input-item">
                    <label>Cent to Dollars value in percentage</label>
                    <input 
                        type="number" 
                        name="cent_to_dollars_value_in_percentage" 
                        value={settingsData.reward.cent_to_dollars_value_in_percentage} 
                        onChange={handleRewardsField} />
                </div>
                <div>
                <div className="create-input-item divide"></div>
                <div className="create-input-item">
                    <div className="marketplace-btn">
                        <button className="update-adm-save-btn" onClick={handleRewardsUpdate}>{submissionLoading? <span><ClipLoader size={12} /> please wait</span> :'Save Changes'}</button>
                    </div>

                </div>
                </div>
            </div>
            : <p>Please wait</p>}
        </div>
    )
}

export default RewardsComponent;