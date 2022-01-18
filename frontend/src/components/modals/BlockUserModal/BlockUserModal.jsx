import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './BlockUserModal.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'

import close_icon from '../../../assets/icons/close-icon.png';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVerificationIdDetail, verifyVerificationId } from '../../../redux/actions/userActions';

const BlockUserModal = ({verId, setIsOpen, open, onClose}) => {

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
            <div onClick={onClose} className="block-user-container">
                <div onClick={(event)=> event.stopPropagation()} className="block-user-input-wrapper">
                    <div className="block-user-heading">
                        <div>Block User Account</div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>

                    <div className='center-content'>
                        <AiOutlineCloseCircle className="close-image" />
                        <div className='text-arr'>
                            Are you sure you want to Block this User
                        </div>

                        <div className='buttons-container'>
                            <button className='blk-btn'>Block User Account</button>
                            <button onClick={onClose} className='cncel-btn'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>        
        </>,
        document.getElementById('modal-portal')
    )
}

export default BlockUserModal
