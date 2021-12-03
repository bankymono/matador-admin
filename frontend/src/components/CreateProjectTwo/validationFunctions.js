export const validateProjectInfoFields = (projectInfo, setProjectInfo , projectAmenitiesForm, selectedProjectImages,
         setSelectedProjectImagesError) => {
    
    let imagesError = '';

    let projectNameInputError='';
    let completedTimestampInputError='';
    let buildingSizeInputError = '';
    let constructedByInputError = '';
    let descriptionInputError = '';
    let landTitleInputError = '';
    let buildingTypeInputError = '';
    let projectCategoryInputError = '';
    let projectStatusInputError = '';
    let evaluationInputError = '';
    let totalUnitsInputError = '';
    let projectAddressInputError = '';
    let longitudeInputError = '';
    let latitudeInputError = '';
    let amenitiesSelectInputError = '';

    let {
            projectName, completedTimestamp, buildingSize, constructedBy,
            description, landTitle, buildingType, projectCategory,
            projectStatus, evaluation, totalUnits, projectAddress,
            longitude, latitude, amenitiesSelect
        } = projectInfo 

        if(projectName.trim() === ''){
            projectNameInputError = 'Field is required';
        }

        if(completedTimestamp.trim() === ''){
            completedTimestampInputError = 'Field is required'
        }

        if(buildingSize.trim() === ''){
            buildingSizeInputError = 'Field is required'
        }

        if(constructedBy.trim() === ''){
            constructedByInputError = 'Field is required'
        }

        if(description.trim() === ''){
            descriptionInputError = 'Field is required'
        }

        if(landTitle.trim() === ''){
            landTitleInputError = 'Field is required'
        }

        if(buildingType.trim() === ''){
            buildingTypeInputError = 'Field is required'
        }

        if(projectCategory.trim() === ''){
            projectCategoryInputError = 'Field is required'
        }

        if(projectStatus.trim() === ''){
            projectStatusInputError = 'Field is required'
        }

        if(evaluation.trim() === ''){
            evaluationInputError = 'Field is required'
        }

        if(totalUnits.trim() === ''){
            totalUnitsInputError = 'Field is required'
        }

        if(projectAddress.trim() === ''){
            projectAddressInputError = 'Field is required'
        }

        if(longitude.trim() === ''){
            longitudeInputError = 'Field is required'
        }

        if(latitude.trim() === ''){
            latitudeInputError = 'Field is required'
        }

        if(projectAmenitiesForm.length === 0 && amenitiesSelect.trim() === ''){
            amenitiesSelectInputError = 'Field is required'
        }

        if(selectedProjectImages.length === 0){
            imagesError = 'At least one image is required';
        }

        if(projectNameInputError || completedTimestampInputError || buildingSizeInputError || constructedByInputError
            || descriptionInputError || landTitleInputError || buildingTypeInputError || projectCategoryInputError
            || projectStatusInputError || evaluationInputError || totalUnitsInputError || projectAddressInputError
            || longitudeInputError || latitudeInputError || amenitiesSelectInputError || imagesError){

                setProjectInfo(prev => ({
                    ...prev,
                    projectNameInputError,
                    completedTimestampInputError,
                    buildingSizeInputError,
                    constructedByInputError,
                    descriptionInputError,
                    landTitleInputError,
                    buildingTypeInputError,
                    projectCategoryInputError,
                    projectStatusInputError,
                    evaluationInputError,
                    totalUnitsInputError,
                    projectAddressInputError,
                    longitudeInputError,
                    latitudeInputError,
                    amenitiesSelectInputError
                }))

                setSelectedProjectImagesError(imagesError)

                return false;
            }
        return true
}

