import React, { useEffect } from 'react'
import ReactDom from 'react-dom';
import './EquityInvestmentDetail.css';
import {AiOutlineClose} from 'react-icons/ai'

import close_icon from '../../../assets/icons/close-icon.png';
import profile_img from '../../../assets/images/male_dp.png';
// import profile_img from '../../../assets/images/profile-img.png';

import { useLocation } from 'react-router-dom';

const EquityInvestmentDetail = ({setIsOpen, open, onClose}) => {
    const location = useLocation()

    
    // console.log('locationnnn', location.search.split('=')[1])
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
            <div onClick={onClose} className="e-i-d-m-container">
                
                <div className='e-i-d-m-input-wrapper-main'>
                <div onClick={(event)=> event.stopPropagation()} className="e-i-d-m-input-wrapper">
                    <AiOutlineClose className="close-icon" onClick={onClose} />
                    <div className="e-i-d-m-heading">
                        
                        <div className='e-i-d-m-inner-wrapper'>
                            <div className='info'>
                                {/* <div className='desc'>Name</div> */}
                                <div className='act-name'>Ahmed Taraj</div>

                                <div className='heading-val-detail-container'>
                                    <div className='desc'>Amount Invested</div>
                                    <div className='val'>₦1,000,000</div>
                                </div>
                            </div>


                            <img src={profile_img} className='profile-img' alt="prof" />
                        </div>
                        <div className='e-i-d-m-heading-bottom-content'>
                            
                            <div className='left-content'>
                                <div className='desc'>Equity Type</div>
                                <span className='val'>Fractions</span>
                            </div>

                            <div className='right-content'>
                                <div className='desc'>Project Name</div>
                                <div className='val'>Astrid 2.0</div>
                            </div>

                        </div>
                    </div>

                    <div className="e-i-d-m-detail-wrapper">

                        <div className='e-i-d-m-body-wrapper e-i-d-m-third-wrapper-2'>
                            {/* <div className='desc'>Description</div>
                            <div className='e-i-d-m-content'>
                                Curabitur faucibus laoreet egestas. Quisque at pretium urna. Quisque eget sem rhoncus, 
                                sodales massa at, dapibus urna. Mauris tempus ullamcorper ipsum, sed viverra dolor eleifend ut. 
                                Vestibulum id erat ut arcu vestibulum ultrices et vitae leo.
                            </div> */}


                            <div className='e-i-d-m-item'>
                                <div className='desc'>Number of Fractions</div>
                                <div className='val'>4,000</div>
                            </div>

                            <div className='e-i-d-m-item'>
                                <div className='desc'>Quarterly Income</div>
                                <div className='val'>₦150,000</div>
                            </div>

                        </div>

                        <div className='e-i-d-m-third-wrapper'>
                            <div className='e-i-d-m-item'>
                                <div className='desc'>Investment Date</div>
                                <div className='val'>24 November 2021</div>
                            </div>

                            <div className='e-i-d-m-item'>
                                <div className='desc'>Fraction Value</div>
                                <div className='val'>4,800</div>
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

export default EquityInvestmentDetail
