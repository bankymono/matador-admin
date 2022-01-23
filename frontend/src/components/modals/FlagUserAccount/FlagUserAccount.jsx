import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './FlagUserAccount.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'

import close_icon from '../../../assets/icons/close-icon.png';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVerificationIdDetail, verifyVerificationId } from '../../../redux/actions/userActions';

const FlagUserAccount = ({verId, setIsOpen, open, onClose}) => {

    const dispatch = useDispatch();

    const verificationIdDetail = useSelector(state => state.verificationIdDetail);
    const {singleVerIdLoading, singleVerId, singleVerIdError} = verificationIdDetail;
    // console.log('locationnnn', location.search.split('=')[1])

    useEffect(()=>{
        if(verId){
            dispatch(getVerificationIdDetail(verId));
        }

    },[dispatch, verId])

    useEffect(()=>{
        if(open)
        document.body.style.overflow = 'hidden'
        else{
            document.body.style.overflow = 'scroll'
        }
    },[open])




    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div onClick={onClose} className="flag-user-container">
                <div onClick={(event)=> event.stopPropagation()} className="flag-user-input-wrapper">
                    <div className="flag-user-heading">
                        <div>Flag User Account</div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>

                    <div className='center-content'>
                        <div>Reason for Flag</div>
                        {/* <AiOutlineCloseCircle className="close-image" /> */}
                        <div className='boxed-text'>
                            Your account has been flagged due to suspicious activities, Kindly contact our support team.
                        </div>

                        <div className='text-bee'>Unflag User Account After</div>
                        <div className='text-bee'>2 weeks</div>

                        <div className='buttons-container'>
                            <button onClick={onClose} className='cncel-btn'>Cancel</button>
                            <button className='blk-btn'>Flag User Account</button>
                        </div>
                    </div>
                </div>
            </div>        
        </>,
        document.getElementById('modal-portal')
    )
}

export default FlagUserAccount
