import React from 'react';
import { useState } from 'react';
import ProjectInformation from '../../components/CreateProject/ProjectInformation/ProjectInformation'
import InvestmentInformation from '../../components/CreateProject/InvestmentInformation/InvestmentInformation'
import Header from '../../components/Header/Header';

import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './CreateProject.css';


const CreateProject = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Create Equity Based Project");
    const [step, setStep] = useState(1);
    const [newProject, setNewProject] = useState({});

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
                                handleProceedToNextPage={handleProceedToNextPage}
                            />
        
                        </div>
                    </div>
                </div>
            )
        case 2:
            return (
                <div>
                    <SideBar setCurrentPage={setCurrentPage} />
        
                    <div className="header-and-center-container">
                        <Header />
                        <SubNav currentPage={currentPage} arrLinks={arrLinks}  />
                        <div className="create-project-container">
                            <InvestmentInformation
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
