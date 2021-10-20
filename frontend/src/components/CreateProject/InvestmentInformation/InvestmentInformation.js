import React from 'react';
import {RiCalendarEventFill, RiUploadCloudFill} from 'react-icons/ri';
import './InvestmentInformation.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';

import rand from '../../../assets/random_img.jpg';
import Bundle from '../Bundle/Bundle';

const InvestmentInformation = (
        {newProject, setNewProject, handleDeleteBundleImage, currentBundle,
        fileName,handleFileChange, handleBundleImageChange, setPaymentPlan, 
        selectedBundleImages, handleProceedToPrevPage, setIncludeBundle, 
        setIncludePaymentPlan, includeBundle, includePaymentPlan, setBundles,
        cancelProjectCreation, fetchedAmenities, bundles, payment_plan,
        setCurrentBundle, setSelectedBundleImages, setSelectedFile, setFileName,
        selectedFile, selectedBundleAmenities, setSelectedBundleAmenities,
        handleSelectedBundleAmenities, setAmenityAmount, removeAmenity,
        investmentTypes}
    ) => {
    
    const handleDisplayBundleForm = (e) => {
        if(e.target.checked === false){
            setIncludePaymentPlan(false);
            handleBundleImageChange()
        }

        setIncludeBundle(e.target.checked)
    }

    return (
        <div>
            <div className="create-investment-info-heading">Investment Information</div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Dividend maturity (in months)</label>
                    <input type="text" 
                    value={newProject.dividend_maturity_in_months || ""}
                    onChange={(e) => setNewProject({
                        ...newProject, 
                        dividend_maturity_in_months: e.target.value
                    })}/>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Funding end timestamp</label>
                    <input type="datetime-local" 
                    value={newProject.funding_end_timestamp || ""}
                    onChange={(e) => setNewProject({
                        ...newProject, 
                        funding_end_timestamp: e.target.value
                    })}
                    />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Hard cap</label>
                    <input type="text" 
                    value={newProject.hard_cap || ""}
                    onChange={(e) => setNewProject({
                        ...newProject, 
                        hard_cap: e.target.value
                    })}/>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Soft cap</label>
                    <input type="text" 
                    value={newProject.soft_cap || ""}
                    onChange={(e) => setNewProject({
                        ...newProject, 
                        soft_cap: e.target.value
                    })}/>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Holding Period (in months)</label>
                    <input type="text" 
                    value={newProject.holding_period_in_months || ""}
                    onChange={(e) => setNewProject({
                        ...newProject, 
                        holding_period_in_months: e.target.value
                    })}/>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Income start timestamp</label>
                    <input type="datetime-local" 
                    value={newProject.income_start_timestamp || ""}
                    onChange={(e) => setNewProject({
                        ...newProject, 
                        income_start_timestamp: e.target.value
                    })}
                    />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Interest rate per week</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">%</span>
                    <input type="text" 
                        value={newProject.interest_rate_per_week || ""}
                        onChange={(e) => setNewProject({
                            ...newProject, 
                            interest_rate_per_week: e.target.value
                        })}/>
                    </div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Investment type</label>
                    <select className="select"
                        onChange={
                            (e) => setNewProject({...newProject, investment_type: e.target.value})
                        } 
                    >
                        <option value="">Select Investment Type</option>
                        {
                            investmentTypes.map(investmentType => (
                                <option value={investmentType.id} key={investmentType.name}>{investmentType.name}</option>
                                )
                            )
                        }
                    </select>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Cash on cash yield</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span>
                        <input type="text" 
                        value={newProject.cash_on_cash_yield || ""}
                        onChange={(e) => setNewProject({
                            ...newProject, 
                            cash_on_cash_yield: e.target.value
                        })}/>
                    </div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Rental yield</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span>
                        <input type="text" 
                        value={newProject.rental_yield || ""}
                        onChange={(e) => setNewProject({
                            ...newProject, 
                            rental_yield: e.target.value
                        })}/>
                    </div>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Price per fraction</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span>
                        <input type="text" 
                        value={newProject.price_per_fraction || ""}
                        onChange={(e) => setNewProject({
                            ...newProject, 
                            price_per_fraction: e.target.value
                        })}/>
                    </div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Total fractions</label>
                    <input type="text" value={newProject.total_fractions || ""}
                        onChange={(e) => setNewProject({
                            ...newProject, 
                            total_fractions: e.target.value
                        })}/>
                </div>
            </div>

            <div className="create-proj-one-field-row">
                <div className="create-proj-input-container create-proj-bundle-select-wrapper">
                    <input type="checkbox" onChange={handleDisplayBundleForm} className="create-proj-bundle-select" id="create-proj-bundle-select" />
                    <label htmlFor="create-proj-bundle-select">Include bundle</label>
                </div>
            </div>

            <Bundle
                newProject={newProject} 
                setNewProject={setNewProject} 
                handleDeleteBundleImage={handleDeleteBundleImage}
                fileName={fileName}
                setFileName={setFileName}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                handleFileChange={handleFileChange} 
                handleBundleImageChange={handleBundleImageChange}
                selectedBundleImages={selectedBundleImages} 
                setIncludePaymentPlan={setIncludePaymentPlan} 
                includeBundle={includeBundle}
                includePaymentPlan={includePaymentPlan} 
                fetchedAmenities={fetchedAmenities}
                bundles={bundles}
                setBundles={setBundles}
                payment_plan={payment_plan}
                setPaymentPlan={setPaymentPlan}
                currentBundle={currentBundle}
                setCurrentBundle={setCurrentBundle}
                setSelectedBundleImages={setSelectedBundleImages}
                selectedBundleAmenities={selectedBundleAmenities}
                setSelectedBundleAmenities={setSelectedBundleAmenities}
                handleSelectedBundleAmenities={handleSelectedBundleAmenities}
                setAmenityAmount={setAmenityAmount}
                removeAmenity={removeAmenity}
            />

            <div className="create-proj-two-fields-row proj-new-create-btn-container">
                
                <div className="create-proj-input-container">
                </div>

                <div className="create-proj-input-container create-proj-btn-container">
                    <button className="create-outline-green" onClick={cancelProjectCreation}>Cancel</button>
                    <button onClick={handleProceedToPrevPage} className="create-fill-green">Create</button>
                </div>

            </div>
        </div>
    )
}

export default InvestmentInformation
