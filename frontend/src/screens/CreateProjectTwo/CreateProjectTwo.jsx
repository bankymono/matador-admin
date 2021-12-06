import React from 'react';
import { useState } from 'react';
import ProjectInformation from '../../components/CreateProjectTwo/ProjectInformation/ProjectInformation'
import InvestmentInformation from '../../components/CreateProjectTwo/InvestmentInformation/InvestmentInformation'
import Header from '../../components/Header/Header';

import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './CreateProjectTwo.css';

import { 
    initialProjectInfoState, 
    initialProjectInvestmentInfoState } from '../../components/CreateProjectTwo/initialVariables';
import {
    validateProjectInfoFields,
    validateProjectAmenities,
    validateProjectInvestmentInfoFields,
    validateBundleInfoFields,
    validatePaymentPlanInfoFields
} from '../../components/CreateProjectTwo/validationFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { createProject } from '../../redux/actions/projectActions';

const CreateProject = ({ arrLinks }) => {
    const [currentPage, setCurrentPage] = useState("Create Equity Based Project");
    // for changing the page of the form
    const [formStep, setFormStep] = useState(1);
    const [selectedProjectImages, setSelectedProjectImages] = useState([]);
    const [selectedProjectImagesError, setSelectedProjectImagesError] = useState('');
    const [selectedBundleImages, setSelectedBundleImages] = useState([]);
    const [selectedBundleImagesError, setSelectedBundleImagesError] = useState('');
    const [bundleAmenities, setBundleAmenities] = useState([])
    const [bundleAmenitiesErrors, setBundleAmenitiesErrors] = useState([])
    const [selectedFile, setSelectedFile] = useState('');
    const [selectedFileError, setSelectedFileError] = useState('');
    const [projectInfo, setProjectInfo] = useState(initialProjectInfoState);
    const [projectInvestmentInfo, setProjectInvestmentInfo] = useState(initialProjectInvestmentInfoState);
    const [projectBundlesInfo, setProjectBundlesInfo] = useState([]);
    const [projectPaymentPlansInfo, setProjectPaymentPlansInfo] = useState([]);
    const [projectAmenitiesForm, setProjectAmenitiesForm] = useState([])
    const [projectAmenitiesFormErrors, setProjectAmenitiesFormErrors] = useState([])
    const [fileName, setFileName] = useState([]);
    const [includeBundle, setIncludeBundle] = useState(false);
    const [includePaymentPlan, setIncludePaymentPlan] = useState(false);
    
    const user = useSelector(state => state.adminLogin);
    const dispatch = useDispatch();

    const handleProjectImageChange = (e) => {
        if (e.target.files) {

            for (let file of e.target.files) {
                encodeFileToBase64(file)
                    .then(result => {
                        setSelectedProjectImages(prev => [...prev, result])
                    })
            }
            setSelectedProjectImagesError('');
        }
    }
    const handleDeleteProjectImage = (id) => {
        setSelectedProjectImages(prev => [...prev.filter((image, index) => id !== index)])
    }
    const encodeFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }
    const handleAddBundle = (e) => {
        e.preventDefault();
        const initialBundleState = {
            title: "",
            size: "",
            deedTitle: "",
            price: "",
            amenitiesSelect: [],
            bundlePhotos: "",
            deedFile: "",
            deedFileError: "",
            bundlePhotosError: "",
            titleError: "",
            sizeError: "",
            deedTitleError: "",
            priceError: "",
            amenitiesSelectError: ""
        }
        if (projectBundlesInfo.length === 0) {
            setProjectBundlesInfo(prev => [...prev, initialBundleState])
        } else {
            let isValidated = validateBundleInfoFields(
                projectBundlesInfo,
                setProjectBundlesInfo,
            );

            if (isValidated) {
                setProjectBundlesInfo(prev => {
                    return prev.map((item, id) => {
                        if (prev.length !== 1 && id !== prev.length - 1) {
                            return item
                        }

                        return {
                            ...item,

                        }
                    })
                })
                setProjectBundlesInfo(prev => [...prev, initialBundleState])
            }

        }

    }
    const handleProceedToNextPage = (e) => {
        e.preventDefault();

        let isProjectInfoValid = validateProjectInfoFields(
            projectInfo,
            setProjectInfo,
            projectAmenitiesForm,
            selectedProjectImages,
            setSelectedProjectImagesError)

        let isProjectAmenitiesValid = validateProjectAmenities(
            projectAmenitiesForm,
            projectAmenitiesFormErrors,
            setProjectAmenitiesFormErrors
        )

        if (isProjectInfoValid && isProjectAmenitiesValid) {
            setFormStep(prevStep => prevStep + 1)
            window.scrollTo(0, 0);
        } else {
            alert('there are invalid fields');
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let isProjectInvestmentsInfoValid = validateProjectInvestmentInfoFields(
            projectInvestmentInfo,
            setProjectInvestmentInfo);
        let isProjectBundlesInfoValid = projectBundlesInfo.length !== 0 ? validateBundleInfoFields(
            projectBundlesInfo,
            setProjectBundlesInfo,
        )
            : false;
        let isProjectPaymentPlansInfoValid = projectPaymentPlansInfo.length !== 0 ? validatePaymentPlanInfoFields(
            projectPaymentPlansInfo,
            setProjectPaymentPlansInfo
        )
            : false;

        if (!isProjectInvestmentsInfoValid) {
            alert('Investment has invalid fields');
        } else if (isProjectInvestmentsInfoValid && !includeBundle) {
            //api call without bundle
            let projectInvestmentInfoWithoutError = {};
            let projectInfoWithoutError = {};

            // Remove error keys from project info
            Object.keys(projectInfo)
                .forEach(((field) => {
                    if(selectedProjectImages){
                        let photos = [];
                        selectedProjectImages.forEach((photo, index)=>{
                            photos.push({
                                id : index + 1,
                                photo: photo,
                                created_at: `${new Date().toLocaleString()}`
                            });
                        });
                        projectInfoWithoutError['photos'] = photos;
                    }
                    if (!field.toLocaleLowerCase().includes('error')) {
                                             
                            if(field==='projectName'){
                                return projectInfoWithoutError['name'] = projectInfo[`${field}`];
                            }else if(field === 'amenitiesSelect'){
                                return projectInfoWithoutError['amenities'] = projectAmenitiesForm;
                            }else if(field === 'projectCategory'){
                                return projectInfoWithoutError['category'] = projectInfo[`${field}`];
                            }else if(field === 'projectStatus'){
                                return projectInfoWithoutError['status'] = projectInfo[`${field}`];
                            }else if(field === 'projectAddress'){
                                return projectInfoWithoutError['location_description'] = projectInfo[`${field}`];
                            }else{
                                return projectInfoWithoutError[`${field.replace(/[A-Z]/g, "_$&").toLowerCase()}`] = projectInfo[`${field}`];                                
                            }
                    }
                    return projectInfoWithoutError;
                }));
            // Remove error keys from investmentInfo
            Object.keys(projectInvestmentInfo)
                .forEach(((field) => {
                    if (!field.toLocaleLowerCase().includes('error')) {
                        if (field === 'dividendMaturity') {
                            return projectInvestmentInfoWithoutError[`dividend_maturity_in_months`] = projectInvestmentInfo[`${field}`];
                        } else if (field === 'holdingPeriod') {
                            return projectInvestmentInfoWithoutError[`holding_period_in_months`] = projectInvestmentInfo[`${field}`];
                        } else if (field === 'incomeTimestamp') {
                            return projectInvestmentInfoWithoutError[`income_start_timestamp`] = projectInvestmentInfo[`${field}`];
                        } else {
                            return projectInvestmentInfoWithoutError[`${field.replace(/[A-Z]/g, "_$&").toLowerCase()}`] = projectInvestmentInfo[`${field}`];
                        }
                    }
                    return projectInvestmentInfoWithoutError;
                }));
            
            // console.log('good to go without bundle', {...projectInfoWithoutError, ...projectInvestmentInfoWithoutError});
                dispatch(createProject({...projectInfoWithoutError, ...projectInvestmentInfoWithoutError}));
        } else if (isProjectInvestmentsInfoValid && includeBundle && projectBundlesInfo.length === 0) {
            alert('Bundle section is checked hence, must be completed');
        } else if (isProjectInvestmentsInfoValid && includeBundle && projectBundlesInfo.length > 0 && !isProjectBundlesInfoValid) {
            alert('Bundle contains invalid fields');
        } else if (isProjectInvestmentsInfoValid && includeBundle && projectBundlesInfo.length > 0 && !includePaymentPlan) {
            alert('You are yet to include payment plan');
        } else if (isProjectInvestmentsInfoValid && includeBundle && projectBundlesInfo.length > 0 && includePaymentPlan && projectPaymentPlansInfo.length === 0) {
            alert('please add a payment plan');
        } else if (isProjectInvestmentsInfoValid && includeBundle && projectBundlesInfo.length > 0 && includePaymentPlan && projectPaymentPlansInfo.length > 0 && !isProjectPaymentPlansInfoValid) {
            alert('Payment plan has invalid field');
        } else {
            //api call with bundle
            let projectInvestmentInfoWithoutError = {};
            let projectInfoWithoutError = {};
            let projectBundlesInfoWithoutError = [];
            let projectPaymentPlansInfoWithoutError = [];

            // Remove error keys from project info
            Object.keys(projectInfo)
                .forEach(((field) => {
                    if(selectedProjectImages){
                        let photos = [];
                        selectedProjectImages.forEach((photo, index)=>{
                            photos.push({
                                id : index + 1,
                                photo: photo,
                                created_at: `${new Date().toLocaleString()}`
                            });
                        });
                        projectInfoWithoutError['photos'] = photos;
                    }
                    if (!field.toLocaleLowerCase().includes('error')) {
                                             
                            if(field==='projectName'){
                                return projectInfoWithoutError['name'] = projectInfo[`${field}`];
                            }else if(field === 'amenitiesSelect'){
                                return projectInfoWithoutError['amenities'] = projectAmenitiesForm;
                            }else if(field === 'projectCategory'){
                                return projectInfoWithoutError['category'] = projectInfo[`${field}`];
                            }else if(field === 'projectStatus'){
                                return projectInfoWithoutError['status'] = projectInfo[`${field}`];
                            }else if(field === 'projectAddress'){
                                return projectInfoWithoutError['location_description'] = projectInfo[`${field}`];
                            }else{
                                return projectInfoWithoutError[`${field.replace(/[A-Z]/g, "_$&").toLowerCase()}`] = projectInfo[`${field}`];                                
                            }

                    }
                    return projectInfoWithoutError;
                }));
            // Remove error keys from investmentInfo
            Object.keys(projectInvestmentInfo)
                .forEach(((field) => {
                    if (!field.toLocaleLowerCase().includes('error')) {
                        if (field === 'dividendMaturity') {
                            return projectInvestmentInfoWithoutError[`dividend_maturity_in_months`] = projectInvestmentInfo[`${field}`];
                        } else if (field === 'holdingPeriod') {
                            return projectInvestmentInfoWithoutError[`holding_period_in_months`] = projectInvestmentInfo[`${field}`];
                        } else if (field === 'incomeTimestamp') {
                            return projectInvestmentInfoWithoutError[`income_start_timestamp`] = projectInvestmentInfo[`${field}`];
                        } else {
                            return projectInvestmentInfoWithoutError[`${field.replace(/[A-Z]/g, "_$&").toLowerCase()}`] = projectInvestmentInfo[`${field}`];
                        }
                    }
                    return projectInvestmentInfoWithoutError;
                }));
            // Remove error keys from bundlesInfo
            projectBundlesInfo.forEach((bundle) => {
                let eachBundle = {}
                Object.keys(bundle)
                    .forEach(((field) => {
                        if (!field.toLocaleLowerCase().includes('error')) {
                            if (field === 'amenitiesSelect') {
                                return eachBundle['amenities'] = bundle[`${field}`];
                            } else if (field === 'bundlePhotos') {
                                eachBundle['photos'] = []
                                bundle.bundlePhotos.forEach((photo, index) => {
                                    return eachBundle['photos'].push({
                                        id: index + 1,
                                        photo: photo,
                                        created_at: `${new Date().toLocaleString()}`
                                    })
                                })
                            }else {
                                return eachBundle[`${field.replace(/[A-Z]/g, "_$&").toLowerCase()}`] = bundle[`${field}`];
                            }
                        }
                    }));        
                return projectBundlesInfoWithoutError.push(eachBundle);
            })

            // Remove error keys from paymentPlansInfo
            projectPaymentPlansInfo.forEach((plan) => {
                let eachPaymentPlan = {}

                Object.keys(plan)
                    .forEach(((field) => {
                        if (!field.toLocaleLowerCase().includes('error')) {
                            if (field === 'initialDepositPercent') {
                                return eachPaymentPlan[`initial_deposit_in_percentage`] = plan[`${field}`];
                            } else if (field === 'initialDepositAmount') {
                                return eachPaymentPlan[`initial_deposit_in_value`] = plan[`${field}`];
                            } else if (field === 'monthlyPayment') {
                                return eachPaymentPlan[`monthly_payment`] = plan[`${field}`];
                            } else if (field === 'availablePaymentPeriod') {
                                return eachPaymentPlan[`payment_period_in_months`] = plan[`${field}`];
                            }
                        }
                    }));
                return projectPaymentPlansInfoWithoutError.push(eachPaymentPlan);
            })
            let data = {
                ...projectInfoWithoutError,
                ...projectInvestmentInfoWithoutError,
                bundle: projectBundlesInfoWithoutError,
                payment_plan: projectPaymentPlansInfoWithoutError
            }
            // console.log('good to go with bundle', data);

        }
    }

    const handleProceedToPrevPage = () => {
        setFormStep(prevStep => prevStep - 1)
        window.scrollTo(0, 0);
    }

    const handleProjectInfoFieldChange = (e) => {
        e.preventDefault();
        if(e.target.name === 'landTitle'){
            setProjectInfo(prev => ({
                ...prev,
                [e.target.name]: {
                    name: e.target.value,
                    created_by: {
                        first_name: user.adminInfo.user.first_name,
                        last_name : user.adminInfo.user.last_name
                    },
                    last_updated_by : null,
                    description: "This land comes with a c of o"
                },
            }))
        }else if(e.target.name === 'buildingType'){
            setProjectInfo(prev => ({
                ...prev,
                [e.target.name]: {
                    name: e.target.value,
                    created_by: {
                        first_name: user.adminInfo.user.first_name,
                        last_name : user.adminInfo.user.last_name
                    },
                }
            }))
        } else if(e.target.name === 'projectCategory'){
            setProjectInfo(prev => ({
                ...prev,
                [e.target.name]: {
                    name: e.target.value,
                    created_by: {
                        first_name: user.adminInfo.user.first_name,
                        last_name : user.adminInfo.user.last_name
                    },
                }
            }))
        }else if(e.target.name === 'projectStatus'){
            setProjectInfo(prev => ({
                ...prev,
                [e.target.name]: {
                    name: e.target.value,
                    created_by: {
                        first_name: user.adminInfo.user.first_name,
                        last_name : user.adminInfo.user.last_name
                    },
                }
            }))
        }else{
            setProjectInfo(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }
        
        switch (e.target.name) {
            case 'projectName':
                setProjectInfo(prev => ({
                    ...prev,
                    projectNameInputError: ''
                }))
                break;
            case 'completedTimestamp':
                setProjectInfo(prev => ({
                    ...prev,
                    completedTimestampInputError: ''
                }))
                break;
            case 'buildingSize':
                setProjectInfo(prev => ({
                    ...prev,
                    buildingSizeInputError: ''
                }))
                break;
            case 'constructedBy':
                setProjectInfo(prev => ({
                    ...prev,
                    constructedByInputError: ''
                }))
                break;
            case 'description':
                setProjectInfo(prev => ({
                    ...prev,
                    descriptionInputError: ''
                }))
                break;
            case 'landTitle':
                setProjectInfo(prev => ({
                    ...prev,
                    landTitleInputError: ''
                }))
                break;
            case 'buildingType':
                setProjectInfo(prev => ({
                    ...prev,
                    buildingTypeInputError: ''
                }))
                break;

            case 'projectCategory':
                setProjectInfo(prev => ({
                    ...prev,
                    projectCategoryInputError: ''
                }))
                break;

            case 'projectStatus':
                setProjectInfo(prev => ({
                    ...prev,
                    projectStatusInputError: ''
                }))
                break;

            case 'evaluation':
                setProjectInfo(prev => ({
                    ...prev,
                    evaluationInputError: ''
                }))
                break;

            case 'totalUnits':
                setProjectInfo(prev => ({
                    ...prev,
                    totalUnitsInputError: ''
                }))
                break;

            case 'projectAddress':
                setProjectInfo(prev => ({
                    ...prev,
                    projectAddressInputError: ''
                }))
                break;

            case 'longitude':
                setProjectInfo(prev => ({
                    ...prev,
                    longitudeInputError: ''
                }))
                break;

            case 'latitude':
                setProjectInfo(prev => ({
                    ...prev,
                    latitudeInputError: ''
                }))
                break;

            case 'amenitiesSelect':
                setProjectInfo(prev => ({
                    ...prev,
                    amenitiesSelectInputError: ''
                }))
                break;
            default:
                return null
        }

    }


    const handleProjectAmenitiesFieldChange = (e) => {
        setProjectInfo(prev => ({
            ...prev,
            amenitiesSelect: '',
            amenitiesSelectInputError: ''
        }))

        const amenitiesFormState = {
            [e.target.value]: "",
        }

        const amenitiesErrors = {
            [e.target.value]: null
        }

        setProjectAmenitiesForm(prev => ([...prev, amenitiesFormState]));
        setProjectAmenitiesFormErrors(prev => ([...prev, amenitiesErrors]));


    }


    const handleProjectInvestmentInfoFieldChange = (e) => {
        e.preventDefault();

        setProjectInvestmentInfo(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))


        switch (e.target.name) {
            case 'dividendMaturity':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    dividendMaturityInputError: ''
                }))
                break;
            case 'fundingEndTimestamp':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    fundingEndTimestampInputError: ''
                }))
                break;
            case 'hardCap':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    hardCapInputError: ''
                }))
                break;
            case 'softCap':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    softCapInputError: ''
                }))
                break;
            case 'holdingPeriod':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    holdingPeriodInputError: ''
                }))
                break;
            case 'incomeTimestamp':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    incomeTimestampInputError: ''
                }))
                break;
            case 'interestRatePerWeek':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    interestRatePerWeekInputError: ''
                }))
                break;

            case 'rentalYield':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    rentalYieldInputError: ''
                }))
                break;

            case 'cashOnCashYield':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    cashOnCashYieldInputError: ''
                }))
                break;

            case 'totalFractions':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    totalFractionsInputError: ''
                }))
                break;

            case 'pricePerFraction':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    pricePerFractionInputError: ''
                }))
                break;


            default:
                return null
        }

    }




    switch (formStep) {
        case 1:
            return (
                <div className="create-project-outer-wrapper">
                    <SideBar setCurrentPage={setCurrentPage} />

                    <div className="header-and-center-container">
                        <Header />
                        <SubNav currentPage={currentPage} arrLinks={arrLinks} />
                        <div className="create-project-container">
                            <ProjectInformation
                                projectInfo={projectInfo}
                                handleProjectInfoFieldChange={handleProjectInfoFieldChange}
                                projectAmenitiesForm={projectAmenitiesForm}
                                projectAmenitiesFormErrors={projectAmenitiesFormErrors}
                                setProjectAmenitiesForm={setProjectAmenitiesForm}
                                setProjectAmenitiesFormErrors={setProjectAmenitiesFormErrors}
                                handleProjectAmenitiesFieldChange={handleProjectAmenitiesFieldChange}

                                selectedProjectImages={selectedProjectImages}
                                selectedProjectImagesError={selectedProjectImagesError}
                                handleDeleteProjectImage={handleDeleteProjectImage}
                                handleProjectImageChange={handleProjectImageChange}
                                handleProceedToNextPage={handleProceedToNextPage}
                            />

                        </div>
                    </div>
                </div>
            )
        case 2:
            return (
                <div className="create-project-outer-wrapper">
                    <SideBar setCurrentPage={setCurrentPage} />

                    <div className="header-and-center-container">
                        <Header />
                        <SubNav currentPage={currentPage} arrLinks={arrLinks} />
                        <div className="create-project-container">
                            <InvestmentInformation
                                projectInvestmentInfo={projectInvestmentInfo}
                                handleProjectInvestmentInfoFieldChange={handleProjectInvestmentInfoFieldChange}
                                projectBundlesInfo={projectBundlesInfo}
                                setProjectBundlesInfo={setProjectBundlesInfo}
                                projectPaymentPlansInfo={projectPaymentPlansInfo}
                                setProjectPaymentPlansInfo={setProjectPaymentPlansInfo}
                                selectedBundleImagesError={selectedBundleImagesError}
                                setSelectedBundleImagesError={setSelectedBundleImagesError}

                                selectedFile={selectedFile}
                                selectedBundleImages={selectedBundleImages}
                                setSelectedBundleImages={setSelectedBundleImages}
                                fileName={fileName}
                                setFileName={setFileName}
                                includeBundle={includeBundle}
                                setIncludeBundle={setIncludeBundle}
                                includePaymentPlan={includePaymentPlan}
                                setIncludePaymentPlan={setIncludePaymentPlan}
                                handleProceedToPrevPage={handleProceedToPrevPage}
                                handleSubmit={handleSubmit}
                                selectedFileError={selectedFileError}
                                setSelectedFileError={setSelectedFileError}
                                setSelectedFile={setSelectedFile}
                                bundleAmenities={bundleAmenities}
                                setBundleAmenities={setBundleAmenities}
                                handleAddBundle={handleAddBundle}
                                bundleAmenitiesErrors={bundleAmenitiesErrors}
                                setBundleAmenitiesErrors={setBundleAmenitiesErrors}
                            />
                        </div>
                    </div>
                </div>
            )
        default: return null
    }

}
export default CreateProject
