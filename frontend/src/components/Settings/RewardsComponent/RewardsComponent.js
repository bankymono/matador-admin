import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BeatLoader, ClipLoader } from 'react-spinners'
import './RewardsComponent.css'
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSettings, updateSettingsReward } from '../../../redux/actions/investmentsActions';

const RewardsComponent = () => {
    const adminSettings = useSelector(state => state.adminSettings);
    const [submissionLoading, setSubmissionLoading] = useState(false);
    const [showEmptyState, setShowEmptyState] = useState(true);
    const [rewardsData, setRewardsData] = useState(null);

    const adminRewardSettingsUpdate = useSelector(state=> state.adminRewardSettingsUpdate)
    const {rewardUpdateSuccess, rewardUpdateFail} = adminRewardSettingsUpdate;
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getSettingsData=()=>{
            dispatch(getSettings());
        }
        getSettingsData();
    }, []);
    const setData = ()=>{
        if(!rewardsData && adminSettings.settingsData){   
            setRewardsData({...adminSettings.settingsData.reward});
            setShowEmptyState(false);
        }else if(adminSettings.settingsFail){
            // setShowEmptyState(false);
        }
    }
    useEffect(()=>{
        if(rewardUpdateFail && submissionLoading){
            Swal.fire({
                icon: 'error',
                title: 'Unable to update settings',
                showConfirmButton: false,
                timer: 2000
              });
            setSubmissionLoading(false);
        }else if(rewardUpdateSuccess && submissionLoading){
            Swal.fire({
                icon: 'success',
                title: 'Rewards settings updated successfully',
                showConfirmButton: false,
                timer: 2000
              });
            setSubmissionLoading(false);
        }
    }, [dispatch, rewardUpdateFail, rewardUpdateSuccess, submissionLoading]);

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
        let update = {
            ...rewardsData,
            max_withdrawable_without_verification: adminSettings.settingsData.investment.max_withdrawable_without_verification,
            platform_minimum_investment: adminSettings.settingsData.investment.platform_minimum_investment
        }
        dispatch(updateSettingsReward(update));
        setSubmissionLoading(true);
    }
    return (
        <div className="create-admin-container">
            <div className="create-adm-nav-back">
                <Link className="create-back-arr-link" to="/settings">
                    <AiOutlineArrowLeft className="arr-back-icon" />
                </Link>
                <div>Rewards</div>
            </div>
            {adminSettings.settingsData?
                setData() : null
            }
            {rewardsData?
            <div className="rewards-wrapper">
                <div className="create-input-item">
                    <label>Point per referral</label>
                    <input 
                        type="number" 
                        name="point_per_referral" 
                        onChange={handleRewardsField} 
                        value={rewardsData.point_per_referral}
                    />
                </div>
                <div className="create-input-item">
                    <label>Point per investment</label>
                    <input 
                        type="number" 
                        name="point_per_investment" 
                        onChange={handleRewardsField} 
                        value={rewardsData.point_per_investment}
                    />
                </div>
                <div className="create-input-item">
                    <label>Point per gift purchase</label>
                    <input 
                        type="number" 
                        name="point_per_gift_purchase" 
                        onChange={handleRewardsField}
                        value={rewardsData.point_per_gift_purchase}
                    />
                </div>
                <div className="create-input-item">
                    <label>Minimum point withdrawable</label>
                    <input 
                        type="number"
                        name="min_point_withdrawable" 
                        value={rewardsData.min_point_withdrawable} 
                        onChange={handleRewardsField} />
                </div>
                <div className="create-input-item">
                    <label>Value per point</label>
                    <input 
                        type="number" 
                        name="value_per_point" 
                        onChange={handleRewardsField}
                        value={rewardsData.value_per_point}
                    />
                </div>
                <div className="create-input-item">
                    <label>Cent to Dollars value in percentage</label>
                    <input 
                        type="number" 
                        name="cent_to_dollars_value_in_percentage" 
                        value={rewardsData.cent_to_dollars_value_in_percentage} 
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
            : (
                <div className="adm-list-empty-state-container">
                    <BeatLoader color="#03A678" loading={true} />
                </div>)}
        </div>
    )
}

export default RewardsComponent;