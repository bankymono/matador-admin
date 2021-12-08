import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './MarketplaceComponent.css'


import { Link } from 'react-router-dom'

const MarketplaceComponent = () => {
    const [marketPeriod, setMarketPeriod] = useState('');

    const handleMarketplaceSelectChange =(e) =>{
        setMarketPeriod(e.target.value);
    }
    const handleMarketplaceUpdate = () =>{
        //Request api update to market period
        console.log(marketPeriod);
    }
    return (
        <div className="create-admin-container">
            <div className="create-adm-nav-back">
                <Link className="create-back-arr-link" to="/settings">
                    <AiOutlineArrowLeft className="arr-back-icon" />
                </Link>
                <div>Marketplace</div>
            </div>

            <div className="marketplace-wrapper">
                <div className="create-input-item">
                    <label>Buyer maximum <br/> period in hours</label>
                    <select className="marketplace-select-field" onChange={handleMarketplaceSelectChange}>
                        <option>Select hours</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                        <option>3 hours</option>
                        <option>4 hours</option>
                        <option>5 hours</option>
                        <option>6 hours</option>
                        <option>7 hours</option>
                        <option>8 hours</option>
                        <option>9 hours</option>
                        <option>10 hours</option>
                        <option>11 hours</option>
                        <option>12 hours</option>
                    </select>
                </div>
                <div>
                <div className="create-input-item divide"></div>
                <div className="create-input-item">
                    <div className="marketplace-btn">
                        <button className="update-adm-save-btn" onClick={handleMarketplaceUpdate}>Save Changes</button>
                    </div>

                </div>
                </div>

            </div>
        </div>
    )
}

export default MarketplaceComponent;