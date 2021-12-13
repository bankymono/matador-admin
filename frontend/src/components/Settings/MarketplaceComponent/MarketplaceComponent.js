import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Swal from 'sweetalert2';
import './MarketplaceComponent.css'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getSettings, updateSettingsReward } from '../../../redux/actions/investmentsActions';
import { BeatLoader, ClipLoader } from 'react-spinners';

const MarketplaceComponent = () => {
    const dispatch = useDispatch();
    const adminSettings = useSelector(state => state.adminSettings);
    const adminRewardSettingsUpdate = useSelector(state=> state.adminRewardSettingsUpdate)
    const {rewardUpdateSuccess, rewardUpdateFail} = adminRewardSettingsUpdate;

    const [marketPeriod, setMarketPeriod] = useState(null);
    const [submissionLoading, setSubmissionLoading] = useState(false);
    useEffect(() => {
            dispatch(getSettings());
    }, []);
    const setData=()=>{
        if(!marketPeriod && adminSettings.settingsData){
            setMarketPeriod({...adminSettings.settingsData.marketplace});
        }
    }
    
    const handleMarketplaceSelectChange =(e) =>{
        let name = e.target.name;
        console.log(e.target.value);
        let value = parseInt(e.target.value);
        let data = {};
        data[`${name}`] = value;
        setMarketPeriod({...data})
    }
    const handleMarketplaceUpdate = () =>{
        //Request api update to market period
        let update = {
            ...marketPeriod,
            max_withdrawable_without_verification: adminSettings.settingsData.investment.max_withdrawable_without_verification,
            platform_minimum_investment: adminSettings.settingsData.investment.platform_minimum_investment
        }
        console.log('update', update)
        dispatch(updateSettingsReward(update));
        setSubmissionLoading(true);
        
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
    return (
        
        <div className="create-admin-container">
            <div className="create-adm-nav-back">
                <Link className="create-back-arr-link" to="/settings">
                    <AiOutlineArrowLeft className="arr-back-icon" />
                </Link>
                <div>Marketplace</div>
            </div>
            {adminSettings.settingsData? setData() : null }
            {marketPeriod?
                <div className="marketplace-wrapper">
                <div className="create-input-item">
                    <label>Buyer maximum <br/> period in hours</label>
                    <select className="marketplace-select-field" name="buyer_max_period_in_hours" value={marketPeriod.buyer_max_period_in_hours} onChange={handleMarketplaceSelectChange}>
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
                <div>
                <div className="create-input-item divide"></div>
                <div className="create-input-item">
                    <div className="marketplace-btn">
                        <button className="update-adm-save-btn" onClick={handleMarketplaceUpdate}>{submissionLoading? <span><ClipLoader size={12} /> please wait</span> :'Save Changes'}</button>
                    </div>
                </div>
                </div>
            </div>
            : (<div className="adm-list-empty-state-container">
                    <BeatLoader color="#03A678" loading={true} />
                </div>)}
        </div>
    )
}

export default MarketplaceComponent;