import React from 'react';
import {RiCalendarEventFill, RiUploadCloudFill} from 'react-icons/ri';
import './InvestmentInformation.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';

import rand from '../../../assets/random_img.jpg';

const InvestmentInformation = ({handleDeleteBundleImage,fileName,handleFileChange, handleBundleImageChange, selectedBundleImages, handleProceedToPrevPage, setIncludeBundle, setIncludePaymentPlan, includeBundle, includePaymentPlan}) => {
    const handleDisplayBundleForm = (e) => {
        if(e.target.checked === false){
            setIncludePaymentPlan(false);
            handleBundleImageChange()
        }

        setIncludeBundle(e.target.checked)
    }


    const handleDisplayPaymentPlanForm = (e) => {

        setIncludePaymentPlan(e.target.checked)
    }

    return (
        <div>
            <div className="create-investment-info-heading">Investment Information</div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Dividend maturity</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Funding end timestamp</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Hard cap</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Soft cap</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Holding period</label>

                    <div className="create-proj-input-with-suffix">
                        
                        <DatePicker id="proj-add-datepicker" className="proj-add-datepicker" />
                        <label className="proj-add-datepicker-icon-wrap" htmlFor="proj-add-datepicker">
                            <RiCalendarEventFill className="proj-add-datepicker-icon" />
                        </label>
                        
                    </div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Income start timestamp</label>

                    <div className="create-proj-input-with-suffix">
                        
                        <DatePicker id="proj-add-datepicker" className="proj-add-datepicker" />
                        <label className="proj-add-datepicker-icon-wrap" htmlFor="proj-add-datepicker">
                            <RiCalendarEventFill className="proj-add-datepicker-icon" />
                        </label>
                        
                    </div>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Interest rate per week</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">%</span><input type="text" /></div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Investment type</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Cash on cash yield</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Rental yield</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Price per fraction</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Total fractions</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-one-field-row">
                <div className="create-proj-input-container create-proj-bundle-select-wrapper">
                    <input type="checkbox" onChange={handleDisplayBundleForm} className="create-proj-bundle-select" id="create-proj-bundle-select" />
                    <label htmlFor="create-proj-bundle-select">Include bundle</label>
                </div>
            </div>

            {
                includeBundle ? 
                    <div>
                            <div className="create-investment-info-heading">Bundle</div>

                            <div className="create-proj-two-fields-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Title</label>
                                    <input type="text" />
                                </div>

                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Size</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="create-proj-one-field-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Project images</label>
                                    <div>
                                        <div className="create-proj-images-container">

                                            {
                                                selectedBundleImages.map((image, index) => {
                                                    return (
                                                        <div key={index} className="create-proj-preview-img-wrapper">
                                                            <IoCloseOutline onClick={()=>handleDeleteBundleImage(index)} className="proj-create-close-icon"/>
                                                            <img className="proj-preview-img" src={image} alt="rand" />
                                                        </div>
                                                    )
                                                })
                                            }


                                            
                                            <div className="proj-add-img-wrapper">
                                                <label className="proj-add-img-label" htmlFor="proj-add-img">
                                                <AiOutlinePlus className="proj-add-img" /></label>
                                                <input onChange={handleBundleImageChange} multiple id="proj-add-img" className="proj-add-img-input" type="file" accept="image/png, image/jpeg, image/jpg" />
                                            </div>
                                            
                                        </div>
                                        <div className="proj-new-accept-img-desc">Accepted file type: .jpg, .png and .jpeg</div>
                                    </div>
                                </div>
                            </div>

                            <div className="create-proj-two-fields-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Deed title</label>
                                    <input type="text" />
                                </div>

                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-img-name">Deed file</label>

                                    <div className="create-proj-input-with-suffix">
                                        <div className="create-proj-file-disp">{fileName}</div>
                                        <div className="proj-file-save-container">
                                            <input onChange={handleFileChange} className="proj-file-save" type="file" id="proj-file-save" />
                                            
                                            <label className="proj-file-save-icon-wrap" htmlFor="proj-file-save">
                                                <RiUploadCloudFill className="proj-file-save-icon" />
                                                <span>Upload file</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="create-proj-two-fields-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-img-name">Price</label>
                                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                                </div>

                                <div className="create-proj-input-container">
                                </div>
                            </div>

                            <div className="create-proj-hr" />

                            <div className="create-investment-info-heading">Amenities</div>

                            <div className="create-proj-two-fields-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Bedroom</label>
                                    <input type="text" />
                                </div>

                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Bathroom</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="create-proj-two-fields-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Toilet</label>
                                    <input type="text" />
                                </div>

                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Sitting room</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="create-proj-two-fields-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Dining room</label>
                                    <input type="text" />
                                </div>

                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Kitchen Net</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="create-proj-two-fields-row">

                                <div className="create-proj-inner-radio-wrapper">

                                    <div className="create-proj-input-radio-wrapper">
                                        <div className="create-proj-radio-label" htmlFor="proj-name">Laundry room</div>

                                        <div className="create-proj-input-radio-container">
                                            <div className="create-radio-item-wrap">
                                                <label className="create-radio-label" htmlFor="create-amen-laund-yes">
                                                    <span>Yes</span>
                                                    <input className="create-radio-input" id="create-amen-laund-yes" type="radio" name="laundry-room" />
                                                    <div className="create-radio-custom"></div>
                                                </label>
                                            </div>

                                            <div className="create-radio-item-wrap">
                                                <label className="create-radio-label" htmlFor="create-amen-laund-no">
                                                    <span>No</span>
                                                    <input className="create-radio-input" id="create-amen-laund-no" type="radio" name="laundry-room" />
                                                    <div className="create-radio-custom"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="create-proj-input-radio-wrapper">
                                        <div className="create-proj-radio-label" htmlFor="proj-name">Kitchen store</div>

                                        <div className="create-proj-input-radio-container">
                                            <div className="create-radio-item-wrap">
                                                <label className="create-radio-label" htmlFor="create-amen-kitch-yes">
                                                    <span>Yes</span>
                                                    <input className="create-radio-input" id="create-amen-kitch-yes" type="radio" name="create-kitch" />
                                                    <div className="create-radio-custom"></div>
                                                </label>

                                            </div>

                                            <div className="create-radio-item-wrap">
                                                <label className="create-radio-label" htmlFor="create-amen-kitch-no">
                                                    <span>No</span>
                                                    <input className="create-radio-input" id="create-amen-kitch-no" type="radio" name="create-kitch" />
                                                    <div className="create-radio-custom"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="create-proj-input-container">
                                </div>
                            </div>

                            <div className="create-proj-one-field-row">
                                <div className="create-proj-input-container create-proj-bundle-select-wrapper">
                                    <input onChange={handleDisplayPaymentPlanForm} type="checkbox"  className="create-proj-bundle-select" id="create-proj-bundle-payplan-select" />
                                    <label htmlFor="create-proj-bundle-payplan-select">Include payment plan</label>
                                </div>
                            </div>
                        </div>                
                : null
            }

            {
                includePaymentPlan ? 
                        <div className="proj-new-payment-plan-form-wrapper">
                        <div className="create-investment-info-heading">Payment Plan</div>

                        <div className="create-proj-two-fields-row">
                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-img-name">Initial deposit percentage</label>
                                <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">%</span><input type="text" /></div>
                            </div>

                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-img-name">Initial deposit amount</label>
                                <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                            </div>
                        </div>

                        <div className="create-proj-two-fields-row">
                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-name">Available payment period in months</label>
                                <input type="text" />
                            </div>

                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-img-name">Monthly payment</label>
                                <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                            </div>

                        </div>
                    </div>                
                : null
            }




            <div className="create-proj-two-fields-row proj-new-create-btn-container">
                
                <div className="create-proj-input-container">
                </div>

                <div className="create-proj-input-container create-proj-btn-container">
                    <button className="create-outline-green">Cancel</button>
                    <button onClick={handleProceedToPrevPage} className="create-fill-green">Create</button>
                </div>

            </div>
        </div>
    )
}

export default InvestmentInformation
