import React, { useState, useEffect } from 'react';
import './InvestmentSettingsContainer.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BeatLoader, ClipLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import {getSettings, updateSettingsReward} from '../../../redux/actions/investmentsActions';
import Swal from 'sweetalert2';

const InvestmentSettingsContainer = () => {
    const dispatch = useDispatch();
    const [submissionLoading, setSubmissionLoading] = useState(false);
    const adminSettings = useSelector(state => state.adminSettings);
    const [investmentData, setinvestmentData] = useState(null);

    const adminRewardSettingsUpdate = useSelector(state=> state.adminRewardSettingsUpdate)
    const {rewardUpdateSuccess, rewardUpdateFail} = adminRewardSettingsUpdate;
    

    useEffect(() => {
        const getSettingsData=()=>{
            dispatch(getSettings());
        }
        getSettingsData();
    }, []);
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

    const setData = ()=>{
        if(!investmentData && adminSettings.settingsData){   
            setinvestmentData({...adminSettings.settingsData.investment});
        }else if(adminSettings.settingsFail){
            // setShowEmptyState(false);
        }
    }
    const handleInvestmentField =(e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setinvestmentData(prev => {
            prev[`${name}`] = parseInt(value);
            return {...prev};
        })
    }
    const handleRewardsUpdate = () =>{
        //Request api update to market period
        let update = {
            ...investmentData,
        }
        dispatch(updateSettingsReward(update));
        setSubmissionLoading(true);
    }
    return (
        <div>
            <div className="create-admin-container">
            <div className="create-adm-nav-back">
                <Link className="create-back-arr-link" to="/settings">
                    <AiOutlineArrowLeft className="arr-back-icon" />
                </Link>
                <div>Investments</div>
            </div>
            {adminSettings.settingsData?
                setData() : null
            }
            {investmentData ?
            <div className="investment-container-wrapper">
                <div className="section-content">
                    <div className="investment-container-field">
                        <label>Maximum amount withdrawable <br />without verification</label>
                        <input type="number" name="max_withdrawable_without_verification" onChange={handleInvestmentField} value={investmentData.max_withdrawable_without_verification}  placeholder="Enter amount"  />
                    </div>
                    <div className="investment-container-field">
                        <label>Matador minimum investment</label>
                        <input type="number" name="platform_minimum_investment" onChange={handleInvestmentField}  value={investmentData.platform_minimum_investment} placeholder="Enter amount" />
                    </div>
                    <div className="investment-container-field">
                        <label>Pending payment <br /> lifetime in hours</label>
                        <select name="pending_payment_lifetime_in_hours" onChange={handleInvestmentField}  value={investmentData.pending_payment_lifetime_in_hours}>
                            <option>Select hours</option>
                        <option value={1}>1 hour</option>
                        <option value={2}>2 hours</option>
                        <option value={3}>3 hours</option>
                        <option value={4}>4 hours</option>
                        <option value={5}>5 hours</option>
                        <option value={6}>6 hours</option>
                        <option value={7}>7 hours</option>
                        <option value={8}>8 hours</option>
                        <option value={9}>9 hours</option>
                        <option value={10}>10 hours</option>
                        <option value={11}>11 hours</option>
                        <option value={12}>12 hours</option>
                        <option value={13}>13 hours</option>
                        <option value={14}>14 hours</option>
                        <option value={15}>15 hours</option>
                        <option value={16}>16 hours</option>
                        <option value={17}>17 hours</option>
                        <option value={18}>18 hours</option>
                        <option value={19}>19 hours</option>
                        <option value={20}>20 hours</option>
                        <option value={21}>21 hours</option>
                        <option value={22}>22 hours</option>
                        <option value={23}>23 hours</option>
                        <option value={24}>24 hours</option>
                    </select>
                    </div>
                    <div className="investment-container-field">
                        <label>Grace period in days</label>
                        <input type="number" name="grace_period_in_days" onChange={handleInvestmentField}  value={investmentData.grace_period_in_days} placeholder="Enter amount of days" />
                    </div>
                    <div className="investment-container-field">
                        <label>Maximum fixed income <br /> duration in months</label>
                        <input type="number" name="max_fixed_income_duration_in_months" onChange={handleInvestmentField}  value={investmentData.max_fixed_income_duration_in_months} placeholder="Enter amount" />
                    </div>
                    <div className="investment-container-field">
                        <label>Minimum fixed income <br /> duration in months</label>
                        <input type="number" name="min_fixed_income_duration_in_months" onChange={handleInvestmentField}  value={investmentData.min_fixed_income_duration_in_months} placeholder="Enter amount" />
                    </div>
                </div>
                <div className="section-divider"></div>
                <div className="interest-btn">
                    <button className="update-adm-save-btn" onClick={handleRewardsUpdate}>{submissionLoading? <span><ClipLoader size={12} /> please wait</span> :'Save Changes'}</button>
                </div>
            </div>
            : (
                <div className="adm-list-empty-state-container">
                    <BeatLoader color="#03A678" loading={true} />
                </div>)}
        </div>
    </div>
    )
}

export default InvestmentSettingsContainer
