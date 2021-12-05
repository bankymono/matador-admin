import React from 'react';
import { MdAddBox } from 'react-icons/md'
import './InvestmentInformation.css';


import 'react-datepicker/dist/react-datepicker.css'




import Bundle from '../Bundle/Bundle';
import PaymentPlan from '../PaymentPlan/PaymentPlan';
import { validatePaymentPlanInfoFields } from '../validationFunctions';

const InvestmentInformation = ({
    projectPaymentPlansInfo,
    setProjectPaymentPlansInfo,
    selectedBundleImagesError,
    selectedFileError,
    projectBundlesInfo,
    setProjectBundlesInfo,
    handleSubmit,
    projectInvestmentInfo,
    handleProjectInvestmentInfoFieldChange,
    fileName,
    selectedBundleImages,
    handleAddBundle,
    bundleAmenities,
    setBundleAmenities,
    bundleAmenitiesErrors,
    setBundleAmenitiesErrors,
    handleProceedToPrevPage, setIncludeBundle, setIncludePaymentPlan, includeBundle, includePaymentPlan }) => {


    // const [bundleAmenities, setBundleAmenities] = useState([])

    const handleDisplayBundleForm = (e) => {
        if (e.target.checked === false) {
            setIncludePaymentPlan(false);
            handleBundleImageChange()
            setProjectBundlesInfo([]);
        }

        setIncludeBundle(e.target.checked)
    }


    const handleDisplayPaymentPlanForm = (e) => {

        setIncludePaymentPlan(e.target.checked)
    }

    const handleBundleAmenitiesFieldChange = (e, index) => {
        setProjectBundlesInfo(prev => {
            return prev.map((item, id) => {
                if (id !== index) {
                    return item;
                }
                return {
                    ...item,
                    amenitiesSelect: item.amenitiesSelect? [ ...item.amenitiesSelect, {name: e.target.value ,value: ''}] : [{name: e.target.value ,value: ''}],
                    amenitiesSelectError: ''
                }
            })
        })
    }
    const handleBundleAmenitiesValueChange = (bundleIndex, amenityIndex, eventValue) => {
        setProjectBundlesInfo(prev => {
            return prev.map((item, id) => {
                if (id !== bundleIndex) {
                    return item;
                }else{
                    item.amenitiesSelect.map((amenity, index)=>{
                        if(index !== amenityIndex){
                            return amenity;
                        }
                        return amenity.value = eventValue;
                    })
                
                }
                return item;
            })
        })
    }
    const handleRemoveBundleAmenitiesInput = (bundleIndex, amenityIndex) => {
        setProjectBundlesInfo(prev => {
            return prev.map((item, id) => {
                if (id !== bundleIndex) {
                    return item;
                }else{
                    return {
                        ...item, 
                        amenitiesSelect: item.amenitiesSelect.filter((amenity, index) => index !== amenityIndex)
                    }
                }
                // return item;
            })
        })
    }
    const handleRemoveBundle = (event, index) => {
        event.preventDefault();
        setProjectBundlesInfo(prev => {
            return prev.filter((item) => item !== prev[index])
        })
    }

    const handleAddPaymentPlan = (e) => {
        e.preventDefault();
        const initialPaymentPlanState = {
            initialDepositPercent: "",
            initialDepositAmount: "",
            availablePaymentPeriod: "",
            monthlyPayment: "",
            initialDepositPercentError: "",
            initialDepositAmountError: "",
            availablePaymentPeriodError: "",
            monthlyPaymentError: "",
        }

        if (projectPaymentPlansInfo.length === 0) {
            setProjectPaymentPlansInfo(prev => [...prev, initialPaymentPlanState])
        } else {
            let isValidated = validatePaymentPlanInfoFields(
                projectPaymentPlansInfo,
                setProjectPaymentPlansInfo
            );

            if (isValidated) {
                setProjectPaymentPlansInfo(prev => [...prev, initialPaymentPlanState])
            }

        }

    }

    const handleRemovePaymentPlan = (event, index) => {
        event.preventDefault();
        setProjectPaymentPlansInfo(prev => {
            return prev.filter((item) => item !== prev[index])
        })
    }
    const encodeFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }
    const handleFileChange = async (index, event) => {
        if (event && event.target.files) {
            encodeFileToBase64(event.target.files[0])
                .then(result => {
                    setProjectBundlesInfo(prev => {
                        return prev.map((item, idx) => {
                            if (idx !== index) {
                                return item
                            }
                            return {
                                ...item,
                                deedFile: result,
                                deedFileError: ''
                            }
                        })
                    })
                })
        }
    }
    const handleDeleteBundleImage = (bundleId, imageId) => {
        let result = projectBundlesInfo[bundleId].bundlePhotos.filter((image, index) => index !== imageId);
        setProjectBundlesInfo(prev => {
            return prev.map((item, idx) => {
                if (idx !== bundleId) {
                    return item
                }
                return {
                    ...item,
                    bundlePhotos: result,
                    bundlePhotosError: result.length !== 0 ? '' : 'Field is required'
                }
            })
        })
    }

    const handleBundleImageChange = (index, event) => {
        if (event && event.target.files) {
            for (let file of event.target.files) {
                encodeFileToBase64(file)
                    .then(result => {
                        setProjectBundlesInfo(prev => {
                            return prev.map((item, idx) => {
                                if (index !== idx) {
                                    return item
                                }
                                return {
                                    ...item,
                                    bundlePhotos: item.bundlePhotos ? [...item.bundlePhotos, result] : [result],
                                    bundlePhotosError: ''
                                }
                            })
                        })
                    })
            }

        }
        else {
            setProjectBundlesInfo(prev => {
                return prev.map((item, idx) => {
                    if (prev.length !== 1 && idx !== prev.length - 1) {
                        return item
                    }
                    return {
                        ...item,
                        bundlePhotos: [],
                        bundlePhotosError: 'Field is required'
                    }
                })
            })
        }

    }

    const handleBundleInputChange = (index, event) => {
        event.preventDefault();
        event.persist();
        setProjectBundlesInfo(prev => {
            return prev.map((item, i) => {
                if (i !== index) {
                    return item
                }

                return {
                    ...item,
                    [event.target.name]: event.target.value,
                    [`${event.target.name}Error`]: ""
                }
            })
        })


    }

    const handlePaymentPlanInputChange = (index, event) => {
        event.preventDefault();
        event.persist();
        setProjectPaymentPlansInfo(prev => {
            return prev.map((item, i) => {
                if (i !== index) {
                    return item
                }

                return {
                    ...item,
                    [event.target.name]: event.target.value,
                    [`${event.target.name}Error`]: ""
                }
            })
        })
    }

    return (
        <div>
            <div className="create-investment-info-heading">Investment Information</div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Dividend maturity (in months)</label>
                    <input className={projectInvestmentInfo.dividendMaturityInputError ? "error-border" : ""}
                        type="number" name="dividendMaturity" value={projectInvestmentInfo.dividendMaturity}
                        onChange={handleProjectInvestmentInfoFieldChange} />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Funding end timestamp</label>
                    <input type="date"
                        className={projectInvestmentInfo.fundingEndTimestampInputError ? "error-border" : ""}
                        name="fundingEndTimestamp"
                        value={projectInvestmentInfo.fundingEndTimestamp}
                        onChange={handleProjectInvestmentInfoFieldChange}
                    />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Hard cap</label>
                    <input type="number"
                        className={projectInvestmentInfo.hardCapInputError ? "error-border" : ""}

                        name="hardCap"
                        value={projectInvestmentInfo.hardCap}
                        onChange={handleProjectInvestmentInfoFieldChange}
                    />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Soft cap</label>
                    <input type="number"
                        className={projectInvestmentInfo.softCapInputError ? "error-border" : ""}

                        name="softCap"
                        value={projectInvestmentInfo.softCap}
                        onChange={handleProjectInvestmentInfoFieldChange}
                    />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Holding period</label>
                    <input type='date'
                        className={projectInvestmentInfo.holdingPeriodInputError ? "error-border" : ""}

                        name="holdingPeriod"
                        value={projectInvestmentInfo.holdingPeriod}
                        onChange={handleProjectInvestmentInfoFieldChange}
                    />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Income start timestamp</label>
                    <input type='date'
                        className={projectInvestmentInfo.incomeTimestampInputError ? "error-border" : ""}

                        name="incomeTimestamp"
                        value={projectInvestmentInfo.incomeTimestamp}
                        onChange={handleProjectInvestmentInfoFieldChange}
                    />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Interest rate per week</label>
                    <div className="create-proj-input-with-prefix">
                        <span className="create-proj-input-prefix">%</span>
                        <input type="number"
                            className={projectInvestmentInfo.interestRatePerWeekInputError ? "error-border" : ""}

                            name="interestRatePerWeek"
                            value={projectInvestmentInfo.interestRatePerWeek}
                            onChange={handleProjectInvestmentInfoFieldChange}
                        /></div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Rental yield</label>
                    <div className="create-proj-input-with-prefix">
                        <span className="create-proj-input-prefix">N</span>
                        <input type="number"
                            className={projectInvestmentInfo.rentalYieldInputError ? "error-border" : ""}

                            name="rentalYield"
                            value={projectInvestmentInfo.rentalYield}
                            onChange={handleProjectInvestmentInfoFieldChange}
                        /></div>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Cash on cash yield</label>
                    <div className="create-proj-input-with-prefix">
                        <span className="create-proj-input-prefix">N</span>
                        <input type="number"
                            className={projectInvestmentInfo.cashOnCashYieldInputError ? "error-border" : ""}

                            name="cashOnCashYield"
                            value={projectInvestmentInfo.cashOnCashYield}
                            onChange={handleProjectInvestmentInfoFieldChange}
                        /></div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Total fractions</label>
                    <input type="number"
                        className={projectInvestmentInfo.totalFractionsInputError ? "error-border" : ""}

                        name="totalFractions"
                        value={projectInvestmentInfo.totalFractions}
                        onChange={handleProjectInvestmentInfoFieldChange}
                    />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Price per fraction</label>
                    <div className="create-proj-input-with-prefix">
                        <span className="create-proj-input-prefix">N</span>
                        <input type="number"
                            className={projectInvestmentInfo.pricePerFractionInputError ? "error-border" : ""}
                            name="pricePerFraction"
                            value={projectInvestmentInfo.pricePerFraction}
                            onChange={handleProjectInvestmentInfoFieldChange}
                        /></div>
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
                        {
                            projectBundlesInfo.map((item, index) => (
                                <Bundle
                                    handleRemoveBundle={handleRemoveBundle}
                                    key={`item-${index}`}
                                    theIndex={index}
                                    item={item}
                                    handleBundleInputChange={handleBundleInputChange}
                                    bundleLength={projectBundlesInfo.length}
                                    projectBundlesInfo={projectBundlesInfo}
                                    handleDeleteBundleImage={handleDeleteBundleImage}
                                    fileName={fileName}
                                    handleFileChange={handleFileChange}
                                    handleBundleImageChange={handleBundleImageChange}
                                    selectedBundleImages={selectedBundleImages}
                                    selectedFileError={selectedFileError}
                                    selectedBundleImagesError={selectedBundleImagesError}
                                    handleBundleAmenitiesFieldChange={handleBundleAmenitiesFieldChange}
                                    handleBundleAmenitiesValueChange={handleBundleAmenitiesValueChange}
                                    handleRemoveBundleAmenitiesInput={handleRemoveBundleAmenitiesInput}
                                    bundleAmenities={bundleAmenities}
                                    bundleAmenitiesErrors={bundleAmenitiesErrors}
                                    setBundleAmenitiesErrors={setBundleAmenitiesErrors}
                                    setBundleAmenities={setBundleAmenities}
                                />))
                        }
                        <button onClick={handleAddBundle} className="create-proj-add-more-buton"><span>Add Bundle</span><MdAddBox className="add-more-icon" /></button>
                    </div>
                    : null
            }
            {
                projectBundlesInfo.length >= 1 ?
                    (
                        <div className="create-proj-one-field-row">
                            <div className="create-proj-input-container create-proj-bundle-select-wrapper">
                                <input onChange={handleDisplayPaymentPlanForm} type="checkbox" className="create-proj-bundle-select" id="create-proj-bundle-payplan-select" />
                                <label htmlFor="create-proj-bundle-payplan-select">Include payment plan</label>
                            </div>
                        </div>

                    ) :
                    null
            }

            {
                includePaymentPlan ?
                    <div className="payment-plan-main-container">
                        {
                            projectPaymentPlansInfo.map((item, index) => (
                                <PaymentPlan
                                    handleRemovePaymentPlan={handleRemovePaymentPlan}
                                    key={`item-${index}`}
                                    theIndex={index}
                                    item={item}
                                    handlePaymentPlanInputChange={handlePaymentPlanInputChange}
                                    paymentPlanLength={projectPaymentPlansInfo.length}

                                />
                            ))
                        }
                        {/* <PaymentPlan />
                            <PaymentPlan /> */}
                        <button onClick={handleAddPaymentPlan} className="create-proj-add-more-buton"><span>Add Payment plan</span><MdAddBox className="add-more-icon" /></button>
                    </div>
                    : null
            }




            <div className="create-proj-two-fields-row proj-new-create-btn-container">

                <div className="create-proj-input-container">
                </div>

                <div className="create-proj-input-container create-proj-btn-container">
                    <button className="create-outline-green">Cancel</button>
                    <button onClick={handleSubmit} className="create-fill-green">Create</button>
                </div>

            </div>
        </div>
    )
}

export default InvestmentInformation
