import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
// import './CreateAdminComponent.css'
import { CountryDropdown } from 'react-country-region-selector'
import './MarketplaceComponent.css'


import profile_placeholder from '../../../assets/images/create-profile-placeholder.png'
import { Link } from 'react-router-dom'

const MarketplaceComponent = () => {
    const [selectedProfileImg, setSelectedProfileImg] = useState('')

    const encodeFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }

    const handleProfileImgUpload = (e) => {
        if (e.target.files) {
            encodeFileToBase64(e.target.files[0])
                .then(result => {
                    setSelectedProfileImg(result)
                })


        }
    }
    return (
        <div className="create-admin-container">
            <div className="create-adm-nav-back">
                <Link className="create-back-arr-link" to="/settings"><AiOutlineArrowLeft className="arr-back-icon" /></Link>
                <div>Marketplace</div>
            </div>

            <div className="marketplace-wrapper">
                <div className="create-input-item">
                    <label>Buyer maximum <br/> period in hours</label>
                    <select className="marketplace-select-field">
                        <option>Select hours</option>
                        <option>1 hour</option>
                    </select>
                </div>
                <div>
                <div className="create-input-item divide"></div>
                <div className="create-input-item">
                    <div className="marketplace-btn">
                        <button className="update-adm-save-btn" >Save Changes</button>
                    </div>

                </div>
                </div>

            </div>
        </div>
    )
}

export default MarketplaceComponent;