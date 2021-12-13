import React, { useEffect } from 'react'
import ReactDom from 'react-dom';
import './SoleFI.css';

import close_icon from '../../../assets/icons/close-icon.png';
import profile_img from '../../../assets/images/profile-img.png';

import { useLocation } from 'react-router-dom';

const SoleFI = ({setIsOpen, open, onClose}) => {
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
            <div onClick={onClose} className="s-f-i-container">
                <div className='s-f-i-input-wrapper-main'>
                <div onClick={(event)=> event.stopPropagation()} className="s-f-i-input-wrapper">
                    <div className="s-f-i-heading">
                        <div>Investment Info</div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>
                    <div className="s-f-i-detail-wrapper">

                       <div className='detail-card-one'>
                            <div className='heading-wrapper'>
                                <div className='heading-item-one'>Details</div>
                                <div className='heading-status-item active'>Active</div>
                            </div>

                            <div className='body-wrapper'>
                                <div className='body-item'>
                                    <div className='body-item-desc'>Amount invested</div>
                                    <div className='body-item-value'>₦23,120,000.00</div>
                                </div>

                                <div className='body-item'>
                                    <div className='body-item-desc'>Amount remaining</div>
                                    <div className='body-item-value'>₦23,120,000.00</div>
                                </div>

                                <div className='body-item'>
                                    <div className='body-item-desc'>Duration</div>
                                    <div className='body-item-value'>65 days</div>
                                </div>

                                <div className='body-item'>
                                    <div className='body-item-desc'>Collection number</div>
                                    <div className='body-item-value'>2</div>
                                </div>

                                <div className='body-item'>
                                    <div className='body-item-desc'>Investors</div>
                                    <div className='body-item-value'>7</div>
                                </div>

                                <div className='body-item'>
                                    <div className='body-item-desc'>Creator</div>
                                    <div className='body-item-value'>Abubakar Yanladı</div>
                                </div>

                                <div className='body-item'>
                                    <div className='body-item-desc'>Collection code</div>
                                    <div className='body-item-value'>11348t6</div>
                                </div>
                            </div>
                       </div>

                       <div className='detail-card-two'>
                            <div className='card-two-heading'>Investors</div>
                            <div className='card-two-body-wrapper'>

                                <div className='card-item'>
                                    <div className='info-container'>
                                        <img src={profile_img} alt="" />
                                        <div className='name-details'>
                                            <div className='name'>Abubakar Yanladı</div>
                                            <div className='role'>Creator</div>
                                        </div>
                                    </div>

                                    <div className='value'>₦23,120,000.00</div>
                                </div>

                                <div className='card-item'>
                                    <div className='info-container'>
                                        <img src={profile_img} alt="" />
                                        <div className='name-details'>
                                            <div className='name'>Abubakar Yanladı</div>
                                            <div className='role'>Creator</div>
                                        </div>
                                    </div>

                                    <div className='value'>₦23,120,000.00</div>
                                </div>

                                <div className='card-item'>
                                    <div className='info-container'>
                                        <img src={profile_img} alt="" />
                                        <div className='name-details'>
                                            <div className='name'>Abubakar Yanladı</div>
                                            <div className='role'>Creator</div>
                                        </div>
                                    </div>

                                    <div className='value'>₦23,120,000.00</div>
                                </div>

                                <div className='card-item'>
                                    <div className='info-container'>
                                        <img src={profile_img} alt="" />
                                        <div className='name-details'>
                                            <div className='name'>Abubakar Yanladı</div>
                                            <div className='role'>Creator</div>
                                        </div>
                                    </div>

                                    <div className='value'>₦23,120,000.00</div>
                                </div>

                                <div className='card-item'>
                                    <div className='info-container'>
                                        <img src={profile_img} alt="" />
                                        <div className='name-details'>
                                            <div className='name'>Abubakar Yanladı</div>
                                            <div className='role'>Creator</div>
                                        </div>
                                    </div>

                                    <div className='value'>₦23,120,000.00</div>
                                </div>

                                <div className='card-item'>
                                    <div className='info-container'>
                                        <img src={profile_img} alt="" />
                                        <div className='name-details'>
                                            <div className='name'>Abubakar Yanladı</div>
                                            <div className='role'>Creator</div>
                                        </div>
                                    </div>

                                    <div className='value'>₦23,120,000.00</div>
                                </div>

                                <div className='card-item'>
                                    <div className='info-container'>
                                        <img src={profile_img} alt="" />
                                        <div className='name-details'>
                                            <div className='name'>Abubakar Yanladı</div>
                                            <div className='role'>Creator</div>
                                        </div>
                                    </div>

                                    <div className='value'>₦23,120,000.00</div>
                                </div>

                                <div className='card-item'>
                                    <div className='info-container'>
                                        <img src={profile_img} alt="" />
                                        <div className='name-details'>
                                            <div className='name'>Abubakar Yanladı</div>
                                            <div className='role'>Creator</div>
                                        </div>
                                    </div>

                                    <div className='value'>₦23,120,000.00</div>
                                </div>

                                <div className='card-item'>
                                    <div className='info-container'>
                                        <img src={profile_img} alt="" />
                                        <div className='name-details'>
                                            <div className='name'>Abubakar Yanladı</div>
                                            <div className='role'>Creator</div>
                                        </div>
                                    </div>

                                    <div className='value'>₦23,120,000.00</div>
                                </div>
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

export default SoleFI
