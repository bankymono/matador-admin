import React, { useState } from 'react'
import ReactDom from 'react-dom';
import './VIDDetails.css';

import close_icon from '../../../assets/icons/close-icon.png';
import upload_icon from '../../../assets/icons/create-deposit-img-upload.png'
import { Field, Form, Formik } from 'formik';
import { useLocation } from 'react-router-dom';

const VIDDetails = ({verId, setIsOpen, open, onClose}) => {
    const location = useLocation()
    const [selectedProfileImg, setSelectedProfileImg] = useState('')
    
    console.log('locationnnn', location.search.split('=')[1])
    console.log('VerId', verId)
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
                                <button>Verify</button>
                                <button>Mark Unverified</button>
                            </div>
                        </div>

                        <div>
                            <img src="" alt="" />
                        </div>

                        <div>
                            <div>
                                <div>Verification Status</div>
                                <div>Unverified</div>
                            </div>

                            <div>
                                <div>Document Type</div>
                                <div>Driver's License</div>
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
