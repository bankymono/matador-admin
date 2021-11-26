import React from 'react';
import {RiCalendarEventFill, RiUploadCloudFill} from 'react-icons/ri';
import {MdAddBox} from 'react-icons/md'
import './InvestmentInformation.css';


import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'



import rand from '../../../assets/random_img.jpg';

import Amenities from '../Amenities/Amenities';
import Bundle from '../Bundle/Bundle';
import PaymentPlan from '../PaymentPlan/PaymentPlan';

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
                        
                        <DatePicker id="proj-add-hold-datepicker" className="proj-add-datepicker" />
                        <label className="proj-add-datepicker-icon-wrap" htmlFor="proj-add-hold-datepicker">
                            <RiCalendarEventFill className="proj-add-datepicker-icon" />
                        </label>
                        
                    </div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Income start timestamp</label>

                    <div className="create-proj-input-with-suffix">
                        
                        <DatePicker id="proj-add-stamp-datepicker" className="proj-add-datepicker" />
                        <label className="proj-add-datepicker-icon-wrap" htmlFor="proj-add-stamp-datepicker">
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
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Rental yield</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Cash on cash yield</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Total fractions</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Price per fraction</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                </div>

                <div className="create-proj-input-container">
                    {/* <label className="create-proj-input-label" htmlFor="proj-name">Total fractions</label>
                    <input type="text" /> */}
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

                    <div className="bundle-main-container">

                        <Bundle
                            handleDeleteBundleImage={handleDeleteBundleImage}
                            fileName={fileName} 
                            handleFileChange={handleFileChange}
                            handleBundleImageChange={handleBundleImageChange}
                            selectedBundleImages={selectedBundleImages}                           
                        />

                        <Bundle
                            handleDeleteBundleImage={handleDeleteBundleImage}
                            fileName={fileName} 
                            handleFileChange={handleFileChange}
                            handleBundleImageChange={handleBundleImageChange}
                            selectedBundleImages={selectedBundleImages}                           
                        />

                        <button className="create-proj-add-more-buton"><span>Add Bundle</span><MdAddBox className="add-more-icon" /></button>
                    </div>     
                : null
            }

            <div className="create-proj-one-field-row">
                <div className="create-proj-input-container create-proj-bundle-select-wrapper">
                    <input onChange={handleDisplayPaymentPlanForm} type="checkbox"  className="create-proj-bundle-select" id="create-proj-bundle-payplan-select" />
                    <label htmlFor="create-proj-bundle-payplan-select">Include payment plan</label>
                </div>
            </div>

            {
                includePaymentPlan ? 
                        <div className="payment-plan-main-container">
                            <PaymentPlan />
                            <PaymentPlan />
                            <button className="create-proj-add-more-buton"><span>Add Payment plan</span><MdAddBox className="add-more-icon" /></button>
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