export const validateProjectAmenities = (projectAmenitiesForm, projectAmenitiesFormErrors, setProjectAmenitiesFormErrors) => {
    let amenitiesErrors = [...projectAmenitiesFormErrors];

    for(let i = 0; i < projectAmenitiesForm.length; ++i){
        if(Object.values(projectAmenitiesForm[i])[0] === ""){
            amenitiesErrors[i][Object.keys(projectAmenitiesForm[i])] = "Field is required"
        }
    }

    if(amenitiesErrors.some((item)=>{
        return (Object.values(item)[0] !== null);
    })){
        setProjectAmenitiesFormErrors(amenitiesErrors)
        return false;
    }

    return true;
}


export const validateProjectInvestmentInfoFields = (projectInvestmentInfo, setProjectInvestmentInfo ) => {

    let dividendMaturityInputError="";
    let fundingEndTimestampInputError ="";
    let hardCapInputError="";
    let softCapInputError="";
    let holdingPeriodInputError="";
    let incomeTimestampInputError="";
    let interestRatePerWeekInputError="";
    let rentalYieldInputError="";
    let cashOnCashYieldInputError="";
    let totalFractionsInputError = "";
    let pricePerFractionInputError = "";
    
    let {
        dividendMaturity,fundingEndTimestamp,hardCap, softCap,
        holdingPeriod, incomeTimestamp, interestRatePerWeek, rentalYield,
        cashOnCashYield, totalFractions, pricePerFraction
    } = projectInvestmentInfo;

    if(dividendMaturity.trim() === ''){
        dividendMaturityInputError = 'Field is required'
    }

    if(fundingEndTimestamp.trim() === ''){
        fundingEndTimestampInputError = 'Field is required'
    }

    if(hardCap.trim() === ''){
        hardCapInputError = 'Field is required'
    }

    if(softCap.trim() === ''){
        softCapInputError = 'Field is required'
    }

    if(holdingPeriod.trim() === ''){
        holdingPeriodInputError = 'Field is required'
    }

    if(incomeTimestamp.trim() === ''){
        incomeTimestampInputError = 'Field is required'
    }

    if(interestRatePerWeek.trim() === ''){
        interestRatePerWeekInputError = 'Field is required'
    }

    if(rentalYield.trim() === ''){
        rentalYieldInputError = 'Field is required'
    }

    if(cashOnCashYield.trim() === ''){
        cashOnCashYieldInputError = 'Field is required'
    }

    if(totalFractions.trim() === ''){
        totalFractionsInputError = 'Field is required'
    }

    if(pricePerFraction.trim() === ''){
        pricePerFractionInputError = 'Field is required'
    }

    if(dividendMaturityInputError || fundingEndTimestampInputError ||hardCapInputError 
        || softCapInputError || holdingPeriodInputError || incomeTimestampInputError
        || interestRatePerWeekInputError || rentalYieldInputError || cashOnCashYieldInputError
        || totalFractionsInputError || pricePerFractionInputError){
            
            setProjectInvestmentInfo(prev => ({
                ...prev,
                dividendMaturityInputError,
                fundingEndTimestampInputError,
                hardCapInputError,
                softCapInputError,
                holdingPeriodInputError,
                incomeTimestampInputError,
                interestRatePerWeekInputError,
                rentalYieldInputError,
                cashOnCashYieldInputError,
                totalFractionsInputError,
                pricePerFractionInputError
            }))

            return false;
        }
        return true;
}

