import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import ProjectInformation from '../../components/CreateProject/ProjectInformation/ProjectInformation'
import InvestmentInformation from '../../components/CreateProject/InvestmentInformation/InvestmentInformation'
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux'
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import { createProject } from '../../redux/actions/userActions'
import axios from 'axios';
import './CreateProject.css';
import { toast } from 'react-toastify';

const CreateProject = ({arrLinks}) => {
    const history = useHistory();

    const token = JSON.parse(localStorage.getItem('userInfo'))?.token;
    const BASE_API_URL = "https://matador-api.herokuapp.com/v1";

    const [selectedProjectImages, setSelectedProjectImages] = useState([])
    const [selectedBundleImages, setSelectedBundleImages] = useState([])
    const [selectedFile, setSelectedFile] = useState([])
    const [fileName, setFileName] = useState([])

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState("Create Equity Based Project");
    const [includeBundle, setIncludeBundle] = useState(false)
    const [includePaymentPlan, setIncludePaymentPlan] = useState(false)
    const [step, setStep] = useState(1);
    const [newProject, setNewProject] = useState({});
    const [fetchedAmenities, setFetchedAmenities] = useState([]);
    const [landTitles, setLandTitles] = useState([]);
    const [investmentTypes, setInvestmentTypes] = useState([]);
    const [buildingTypes, setBuildingTypes] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [selectedBundleAmenities, setSelectedBundleAmenities] = useState([]);
    const [bundles, setBundles] = useState([]);
    const [payment_plan, setPaymentPlan] = useState([]);
    const [currentBundle, setCurrentBundle] = useState(null);
    
    //At the point of clicking next, please add the selected images to the new project

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

    const handleDeleteBundleImage = (data, bundle) => {
        const selectedBundleImagesCopy = [...selectedBundleImages];
        const index = selectedBundleImagesCopy.findIndex(el => el.bundle === bundle && el.result === data.result);
        if(index !== -1){
            selectedBundleImagesCopy.splice(index, 1);
            setSelectedBundleImages(selectedBundleImagesCopy);
        }
    } 

    const handleBundleImageChange = (e) => { 
        if(e && e.target.files){

            for ( let file of e.target.files){
                encodeFileToBase64(file)
                .then(result =>{
                    setSelectedBundleImages(prev => [...prev, {bundle: currentBundle, result}])
                })
            }
        }
        else{
            setSelectedBundleImages([])
        }
    }

    const handleFileChange = async (e) => {
        if(e && e.target.files){
            setFileName([...fileName, {fileName: e.target.files[0].name, bundle: currentBundle}])
            encodeFileToBase64(e.target.files[0])
            .then(result =>{
                setSelectedFile([...selectedFile, {result, bundle: currentBundle}])
            });
        }
    }

    const cancelProjectCreation = () => {
        setNewProject({});
        setSelectedProjectImages([]);
        setSelectedBundleImages([]);
        setSelectedFile('');
        history.push("/projects");
    }

    const encodeFileToBase64 = (file) => {
        return new Promise((resolve, reject)=> {
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }
    
    const handleProceedToNextPage = async () => {
        const data = {
                ...newProject, 
                amenities: selectedAmenities.length ? selectedAmenities : undefined,
                photos: selectedProjectImages.length ? selectedProjectImages : undefined
        };

        setNewProject(data);
        setStep(prevStep => prevStep + 1)
        window.scrollTo(0,0);
    }

    const handleProceedToPrevPage = async () => {
        //Set Bundle Amenities
        const bundlesClone = [...bundles];
        const payment_plan_clone = [...payment_plan];
        
        const amenities = [...selectedBundleAmenities];

        for(let i = 0; i < amenities.length; i++){
            const amenity = amenities[i];
            const bundleIndex = bundlesClone.findIndex(el => el.bundle === amenity.bundle);
            if(bundleIndex !== -1){
                if(bundlesClone[bundleIndex].amenities){
                    delete amenity.bundle;
                    const amenitiesInBundle = bundlesClone[bundleIndex].amenities;
                    const foundBundle = amenitiesInBundle.findIndex(el => el.name === amenity.name);
                    if(foundBundle === -1){
                       bundlesClone[bundleIndex].amenities.push(amenity); 
                    }
                }else{
                    delete amenity.bundle;
                    bundlesClone[bundleIndex].amenities = [amenity];
                }
            }
        }
        
        //selectedFiles

        const selectedFileClone = [...selectedFile];
        for(let i = 0; i < selectedFileClone.length; i++){
            const file = selectedFileClone[i];
            const bundleIndex = bundlesClone.findIndex(el => el.bundle === file.bundle);

            if(bundleIndex !== -1){
                bundlesClone[bundleIndex].deed_file = file.result;
            }
        }
        
        //selectedBundleImages

        const selectedBundleImagesCopy = [...selectedBundleImages];
        for(let i = 0; i < selectedBundleImagesCopy.length; i++){
            const image = selectedBundleImagesCopy[i];
            const bundleIndex = bundlesClone.findIndex(el => el.bundle === image.bundle);

            if(bundleIndex !== -1){
                if(bundlesClone[bundleIndex].photos){
                    const photosInBundle = bundlesClone[bundleIndex].photos;
                    const foundPhoto = photosInBundle.findIndex(el => el === image.result);
                    if(foundPhoto === -1){
                        bundlesClone[bundleIndex].photos.push(image.result);
                    }
                }else{
                    bundlesClone[bundleIndex].photos = [image.result];
                }
            }
        }

        //Clear the bundle field
        for(let i = 0; i < bundlesClone.length; i++){
            const bundleClone = bundlesClone[i];
            delete bundleClone.bundle;
        }


        for(let i = 0; i < payment_plan_clone.length; i++){
            const paymentPlanClone = payment_plan_clone[i];
            delete paymentPlanClone.bundle;
        }
        
        const data = {
            ...newProject,
            bundles: bundlesClone.length ? bundlesClone : undefined,
            payment_plan: payment_plan_clone.length ? payment_plan_clone : undefined
        };
        
        try{
            const res = await axios(
                {
                    url: BASE_API_URL + "/investment/project",
                    method: 'POST',
                    data,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            
            toast("Project Created Successfully!");

            setNewProject({});
            setBundles([]);
            setPaymentPlan([]);
            setSelectedAmenities([]);
            setSelectedBundleAmenities([]);
            setSelectedFile([]);
            setSelectedProjectImages([]);
            setSelectedBundleImages([]);
            setFileName([]);
            setCurrentBundle(null);
            history.push("/projects");
        }catch(error){
            toast(error.response.data.message || "An error occured");
            console.log(error.response);
        }
    }

    const handleSelectedAmenities = (e) => {
        if(!e.target.value) return;

        for(let i = 0; i < selectedAmenities.length; i++){
            if(selectedAmenities[i].name === e.target.value){
                return;
            }
        }

        setSelectedAmenities([...selectedAmenities, {name: e.target.value, value: ''}]);
    }

    const handleSelectedBundleAmenities = (e, bundle) => {
        if(!e.target.value) return;

        for(let i = 0; i < selectedBundleAmenities.length; i++){
            if( 
                selectedBundleAmenities[i].name === e.target.value && 
                selectedBundleAmenities[i].bundle === bundle
            ){
                return;
            }
        }

        setSelectedBundleAmenities([...selectedBundleAmenities, {name: e.target.value, value: '', bundle}]);
    }

    const setAmenityAmount = (type, name, value, bundle) => {
        if(type === "project"){
            const obj = {name, value}
            const amenitiesCopy = [...selectedAmenities];

            for(let i = 0; i < amenitiesCopy.length; i++){
                if(amenitiesCopy[i].name === name){
                    amenitiesCopy.splice(i, 1, obj);
                    i = amenitiesCopy.length;
                }
            }

            setSelectedAmenities(amenitiesCopy)
        }

        if(type === "bundle"){
            const obj = {name, value, bundle}
            const amenitiesCopy = [...selectedBundleAmenities];

            for(let i = 0; i < amenitiesCopy.length; i++){
                if(amenitiesCopy[i].name === name && amenitiesCopy[i].bundle === bundle){
                    amenitiesCopy.splice(i, 1, obj);
                    i = amenitiesCopy.length;
                }
            }

            setSelectedBundleAmenities(amenitiesCopy)
        }
    }

    const removeAmenity = (type, amenity, bundle) => {
        if(type === "project"){
            const amenitiesCopy = [...selectedAmenities];

            for(let i = 0; i < amenitiesCopy.length; i++){
                if(amenitiesCopy[i].name === amenity.name){
                    amenitiesCopy.splice(i, 1);
                    i = amenitiesCopy.length;
                }
            }

            setSelectedAmenities(amenitiesCopy)
        }

        if(type === "bundle"){
            const amenitiesCopy = [...selectedBundleAmenities];

            for(let i = 0; i < amenitiesCopy.length; i++){
                if(
                    amenitiesCopy[i].name === amenity.name 
                    && 
                    amenitiesCopy[i].bundle === bundle
                ){
                    amenitiesCopy.splice(i, 1);
                    i = amenitiesCopy.length;
                }
            }

            setSelectedBundleAmenities(amenitiesCopy)
        }
    }

    useEffect(() => {
        const fetchAmenities = async () => {
            try{
                const res = await axios({
                    method: 'GET',
                    url: BASE_API_URL + "/investment/amenity",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                setFetchedAmenities(res.data.data);
            }catch(error){
                console.log(error);
            }
        }

        const fetchInvestmentTypes = async () => {
            try{
                const res = await axios({
                    method: 'GET',
                    url: BASE_API_URL + "/investment/investment-type",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setInvestmentTypes(res.data.data);
            }catch(error){
                console.log(error);
            }
        }

        const fetchBuildingTypes = async () => {
            try{
                const res = await axios({
                    method: 'GET',
                    url: BASE_API_URL + "/investment/building-type",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                setBuildingTypes(res.data.data);
            }catch(error){
                console.log(error);
            }
        }

        const fetchLandTitles = async () => {
            try{
                const res = await axios({
                    method: 'GET',
                    url: BASE_API_URL + "/investment/land-title",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                setLandTitles(res.data.data);
            }catch(error){
                console.log(error);
            }
        }

        fetchAmenities();
        fetchInvestmentTypes();
        fetchBuildingTypes();
        fetchLandTitles();
    }, [])

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
                                setNewProject={setNewProject}
                                setSelectedProjectImages={setSelectedProjectImages}
                                newProject={newProject}
                                fetchedAmenities={fetchedAmenities}
                                selectedProjectImages ={selectedProjectImages}
                                handleDeleteProjectImage={handleDeleteProjectImage}
                                handleProjectImageChange={handleProjectImageChange}
                                handleProceedToNextPage={handleProceedToNextPage}
                                cancelProjectCreation={cancelProjectCreation}
                                handleSelectedAmenities={handleSelectedAmenities}
                                selectedAmenities={selectedAmenities}
                                setAmenityAmount={setAmenityAmount}
                                removeAmenity={removeAmenity}
                                landTitles={landTitles}
                                buildingTypes={buildingTypes}
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
                                cancelProjectCreation={cancelProjectCreation}
                                newProject={newProject}
                                fetchedAmenities={fetchedAmenities}
                                setNewProject={setNewProject}
                                selectedBundleImages ={selectedBundleImages}  
                                setSelectedBundleImages={setSelectedBundleImages}     
                                handleBundleImageChange={handleBundleImageChange} 
                                handleDeleteBundleImage={handleDeleteBundleImage}
                                fileName={fileName}
                                setFileName={setFileName}
                                selectedFile={selectedFile}
                                setSelectedFile={setSelectedFile}
                                handleFileChange={handleFileChange}                        
                                includeBundle={includeBundle} 
                                setIncludeBundle = {setIncludeBundle}
                                includePaymentPlan = {includePaymentPlan} 
                                setIncludePaymentPlan = {setIncludePaymentPlan}
                                handleProceedToPrevPage={handleProceedToPrevPage}
                                bundles={bundles}
                                setBundles={setBundles}
                                payment_plan={payment_plan}
                                setPaymentPlan={setPaymentPlan}
                                currentBundle={currentBundle}
                                setCurrentBundle={setCurrentBundle}
                                selectedBundleAmenities={selectedBundleAmenities}
                                setSelectedBundleAmenities={setSelectedBundleAmenities}
                                handleSelectedBundleAmenities={handleSelectedBundleAmenities}
                                setAmenityAmount={setAmenityAmount}
                                removeAmenity={removeAmenity}
                                investmentTypes={investmentTypes}
                            />
                        </div>
                    </div>
                </div>
            )
            default: return null
    }

}

export default CreateProject
