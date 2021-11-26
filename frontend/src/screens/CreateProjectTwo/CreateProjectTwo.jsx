import React, { useEffect } from 'react';
import { useState } from 'react';
import ProjectInformation from '../../components/CreateProjectTwo/ProjectInformation/ProjectInformation'
import InvestmentInformation from '../../components/CreateProjectTwo/InvestmentInformation/InvestmentInformation'
import Header from '../../components/Header/Header';

import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './CreateProjectTwo.css';


const CreateProject = ({arrLinks}) => {
    const [selectedProjectImages, setSelectedProjectImages] = useState([])
    const [selectedBundleImages, setSelectedBundleImages] = useState([])
    const [selectedFile, setSelectedFile] = useState([])
    const [fileName, setFileName] = useState([])

    const [currentPage, setCurrentPage] = useState("Create Equity Based Project");
    const [includeBundle, setIncludeBundle] = useState(false)
    const [includePaymentPlan, setIncludePaymentPlan] = useState(false)
    const [step, setStep] = useState(1);
    const [newProject, setNewProject] = useState({});

    const handleProjectImageChange = (e) => {
        if(e.target.files){

            for ( let file of e.target.files){
                encodeFileToBase64(file)
                .then(result =>{
                    setSelectedProjectImages(prev => [...prev, result])
                })
            }

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


    const [projectInfo, setProjectInfo] = useState({
            projectName:'',
            completedTimestamp:'',
            buildingSize:'',
            constructedBy:'',
            description:'',
            landTitle:'',
            buildingType:'',
            projectImages:'',
            evaluation:'',
            status:'',
            amenities:'',
            totalUnits:'',
            projectAddress:'',
            longitude:"",
            latitude:"",
        });

    const [projectAmenities, setProjectAmenities] = useState({
                bedroom:'',
                bathroom:'',
                toilet:'',
                sittingRoom:'',
                diningRoom:'',
                kitchenNet:'',
                laundryRoom:'',
                kitchenStore:''
        })

    const [investmentInfo, setInvestmentInfo] = useState({
            dividendMaturity:'',
            fundingEndTimestamp:'',
            hardCap:'',
            softCap:'',
            holdingPeriod:'',
            incomeStartTimestamp:'',
            interestRatePerWeek:'',
            investmentType:'',
            cashOnCashYield:'',
            rentalYield:'',
            pricePerFraction:'',
            totalFractions:'',
            bundle:''
        })

    const [bundleInfo, setBundleInfo] = useState({
            title:'',
            size:'',
            photos:'',
            deedTitle:'',
            deedFile:'',
            price:'',
            amenities:'',
            paymentPlan:''
        })

    const [bundleAmenities, setBundleAmenities] = useState({
            bedroom:'',
            bathroom:'',
            toilet:'',
            sittingRoom:'',
            diningRoom:'',
            kitchenNet:'',
            laundryRoom:'',
            kitchenStore:''
        })

    const [paymentPlan, setPaymentPlan] = useState({
            initialDepositPercentage:'',
            initialDepositAmount:'',
            availablePaymentPeriodInMonths:'',
            monthlyPayment:''
        })

    
    const handleProceedToNextPage= () => {
        setStep(prevStep => prevStep + 1)
        window.scrollTo(0,0);
    }

    const handleProceedToPrevPage= () => {
        setStep(prevStep => prevStep - 1)
    }

    const handleProjectInfoFieldChange = () => {

    }

    const handleProjectAmenFieldChange = () => {

    }

    const handleInvestmentInfoFieldChange = () => {

    }

    const handleBundleInfoFieldChange = () => {

    }

    const handleBundleAmenitiesFieldChange = () => {

    }

    const handleBundlePaymentFieldChange = () => {

    }


    switch(step){
        case 1:
            return (
                <div className="create-project-outer-wrapper">
                    <SideBar setCurrentPage={setCurrentPage} />
        
                    <div className="header-and-center-container">
                        <Header />
                        <SubNav currentPage={currentPage} arrLinks={arrLinks}  />
                        <div className="create-project-container">
                            <ProjectInformation
                                selectedProjectImages ={selectedProjectImages}
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
                                selectedBundleImages ={selectedBundleImages}       
                                handleBundleImageChange={handleBundleImageChange} 
                                handleDeleteBundleImage={handleDeleteBundleImage}
                                fileName={fileName}
                                handleFileChange={handleFileChange}                        
                                includeBundle={includeBundle} 
                                setIncludeBundle = {setIncludeBundle}
                                includePaymentPlan = {includePaymentPlan} 
                                setIncludePaymentPlan = {setIncludePaymentPlan}
                                handleProceedToPrevPage={handleProceedToPrevPage}
                            />
                        </div>
                    </div>
                </div>
            )
            default: return null
    }

}

export default CreateProject