export const validateBundleInfoFields = (
    bundleAmenities,
    projectBundlesInfo, setProjectBundlesInfo, selectedFile, setSelectedFileError,
    selectedBundleImages, setSelectedBundleImagesError) => {
    let titleError = '';
    let sizeError = '';
    let deedTitleError = '';
    let deedFileError = '';
    let bundlePhotosError = '';
    let priceError = '';
    let fileError = '';
    let bundleImagesError = '';
    let amenitiesSelectError = '';
        console.log(projectBundlesInfo);
    let {title, size, deedTitle, deedFile, price, amenitiesSelect, bundlePhotos} = projectBundlesInfo[projectBundlesInfo.length - 1]

    if(!title || title.trim()===''){
        titleError = "Field is required"
    }

    if(!size || size.trim() === ''){
        sizeError = "Field is required"
    }

    if(!deedTitle || deedTitle.trim() === ''){
        deedTitleError = 'Field is required'
    }

    if(!deedFile || deedFile.trim() === '' ){
        deedFileError = 'Field is required'
    }

    if(!bundlePhotos || (bundlePhotos && bundlePhotos.length === 0)){
        bundlePhotosError = 'Field is required'
    }

    if(!price || price.trim() === ''){
        priceError = "Field is required"
    }

    

    if(bundleAmenities && bundleAmenities.length === 0 && amenitiesSelect.trim() === ""){
        amenitiesSelectError= "Field is required"
    }

    if(titleError || sizeError || deedTitleError || priceError || fileError || bundleImagesError || amenitiesSelectError){
        setProjectBundlesInfo(prev=>{

            return prev.map((item,index) => {
                if(index !== projectBundlesInfo.length - 1){
                    return item;
                }

                return {
                    ...item,
                    sizeError,
                    titleError,
                    deedTitleError,
                    deedFileError,
                    priceError,
                    amenitiesSelectError,
                    bundlePhotosError
                }
            })
        })

        if(setSelectedFileError){
            setSelectedFileError(fileError);
        }
        if(setSelectedBundleImagesError){
            setSelectedBundleImagesError(bundleImagesError)
        }

        return false;
    }

    return true

}

export const validatePaymentPlanInfoFields = (
    projectPaymentPlansInfo, setProjectPaymentPlansInfo) => {

    let initialDepositPercentError = '';
    let initialDepositAmountError = '';
    let availablePaymentPeriodError = '';
    let monthlyPaymentError = '';
 

    let {initialDepositPercent, initialDepositAmount, availablePaymentPeriod, monthlyPayment } = projectPaymentPlansInfo[projectPaymentPlansInfo.length - 1]

    if(initialDepositPercent.trim() === ''){
        initialDepositPercentError = "Field is required"
    }

    if(initialDepositAmount.trim() === ''){
        initialDepositAmount = "Field is required"
    }

    if(availablePaymentPeriod.trim() === ''){
        availablePaymentPeriodError = 'Field is required'
    }

    if(monthlyPayment.trim() === ''){
        monthlyPaymentError = "Field is required"
    }


    if(initialDepositPercentError || initialDepositAmountError || availablePaymentPeriodError || monthlyPaymentError){
        setProjectPaymentPlansInfo(prev=>{

            return prev.map((item,index) => {
                if(index !== projectPaymentPlansInfo.length - 1){
                    return item;
                }

                return {
                    ...item,
                    initialDepositPercentError,
                    initialDepositAmountError,
                    availablePaymentPeriodError,
                    monthlyPaymentError
                }
            })
        })


        return false;
    }

    return true

}

export const validateBundleAmenities = (bundleAmenities, bundleAmenitiesErrors, setBundleAmenitiesErrors) => {
    let amenitiesErrors = [...bundleAmenitiesErrors];

    for(let i = 0; i < bundleAmenities.length; ++i){
        if(Object.values(bundleAmenities[i])[0] === ""){
            amenitiesErrors[i][Object.keys(bundleAmenities[i])] = "Field is required"
        }
    }

    if(amenitiesErrors.some((item)=>{
        return (Object.values(item)[0] !== null);
    })){
        setBundleAmenitiesErrors(amenitiesErrors)
        return false;
    }

    return true;
}

export const validateArrayOfObjects = (arrayToBeValidated) => {
    let valid = []
    arrayToBeValidated.forEach((obj)=>{
        Object.keys(obj).forEach((field)=>{
            return obj[`${field}`] === '' || !obj[`${field}`] ?
            valid.push(obj[`${field}`]) : null;
        });
        return valid;
    });
    return valid;
}  