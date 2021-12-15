import React, { useEffect } from 'react'
import ReactDom from 'react-dom';
import './ProjDepDetailModal.css';

import close_icon from '../../../assets/icons/close-icon.png';
import profile_img from '../../../assets/images/profile-img.png';

import { useLocation } from 'react-router-dom';

const ProjDepDetailModal = ({setIsOpen, open, onClose}) => {
    const location = useLocation()

    
    console.log('locationnnn', location.search.split('=')[1])
    // location.search ? Number(location.search.split('=')[1]) : 1;
    
    useEffect(()=> {
        if(open){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }
    },[open])



    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div onClick={onClose} className="p-d-d-m-container">
                <div className='p-d-d-m-input-wrapper-main'>
                <div onClick={(event)=> event.stopPropagation()} className="p-d-d-m-input-wrapper">
                    <div className="p-d-d-m-heading">
                        
                        <div className='info'>
                            <div className='desc'>Name</div>
                            <div className='act-name'>Astriod 4.0 Co</div>
                        </div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>

                    <div className="p-d-d-m-detail-wrapper">

                        <div className='p-d-d-m-body-wrapper'>
                            <div className='desc'>Description</div>
                            <div className='p-d-d-m-content'>
                                Curabitur faucibus laoreet egestas. Quisque at pretium urna. Quisque eget sem rhoncus, 
                                sodales massa at, dapibus urna. Mauris tempus ullamcorper ipsum, sed viverra dolor eleifend ut. 
                                Vestibulum id erat ut arcu vestibulum ultrices et vitae leo.
                            </div>
                        </div>

                        <div className='p-d-d-m-third-wrapper'>
                            <div className='p-d-d-m-item'>
                                <div className='desc'>Created by</div>
                                <div className='val'>James Ans</div>
                            </div>

                            <div className='p-d-d-m-item'>
                                <div className='desc'>Last updated by</div>
                                <div className='val'>24 November 2021</div>
                            </div>

                            <div className='p-d-d-m-item'>
                                <div className='desc'>Created at</div>
                                <div className='val'>Unknown</div>
                            </div>

                        </div>

                    </div>
                </div>
                </div>
            </div>        
        </>,
        document.getElementById('modal-portal')
    )
}

export default ProjDepDetailModal
