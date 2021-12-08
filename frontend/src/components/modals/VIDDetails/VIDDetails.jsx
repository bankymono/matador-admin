import React, { useState } from 'react'
import ReactDom from 'react-dom';
import './VIDDetails.css';

import close_icon from '../../../assets/icons/close-icon.png';
import { useLocation } from 'react-router-dom';
// verification_detail_img
import ver_detail_img from '../../../assets/images/verification_detail_img.png'
import { useEffect } from 'react';

const VIDDetails = ({verId, setIsOpen, open, onClose}) => {
    const location = useLocation()
    const [selectedProfileImg, setSelectedProfileImg] = useState('')
    const [dummyUnVerified, setDummyUnVerified] = useState(true);
    
    console.log('locationnnn', location.search.split('=')[1])
    console.log('VerId', verId)
    useEffect(()=>{
        if(open)
        document.body.style.overflow = 'hidden'
        else{
            document.body.style.overflow = 'scroll'
        }
    })
    // location.search ? Number(location.search.split('=')[1]) : 1;
    const encodeFileToBase64 = (file) => {
        return new Promise((resolve, reject)=> {
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }

    const handleProfileImgUpload = (e) => {
        if(e.target.files){
                encodeFileToBase64(e.target.files[0])
                .then(result =>{
                    setSelectedProfileImg(result)
                })
        }
    }

    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div onClick={onClose} className="v-id-container">
                <div onClick={(event)=> event.stopPropagation()} className="v-id-input-wrapper">
                    <div className="v-id-heading">
                        <div></div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>
                    <div className="v-id-details-content">
                        <div className="v-id-details-first-content">
                            <div className="name-details">
                                <div className="name-desc">Full Name</div>
                                <div className="name-name">Michael Obi-Adasha</div>
                            </div>

                            <div>
                                {dummyUnVerified ? <button className="verify-btn">Verify</button>:
                                <button className="unverify-btn">Mark Unverified</button>}
                            </div>
                        </div>

                        <div className="v-id-details-second-content">
                            <img className="v-id-detail-img" src={ver_detail_img} alt="ver" />
                        </div>

                        <div className="v-id-details-third-content">
                            <div className="verification-stat-detail">
                                <div className="desc">Verification Status</div>
                                <div className="value"><span>Unverified</span></div>
                            </div>

                            <div className="verification-type-detail">
                                <div className="desc">Document Type</div>
                                <div className="value">Driver's License</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>        
        </>,
        document.getElementById('modal-portal')
    )
}

export default VIDDetails
