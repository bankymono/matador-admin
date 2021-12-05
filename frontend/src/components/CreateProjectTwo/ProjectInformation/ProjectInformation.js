import React, { useEffect, useState } from 'react'
import './ProjectInformation.css';
import {IoCloseOutline} from 'react-icons/io5';
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai';
import 'react-datepicker/dist/react-datepicker.css'


import { useDispatch, useSelector } from 'react-redux';
import { listAmenities, listBuildingTypes, listLandTitles, listProjectCategories, listProjectStatuses } from '../../../redux/actions/projectActions';


const ProjectInformation = ({
        projectInfo, handleProjectInfoFieldChange, handleDeleteProjectImage, 
        handleProceedToNextPage, handleProjectImageChange, selectedProjectImages, 
        selectedProjectImagesError,
        handleProjectAmenitiesFieldChange,
        projectAmenitiesForm,
        setProjectAmenitiesForm,
        projectAmenitiesFormErrors,
        setProjectAmenitiesFormErrors
    }) => {
    
    const dispatch = useDispatch();
    const landTitleList = useSelector(state => state.landTitleList);
    const buildingTypeList = useSelector(state => state.buildingTypeList);
    const projectCategoryList = useSelector(state => state.projectCategoryList);
    const projectStatusList = useSelector(state => state.projectStatusList);
    const amenityList = useSelector(state => state.amenityList);

    const {landTitles, landTitleLoading} = landTitleList
    const {buildingTypes, buildingTypeLoading} = buildingTypeList
    const {projectCategories, projectCategoryLoading} = projectCategoryList
    const {projectStatuses, projectStatusLoading} = projectStatusList
    const {amenities, amenityLoading} = amenityList;


    const [usedText, setUsedText] = useState(0)

    const handleInput = (e) => {
        setUsedText(e.target.value.length);

    }



    useEffect(() => {
        dispatch(listLandTitles())
        dispatch(listBuildingTypes())
        dispatch(listProjectCategories())
        dispatch(listProjectStatuses())
        dispatch(listAmenities())
    }, [dispatch])

    const handleAmenitiesValueChange = (index,event) => {
            event.preventDefault();
            event.persist();

            setProjectAmenitiesForm(prev => {

                return prev.map((item,i) => {
                    if(i !== index){
                        return item;
                    }

                    setProjectAmenitiesFormErrors(prev => {
                        let newArr = [...prev]
        
                        newArr[i][Object.keys(newArr[i])] = null;
        
                        return newArr;
                    })
    
                    return {
                        ...item,
                        [event.target.name]:event.target.value
                    }
                })
            });
        
    }

    const handleRemoveAmenitiesInput = (index,event) => {
        event.preventDefault();

        setProjectAmenitiesForm(prev=>prev.filter((item,i) => i !== index))
        setProjectAmenitiesFormErrors(prev=>prev.filter((item,i) => i !== index))
    }

    return (
        <div>
            <div className="create-project-info-heading">Project Information</div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project name</label>
                    <input className={projectInfo.projectNameInputError?"error-border":""} type="text" name='projectName' value={projectInfo.projectName} onChange={handleProjectInfoFieldChange} />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Completed timestamp</label>
                    <input 
                    className={projectInfo.completedTimestampInputError?"error-border":""}
                    type="date" name="completedTimestamp" value={projectInfo.completedTimestamp} onChange={handleProjectInfoFieldChange} />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Building size</label>
                    <input 
                    className={projectInfo.buildingSizeInputError?"error-border":""}
                    type="number" name="buildingSize" value={projectInfo.buildingSize} onChange={handleProjectInfoFieldChange}/>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Constructed By</label>
                    <input 
                    className={projectInfo.constructedByInputError?"error-border":""}
                    type="text" name="constructedBy" value={projectInfo.constructedBy} onChange={handleProjectInfoFieldChange}/>
                </div>
            </div>

            <div className="create-proj-one-field-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Description</label>
                    <div className="proj-textarea-wrapper">
                        <textarea 
                            className={projectInfo.descriptionInputError?"create-proj-textarea error-border":"create-proj-textarea"}
                            maxLength="250" 
                            onInput={handleInput} 
                            type="textarea"
                            name="description" value={projectInfo.description} onChange={handleProjectInfoFieldChange}
                            ></textarea>
                        <div className={ usedText >= 240 ? "proj-new-text-count create-proj-textarea-max" : "proj-new-text-count"}>{`${usedText}/250`}</div>
                    </div>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Land title</label>
                    {
                        landTitleLoading === false && landTitles && landTitles.data ?
                    <select 
                    className={projectInfo.landTitleInputError?"error-border":""}
                        name="landTitle" 
                        value={projectInfo.landTitle} 
                        onChange={handleProjectInfoFieldChange} 
                        type="text"
                        // className={projectInfo.landTitleInputError ? "error-border" : ""}
                        >
                            <option value="">Select One</option>
                            {landTitleLoading === false ? landTitles.data.map(el =>(
                                <option key={el.id} value={el.id}>{el.name}</option>
                            )):null}

                    </select> : <select name="landTitle" className={projectInfo.landTitleInputError?"error-border":""}><option>Please wait</option></select>}
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Building type</label>
                    
                    { buildingTypes && buildingTypes.data?
                    <select type="text"
                    className={projectInfo.buildingTypeInputError?"error-border":""}
                    name="buildingType" value={projectInfo.buildingType} onChange={handleProjectInfoFieldChange}
                    >
                        <option value="">Select One</option>
                        {buildingTypeLoading === false ? buildingTypes.data.map(el =>(
                            <option key={el.id} value={el.id}>{el.name}</option>
                        )):null}
                    </select>
                    : <select className={projectInfo.buildingTypeInputError?"error-border":""}><option>Please wait</option></select>}
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project category</label>
                    {
                    projectCategories && projectCategories.data ? 
                    <select type="text"
                        className={projectInfo.projectCategoryInputError?"error-border":""}
                        name="projectCategory" value={projectInfo.projectCategory} onChange={handleProjectInfoFieldChange}
                    >
                        <option value="">Select One</option>
                        {projectCategoryLoading === false ? projectCategories.data.map(el =>(
                            <option key={el.id} value={el.id}>{el.name}</option>
                        )):null}
                    </select>
                    : <select className={projectInfo.projectCategoryInputError?"error-border":""}><option>Please wait</option></select>
                    }
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project status</label>
                    {
                    projectStatuses && projectStatuses.data?
                    <select type="text"
                    className={projectInfo.projectStatusInputError?"error-border":""}
                        name="projectStatus" value={projectInfo.projectStatus} onChange={handleProjectInfoFieldChange}
                    >
                        <option value="">Select One</option>
                        {projectStatusLoading === false ? projectStatuses.data.map(el =>(
                            <option key={el.id} value={el.id}>{el.name}</option>
                        )):null}
                    </select>
                    : <select className={projectInfo.projectStatusInputError?"error-border":""}><option>Please wait</option></select>
                        }
                </div>
            </div>

            <div className="create-proj-one-field-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project images</label>
                    <div>
                        <div className={selectedProjectImagesError ? "create-proj-images-container error-border":"create-proj-images-container"}>
                            {
                                selectedProjectImages.map((image, index) => {
                                    return (
                                        <div key={index} className="create-proj-preview-img-wrapper">
                                            <IoCloseOutline onClick={()=>handleDeleteProjectImage(index)} className="proj-create-close-icon"/>
                                            <img className="proj-preview-img" src={image} alt="rand" />
                                        </div>
                                    )
                                })
                            }

                            
                            <div className="proj-add-img-wrapper">
                                <label className="proj-add-img-label" htmlFor="proj-add-img">
                                <AiOutlinePlus className="proj-add-img" /></label>
                                <input onChange={handleProjectImageChange} multiple id="proj-add-img" className="proj-add-img-input" type="file" accept="image/png, image/jpeg, image/jpg" />
                            </div>
                            
                        </div>
                        <div className="proj-new-accept-img-desc">Accepted file type: .jpg, .png and .jpeg</div>
                    </div>

                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container eval-field-wrapper">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Evaluation</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input 
                    className={projectInfo.evaluationInputError?"error-border":""}
                    type="number"
                    name="evaluation" value={projectInfo.evaluation} onChange={handleProjectInfoFieldChange}
                    /></div>
                </div>

                <div className="create-proj-input-radio-wrapper">
                   
                </div>
            </div>
            


            <div className="create-proj-hr" />

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Total units</label>
                    <input 
                    className={projectInfo.totalUnitsInputError?"error-border":""}
                    type="number" name="totalUnits" value={projectInfo.totalUnits} onChange={handleProjectInfoFieldChange}/>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project address</label>
                    <input 
                    className={projectInfo.projectAddressInputError?"error-border":""}
                    type="text" name="projectAddress" value={projectInfo.projectAddress} onChange={handleProjectInfoFieldChange}/>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Longitude</label>
                    <input type="number"
                    className={projectInfo.longitudeInputError? "error-border":""}
                    name="longitude" value={projectInfo.longitude} onChange={handleProjectInfoFieldChange}
                    />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Latitude</label>
                    <input type="number"
                    className={projectInfo.latitudeInputError?"error-border":""}
                    name="latitude" value={projectInfo.latitude} onChange={handleProjectInfoFieldChange}
                    />
                </div>
            </div>

            <div className="create-proj-hr" />

            <div className="create-project-info-heading">Amenities</div>

            <div className="create-proj-one-field-row amenities-and-its-lists-container">
                <div className="create-proj-amenities-container">
                    <div className="add-amenity-label">Add Amenity</div>
                    {
                    amenities && amenities.data? 
                    <select className={projectInfo.amenitiesSelectInputError ? "amenity-select error-border":"amenity-select"}
                    name="buildingSize" value={projectInfo.amenitiesSelect} onChange={handleProjectAmenitiesFieldChange}
                    >
                        <option value="">Select One</option>
                        {amenityLoading === false ? amenities.data.map(el =>(
                            <option key={el.id} value={el.name}>{el.name}</option>
                        )):null}
                    </select>
                    : <select className={projectInfo.amenitiesSelectInputError ? "amenity-select error-border":"amenity-select"}><option>Please wait</option></select>}
                </div>

                <div className="amenities-list-wrapper">
                    {
                        projectAmenitiesForm.map((item,index) => (
                            <div key={`item-${index}`} className="amenities-item">
                                <div className="amenities-name">{Object.keys(item)}</div>
                                <div className="amenities-amt-input-container">
                                    {/* {console.log('wgat is this',)} */}
                                    <input 
                                        name={Object.keys(item)}
                                        value={Object.values(item)}
                                        className={Object.values(projectAmenitiesFormErrors[index])[0]? "error-border":""}
                                        onChange={(event) => handleAmenitiesValueChange(index,event)}
                                        type="number" placeholder="Input Amount"/>
                                    <button onClick={(event) => handleRemoveAmenitiesInput(index,event)}><span>Delete</span><AiOutlineClose /></button>
                                </div>
                            </div>                            
                        ))
                    }
                    {/* <div  className="amenities-item">
                        <div className="amenities-name">Bedrooms</div>
                        <div className="amenities-amt-input-container">
                            <input type="text" placeholder="Input Amount"/>
                            <button><span>Delete</span><AiOutlineClose /></button>
                        </div>
                    </div>

                    <div  className="amenities-item">
                        <div className="amenities-name">Bedrooms</div>
                        <div className="amenities-amt-input-container">
                            <input type="text" placeholder="Input Amount" />
                            <button><span>Delete</span><AiOutlineClose /></button>
                        </div>
                    </div>
                    <div  className="amenities-item">
                        <div className="amenities-name">Bedrooms</div>
                        <div className="amenities-amt-input-container">
                            <input type="text" placeholder="Input Amount" />
                            <button><span>Delete</span><AiOutlineClose /></button>
                        </div>
                    </div>

                    <div  className="amenities-item">
                        <div className="amenities-name">Bedrooms</div>
                        <div className="amenities-amt-input-container">
                            <input type="text" placeholder="Input Amount" />
                            <button><span>Delete</span><AiOutlineClose /></button>
                        </div>
                    </div> */}
                    
                </div>
            </div>


            <div className="create-proj-two-fields-row">
                
                <div className="create-proj-input-container">
                </div>

                <div className="create-proj-input-container create-proj-btn-container">
                    <button className="create-outline-green">Cancel</button>
                    <button onClick={handleProceedToNextPage} className="create-fill-green">Next</button>
                </div>

            </div>
        </div>
    )
}

export default ProjectInformation
