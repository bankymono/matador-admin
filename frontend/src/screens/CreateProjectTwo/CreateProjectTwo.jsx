import React from 'react';
import { useState } from 'react';
import ProjectInformation from '../../components/CreateProjectTwo/ProjectInformation/ProjectInformation'
import InvestmentInformation from '../../components/CreateProjectTwo/InvestmentInformation/InvestmentInformation'
import Header from '../../components/Header/Header';

import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './CreateProjectTwo.css';

import {initialProjectBundlesInfo, initialProjectInfoState, initialProjectInvestmentInfoState} from '../../components/CreateProjectTwo/initialVariables';
import { validateProjectInfoFields, validateProjectAmenities, validateProjectInvestmentInfoFields } from '../../components/CreateProjectTwo/validationFunctions';


const CreateProject = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Create Equity Based Project");

    // for changing the page of the form
    const [formStep, setFormStep] = useState(1); 

    const [selectedProjectImages, setSelectedProjectImages] = useState([]);
    const [selectedProjectImagesError, setSelectedProjectImagesError] = useState('');
    
    const [selectedBundleImages, setSelectedBundleImages] = useState([]);
    const [selectedBundleImagesError, setSelectedBundleImagesError] = useState('');


    const [selectedFile, setSelectedFile] = useState('');
    const [selectedFileError, setSelectedFileError] = useState('');
    
    const [fileName, setFileName] = useState([]);


    const [includeBundle, setIncludeBundle] = useState(false);
    const [includePaymentPlan, setIncludePaymentPlan] = useState(false);


    const handleProjectImageChange = (e) => {
        if(e.target.files){

            for ( let file of e.target.files){
                encodeFileToBase64(file)
                .then(result =>{
                    setSelectedProjectImages(prev => [...prev, result])
                })
            }
            setSelectedProjectImagesError('');
        }
    }

    const handleDeleteProjectImage = (id) => {
        setSelectedProjectImages(prev => [...prev.filter((image, index) => id !== index)])
    } 

    const handleDeleteBundleImage = (id) => {
        setSelectedBundleImages(prev => [...prev.filter((image, index) => id !== index)])
    } 

    const handleBundleImageChange = (e) => {
        
        if(e && e.target.files){

            for ( let file of e.target.files){
                encodeFileToBase64(file)
                .then(result =>{
                    setSelectedBundleImages(prev => [...prev, result])
                })
            }

            setSelectedBundleImagesError('');
        }
        else{
            setSelectedBundleImages([])
        }

    }

    const handleFileChange = async (e) => {
        
        if(e && e.target.files){
                setFileName(e.target.files[0].name)
                encodeFileToBase64(e.target.files[0])
                .then(result =>{
                    setSelectedFile(result)

                    setSelectedFileError('')
                })
        }
        else{
            setSelectedFile('')
        }

    }

    const encodeFileToBase64 = (file) => {
        return new Promise((resolve, reject)=> {
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }


    const [projectInfo, setProjectInfo] = useState(initialProjectInfoState);
    const [projectInvestmentInfo, setProjectInvestmentInfo] = useState(initialProjectInvestmentInfoState);
    const [projectBundlesInfo, setProjectBundlesInfo] = useState([]);
    const [projectPaymentPlansInfo, setProjectPaymentPlansInfo] = useState([]);

    const [projectAmenitiesForm, setProjectAmenitiesForm] = useState([])
    const [projectAmenitiesFormErrors, setProjectAmenitiesFormErrors] = useState([])


    
    const handleProceedToNextPage= (e) => {
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

        // if(isProjectInfoValid && isProjectAmenitiesValid){
            setFormStep(prevStep => prevStep + 1)
            window.scrollTo(0,0);
        // }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isProjectInvestmentsInfoValid = validateProjectInvestmentInfoFields(
            projectInvestmentInfo,
            setProjectInvestmentInfo)

            if(isProjectInvestmentsInfoValid){
                alert('validation worked!!!')
            }
    }

    const handleProceedToPrevPage= () => {
        setFormStep(prevStep => prevStep - 1)
        window.scrollTo(0,0);
    }

    const handleProjectInfoFieldChange = (e) => {
        e.preventDefault();

        setProjectInfo(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))


        switch(e.target.name){
            case 'projectName':
                setProjectInfo(prev => ({
                    ...prev,
                    projectNameInputError:''
                }))
                break;
            case 'completedTimestamp':
                setProjectInfo(prev => ({
                    ...prev,
                    completedTimestampInputError:''
                }))
                break;
            case 'buildingSize':
                setProjectInfo(prev => ({
                    ...prev,
                    buildingSizeInputError:''
                }))
                break;
            case 'constructedBy':
                setProjectInfo(prev => ({
                    ...prev,
                    constructedByInputError:''
                }))
                break;
            case 'description':
                setProjectInfo(prev => ({
                    ...prev,
                    descriptionInputError:''
                }))
                break;
            case 'landTitle':
                setProjectInfo(prev => ({
                    ...prev,
                    landTitleInputError:''
                }))
                break;
            case 'buildingType':
                setProjectInfo(prev => ({
                    ...prev,
                    buildingTypeInputError:''
                }))
                break;

            case 'projectCategory':
                setProjectInfo(prev => ({
                    ...prev,
                    projectCategoryInputError:''
                }))
                break;

            case 'projectStatus':
                setProjectInfo(prev => ({
                    ...prev,
                    projectStatusInputError:''
                }))
                break;

            case 'evaluation':
                setProjectInfo(prev => ({
                    ...prev,
                    evaluationInputError:''
                }))
                break;
                
            case 'totalUnits':
                setProjectInfo(prev => ({
                    ...prev,
                    totalUnitsInputError:''
                }))
                break;

            case 'projectAddress':
                setProjectInfo(prev => ({
                    ...prev,
                    projectAddressInputError:''
                }))
                break;

            case 'longitude':
                setProjectInfo(prev => ({
                    ...prev,
                    longitudeInputError:''
                }))
                break;

            case 'latitude':
                setProjectInfo(prev => ({
                    ...prev,
                    latitudeInputError:''
                }))
                break;

            case 'amenitiesSelect':
                setProjectInfo(prev => ({
                    ...prev,
                    amenitiesSelectInputError:''
                }))
                break;
            default:
                    return null
        }

    }


    const handleProjectAmenitiesFieldChange = (e) => {
        setProjectInfo(prev=>({
            ...prev,
            amenitiesSelect:'',
            amenitiesSelectInputError:''
        }))

        const amenitiesFormState = {
            [e.target.value]:"",
        }

        const amenitiesErrors = {
            [e.target.value]:null
        }

        setProjectAmenitiesForm(prev => ([...prev, amenitiesFormState]));
        setProjectAmenitiesFormErrors(prev => ([...prev, amenitiesErrors]));


    }


    const handleProjectInvestmentInfoFieldChange = (e) => {
        e.preventDefault();

        setProjectInvestmentInfo(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))


        switch(e.target.name){
            case 'dividendMaturity':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    dividendMaturityInputError:''
                }))
                break;
            case 'fundingEndTimestamp':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    fundingEndTimestampInputError:''
                }))
                break;
            case 'hardCap':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    hardCapInputError:''
                }))
                break;
            case 'softCap':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    softCapInputError:''
                }))
                break;
            case 'holdingPeriod':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    holdingPeriodInputError:''
                }))
                break;
            case 'incomeTimestamp':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    incomeTimestampInputError:''
                }))
                break;
            case 'interestRatePerWeek':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    interestRatePerWeekInputError:''
                }))
                break;

            case 'rentalYield':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    rentalYieldInputError:''
                }))
                break;

            case 'cashOnCashYield':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    cashOnCashYieldInputError:''
                }))
                break;

            case 'totalFractions':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    totalFractionsInputError:''
                }))
                break;
                
            case 'pricePerFraction':
                setProjectInvestmentInfo(prev => ({
                    ...prev,
                    pricePerFractionInputError:''
                }))
                break;


            default:
                    return null
        }

    }




    switch(formStep){
        case 1:
            return (
                <div className="create-project-outer-wrapper">
                    <SideBar setCurrentPage={setCurrentPage} />
        
                    <div className="header-and-center-container">
                        <Header />
                        <SubNav currentPage={currentPage} arrLinks={arrLinks}  />
                        <div className="create-project-container">
                            <ProjectInformation
                                projectInfo={projectInfo}
                                handleProjectInfoFieldChange={handleProjectInfoFieldChange}
                                projectAmenitiesForm={projectAmenitiesForm}
                                projectAmenitiesFormErrors={projectAmenitiesFormErrors}
                                setProjectAmenitiesForm={setProjectAmenitiesForm}
                                setProjectAmenitiesFormErrors={setProjectAmenitiesFormErrors}
                                handleProjectAmenitiesFieldChange={handleProjectAmenitiesFieldChange}

                                selectedProjectImages ={selectedProjectImages}
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
                        <SubNav currentPage={currentPage} arrLinks={arrLinks}  />
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
                                selectedBundleImages ={selectedBundleImages}      
                                setSelectedBundleImages={setSelectedBundleImages} 
                                handleBundleImageChange={handleBundleImageChange} 
                                handleDeleteBundleImage={handleDeleteBundleImage}
                                fileName={fileName}
                                setFileName={setFileName}
                                handleFileChange={handleFileChange}                        
                                includeBundle={includeBundle} 
                                setIncludeBundle = {setIncludeBundle}
                                includePaymentPlan = {includePaymentPlan} 
                                setIncludePaymentPlan = {setIncludePaymentPlan}
                                handleProceedToPrevPage={handleProceedToPrevPage}
                                handleSubmit={handleSubmit}
                                selectedFileError={selectedFileError}
                                setSelectedFileError={setSelectedFileError}
                                setSelectedFile={setSelectedFile}
                            />
                        </div>
                    </div>
                </div>
            )
            default: return null
    }

}

export default CreateProject
