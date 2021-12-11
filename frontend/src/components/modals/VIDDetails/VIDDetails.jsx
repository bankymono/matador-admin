import React, { useState } from 'react'
import ReactDom from 'react-dom';
import './VIDDetails.css';

import close_icon from '../../../assets/icons/close-icon.png';
// import { useLocation } from 'react-router-dom';
// verification_detail_img
import ver_detail_img from '../../../assets/images/verification_detail_img.png'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVerificationIdDetail } from '../../../redux/actions/userActions';

const VIDDetails = ({verId, setIsOpen, open, onClose}) => {
    // const location = useLocation()
    // const [selectedProfileImg, setSelectedProfileImg] = useState('')
    const [dummyUnVerified, setDummyUnVerified] = useState(true);

    const dispatch = useDispatch();

    const verificationIdDetail = useSelector(state => state.verificationIdDetail);
    const {singleVerIdLoading, singleVerId, singleVerIdError} = verificationIdDetail
    // console.log('locationnnn', location.search.split('=')[1])

    
    useEffect(()=>{
        if(open)
        document.body.style.overflow = 'hidden'
        else{
            document.body.style.overflow = 'scroll'
        }
    },[])

    useEffect(()=>{
        dispatch(getVerificationIdDetail(verId));

    },[dispatch, verId])
    // location.search ? Number(location.search.split('=')[1]) : 1;




    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div onClick={onClose} className="v-id-container">
                <div onClick={(event)=> event.stopPropagation()} className="v-id-input-wrapper">
                    {console.log('verrr detailss modal', singleVerId)}
                    <div className="v-id-heading">
                        <div></div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>
                    {singleVerIdLoading ? null:
                    <div className="v-id-details-content">
                        <div className="v-id-details-first-content">
                            <div className="name-details">
                                <div className="name-desc">Full Name</div>
                                <div className="name-name">{singleVerId.data.user.first_name + " " + singleVerId.data.user.last_name}</div>
                            </div>

                            <div>
                                {singleVerId.data.status === false ? <button className="verify-btn">Verify</button>:
                                <button className="unverify-btn">Mark Unverified</button>}
                            </div>
                        </div>

                        <div className="v-id-details-second-content">
                            <img className="v-id-detail-img" src={singleVerId.data.document} alt="ver" />
                        </div>

                        <div className="v-id-details-third-content">
                            <div className="verification-stat-detail">
                                <div className="desc">Verification Status</div>
                                {
                                    singleVerId.data.status ?
                                    <div className="value"><span className='verified'>Verified</span></div>:
                                    <div className="value"><span>Unverified</span></div>
                                }


                            </div>

                            <div className="verification-type-detail">
                                <div className="desc">Document Type</div>
                                <div className="value">{singleVerId.data.document_type === null ?"Not specified": singleVerId.data.document_type}</div>
                            </div>
                        </div>

                    </div>
                    }
                </div>
            </div>        
        </>,
        document.getElementById('modal-portal')
    )
}

export default VIDDetails
