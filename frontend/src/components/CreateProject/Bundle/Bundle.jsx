import './bundle.css';

import React, {useEffect, useState} from 'react';
import {RiUploadCloudFill} from 'react-icons/ri';

import 'react-datepicker/dist/react-datepicker.css'
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';

const Bundle = (
        {newProject, setNewProject, handleDeleteBundleImage, setPaymentPlan,
        fileName,handleFileChange, handleBundleImageChange, payment_plan,
        selectedBundleImages, setIncludePaymentPlan, includeBundle, removeAmenity, 
        includePaymentPlan, fetchedAmenities, bundles, setBundles, setAmenityAmount,
        currentBundle, setCurrentBundle, setSelectedBundleImages,
        setSelectedFile, setFileName, selectedFile, selectedBundleAmenities,
        setSelectedBundleAmenities, handleSelectedBundleAmenities}
    ) => {

    const [bundlesShowing, setBundlesShowing] = useState([]);
    const [activeBundles, setActiveBundles] = useState([]);
    const [activePaymentPlans, setActivePaymentPlans] = useState([]);

    const handleDisplayPaymentPlanForm = (bundle) => {
        if(activePaymentPlans.includes(bundle)){
            const index = activePaymentPlans.findIndex((el) => el === bundle);
            const arr = [...activePaymentPlans];
            arr.splice(index, 1);
            setActivePaymentPlans(arr);
        }else{
            const arr = [...activePaymentPlans];
            arr.push(bundle);
            setActivePaymentPlans(arr);
        }
    }

    const handleChange = (bundle, key, value) => {
        const obj = {bundle, [key]: value};
        const index = bundles.findIndex(el => el.bundle === bundle);
       
        if(index !== -1){
            const foundBundle = bundles[index];
            foundBundle[key] = value;
            const bundlesCopy = [...bundles];
            bundlesCopy.splice(index, 1, foundBundle);
            setBundles(bundlesCopy);
        }else{
            const bundlesCopy = [...bundles];
            bundlesCopy.push(obj);
            setBundles(bundlesCopy);
        }
    }

    const updatePaymentPlan = (bundle, key, value) => {
        const obj = {bundle, [key]: value};
        const index = payment_plan.findIndex(el => el.bundle === bundle);
       
        if(index !== -1){
            const foundPlan = payment_plan[index];
            foundPlan[key] = value;
            const payment_plan_copy = [...payment_plan];
            payment_plan_copy.splice(index, 1, foundPlan);
            setPaymentPlan(payment_plan_copy);
        }else{
            const payment_plan_copy = [...payment_plan];
            payment_plan_copy.push(obj);
            setPaymentPlan(payment_plan_copy);
        }
    }

    useEffect(() => {
        setBundles([])
    }, []);

    const deleteBundle = (bundle) => {
        let index = bundles.findIndex((el) => el.bundle === bundle);
        const bundlesCopy = [...bundles];
        bundlesCopy.splice(index, 1);
        setBundles(bundlesCopy);

        const activeBundlesCopy = [...activeBundles];
        index = activeBundlesCopy.findIndex((el) => el === bundle);
        activeBundlesCopy.splice(index, 1);
        setActiveBundles(activeBundlesCopy);

        const activePaymentPlansCopy = [...activePaymentPlans];
        index = activePaymentPlansCopy.findIndex((el) => el === bundle);
        activePaymentPlansCopy.splice(index, 1);
        setActivePaymentPlans(activePaymentPlansCopy);

        index = bundlesShowing.findIndex((el) => el === bundle);
        const bundlesShowingCopy = [...bundlesShowing];
        bundlesShowingCopy.splice(index, 1);
        setBundlesShowing(bundlesShowingCopy);

        const selectedBundleImagesCopy = [...selectedBundleImages];
        let arr = selectedBundleImagesCopy.filter(image => image.bundle !== bundle);
        setSelectedBundleImages(arr);

        const fileNameCopy = [...fileName];
        arr = fileNameCopy.filter(f => f.bundle !== bundle);
        setFileName(arr);

        const selectedFileCopy = [...selectedFile];
        arr = selectedFileCopy.filter(f => f.bundle !== bundle);
        setSelectedFile(arr);

        const selectedBundleAmenitiesCopy = [...selectedBundleAmenities];
        arr = selectedBundleAmenitiesCopy.filter(f => f.bundle !== bundle);
        setSelectedBundleAmenities(arr);

        const payment_plan_copy = [...payment_plan];
        arr = payment_plan_copy.filter(f => f.bundle !== bundle);
        setPaymentPlan(arr);
    }

    return (
        <div>
            {
                includeBundle && bundlesShowing.map(bundleShowing => 
                    (<div key={bundleShowing}>
                        <div className="create-investment-info-heading flex-row">
                            <span>Bundle</span>
                            <div className="collapse-show-and-delete-bundle">
                                <span className="collapse-and-show"
                                    onClick={() => {
                                        if(activeBundles.includes(bundleShowing)){
                                            const index = activeBundles.findIndex((el) => el === bundleShowing);
                                            const arr = [...activeBundles];
                                            arr.splice(index, 1);
                                            setActiveBundles(arr);
                                        }else{
                                            const arr = [...activeBundles];
                                            arr.push(bundleShowing);
                                            setActiveBundles(arr);
                                        }
                                    }}
                                >
                                    {activeBundles.includes(bundleShowing) ? "Collapse" : "View Details"}
                                </span>
                                <span 
                                    className="delete"
                                    onClick={() => deleteBundle(bundleShowing)}
                                >Delete</span>
                            </div>
                        </div>
                        
                        <div className={`${activeBundles.includes(bundleShowing) ? 'show' : 'none'}`}>
                            <div className="create-proj-two-fields-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Title</label>
                                    <input type="text"
                                        onChange={(e) => handleChange(bundleShowing, "title", e.target.value)}/>
                                </div>

                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Size</label>
                                    <input type="text" 
                                        onChange={(e) => handleChange(bundleShowing, "size", e.target.value)}/>
                                </div>
                            </div>

                            <div className="create-proj-one-field-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Project images</label>
                                    <div>
                                        <div className="create-proj-images-container">
                                            {
                                                selectedBundleImages.filter(image => image.bundle === bundleShowing).map((image, index) => {
                                                    return (
                                                        <div key={index} className="create-proj-preview-img-wrapper">
                                                            <IoCloseOutline onClick={()=>handleDeleteBundleImage(image, bundleShowing)} className="proj-create-close-icon"/>
                                                            <img className="proj-preview-img" src={image?.result} alt="rand" />
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                            <div className="proj-add-img-wrapper" 
                                                >
                                                <label 
                                                    onClick={() => setCurrentBundle(bundleShowing)}
                                                    className="proj-add-img-label" htmlFor="proj-add-img">
                                                <AiOutlinePlus className="proj-add-img" /></label>
                                                <span>
                                                    <input 
                                                        onChange={(e) => handleBundleImageChange(e)} 
                                                        multiple id="proj-add-img" 
                                                        className="proj-add-img-input" 
                                                        type="file" 
                                                        accept="image/png, image/jpeg, image/jpg" />
                                                </span>
                                            </div>
                                            
                                        </div>
                                        <div className="proj-new-accept-img-desc">Accepted file type: .jpg, .png and .jpeg</div>
                                    </div>
                                </div>
                            </div>

                            <div className="create-proj-two-fields-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Deed title</label>
                                    <input type="text" 
                                        onChange={
                                            (e) => handleChange(bundleShowing, "deed_title", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-img-name">Deed file</label>

                                    <div className="create-proj-input-with-suffix">
                                        <div className="create-proj-file-disp">{fileName.filter(el => el.bundle === bundleShowing)[0]?.fileName}</div>
                                        <div className="proj-file-save-container">
                                            <input onChange={(e) => handleFileChange(e)} className="proj-file-save" type="file" id="proj-file-save" />
                                            
                                            <label
                                                onClick={() => setCurrentBundle(bundleShowing)} 
                                                className="proj-file-save-icon-wrap" 
                                                htmlFor="proj-file-save">
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
                                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span>
                                        <input type="text" 
                                        onChange={(e) => handleChange(bundleShowing, "price", e.target.value)}/>
                                    </div>
                                </div>

                                <div className="create-proj-input-container">
                                </div>
                            </div>

                            <div className="create-proj-hr" />

                            <div className="create-investment-info-heading small-heading">Amenities</div>

                            <div className="amenities-section">
                                <h2>Add Amenity</h2>
                                <select
                                    name="amenities"
                                    onChange={(e) => handleSelectedBundleAmenities(e, bundleShowing)}
                                >
                                    <option value="" key="default-amenity">Select Amenities</option>
                                    {
                                        fetchedAmenities.map(amenity => (
                                            <option value={amenity.name} key={amenity.id}>{amenity.name}</option>
                                        ))
                                    }

                                </select>
                            </div>

                            {
                                selectedBundleAmenities.filter(el => el.bundle === bundleShowing).map(selectedAmenity => (
                                    <div className="selected-amenity" key={selectedAmenity.name}>
                                        <strong>{selectedAmenity.name}</strong>
                                        <div className="amenity-amount-and-delete">
                                            <input 
                                                type="number" 
                                                placeholder="Input Amount" 
                                                defaultValue={selectedAmenity.value}
                                                onChange={
                                                    (e) => setAmenityAmount("bundle", selectedAmenity.name, e.target.value, bundleShowing)
                                                }
                                            />
                                            <strong
                                                onClick={() => removeAmenity("bundle", selectedAmenity, bundleShowing)}
                                            >Delete</strong>
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="create-proj-one-field-row">
                                <div className="create-proj-input-container create-proj-bundle-select-wrapper"
                                    onClick={(e) => handleDisplayPaymentPlanForm(bundleShowing)}>
                                    <input
                                        checked={activePaymentPlans.includes(bundleShowing)} 
                                        type="radio"  
                                        className="create-proj-bundle-select" 
                                        id="create-proj-bundle-payplan-select" 
                                    />
                                    <label htmlFor="create-proj-bundle-payplan-select">Include payment plan</label>
                                </div>
                            </div>
                        </div>

                        <div className={`proj-new-payment-plan-form-wrapper ${activePaymentPlans.includes(bundleShowing) ? 'show' : 'none'}`}>
                            <div className="create-investment-info-heading small-heading">Payment Plan</div>

                            <div className="create-proj-two-fields-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-img-name">Initial deposit percentage</label>
                                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">%</span>
                                        <input type="text"
                                            onChange={(e) => updatePaymentPlan(bundleShowing, "initial_deposit_in_percentage", e.target.value)} 
                                        />
                                    </div>
                                </div>

                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-img-name">Initial deposit amount</label>
                                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span>
                                        <input type="text"
                                            onChange={(e) => updatePaymentPlan(bundleShowing, "initial_deposit_in_value", e.target.value)} 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="create-proj-two-fields-row">
                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-name">Available payment period in months</label>
                                    <input type="text"
                                        onChange={(e) => updatePaymentPlan(bundleShowing, "payment_period_in_months", e.target.value)} 
                                    />
                                </div>

                                <div className="create-proj-input-container">
                                    <label className="create-proj-input-label" htmlFor="proj-img-name">Monthly payment</label>
                                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span>
                                        <input type="text"
                                            onChange={(e) => updatePaymentPlan(bundleShowing, "monthly_payment", e.target.value)} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>                
                    <div className="create-proj-hr" />
                    </div> ))               
            }


            {
                includeBundle && <span 
                    className="add-new-bundle"
                    onClick={() => {
                            setBundlesShowing([...bundlesShowing, bundlesShowing[(bundlesShowing.length || 1) - 1] + 1 || 1])
                            setBundles([...bundles, {bundle: bundlesShowing[(bundlesShowing.length || 1) - 1] + 1 || 1}])
                            setPaymentPlan([
                                ...payment_plan, 
                                {
                                    bundle: bundlesShowing[(bundlesShowing.length || 1) - 1] + 1 || 1,
                                    initial_deposit_in_percentage: '',
                                    initial_deposit_in_value: '',
                                    payment_period_in_months: '',
                                    monthly_payment: '' 
                                }
                            ])
                        }
                    }>
                        Add New Bundle
                </span>
            }
        </div>
    )
}

export default Bundle
