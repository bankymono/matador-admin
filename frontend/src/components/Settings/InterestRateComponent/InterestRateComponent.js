import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const InterestRateComponent =()=>{
    const [rewardsData, setRewardsData] = useState({});
    const [loading, setLoading] = useState(false);
    const handleRewardsField =(e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setRewardsData(prev => {
            prev[`${name}`] = value;
            return {...prev};
        })
    }
    const handleRewardsUpdate = () =>{
        //Request api update to market period
        setLoading(true);
        
        setInterval(console.log(rewardsData), 3000);
    }
    return (
        <div className="create-admin-container">
            <div className="create-adm-nav-back">
                <Link className="create-back-arr-link" to="/settings">
                    <AiOutlineArrowLeft className="arr-back-icon" />
                </Link>
                <div>Rewards</div>
            </div>

            <div className="rewards-wrapper">
                <div className="create-input-item">
                    <label>Point per referral</label>
                    <input type="text" name="ppr" onChange={handleRewardsField} />
                </div>
                <div className="create-input-item">
                    <label>Point per investment</label>
                    <input type="text" name="ppi" onChange={handleRewardsField} />
                </div>
                <div className="create-input-item">
                    <label>Point per gift purchase</label>
                    <input type="text" name="ppgp" onChange={handleRewardsField} />
                </div>
                <div className="create-input-item">
                    <label>Minimum point withdrawable</label>
                    <input type="text" name="mpw" onChange={handleRewardsField} />
                </div>
                <div className="create-input-item">
                    <label>Value per point</label>
                    <input type="text" name="vpp" onChange={handleRewardsField} />
                </div>
                <div className="create-input-item">
                    <label>Cent to Dollars value in percentage</label>
                    <input type="text" name="cdv" onChange={handleRewardsField} />
                </div>
                <div>
                <div className="create-input-item divide"></div>
                <div className="create-input-item">
                    <div className="marketplace-btn">
                        <button className="update-adm-save-btn" onClick={handleRewardsUpdate}>{loading? <span><ClipLoader size={12} /> please wait</span> :'Save Changes'}</button>
                    </div>

                </div>
                </div>

            </div>
        </div>
    )
}

export default InterestRateComponent;