import React, { useState } from 'react'
import './ProjectInformation.css';
import {IoCloseOutline} from 'react-icons/io5';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiUploadCloudFill} from 'react-icons/ri';
import {RiCalendarEventFill} from 'react-icons/ri';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import rand from '../../../assets/random_img.jpg';

const ProjectInformation = (
    {setNewProject, handleDeleteProjectImage, handleProceedToNextPage, 
    handleProjectImageChange, selectedProjectImages, newProject, 
    handleSelectedAmenities, cancelProjectCreation, fetchedAmenities,
    selectedAmenities, setAmenityAmount, removeAmenity, landTitles,
    buildingTypes, statuses}
    ) => {

    const [usedText, setUsedText] = useState(0)
    const MAX_CHARS = 250;
    
    const handleInput = (e) => {
        setUsedText(e.target.value.length);
        setNewProject({...newProject, description: e.target.value})
    }

    return (
        <div>
            <div className="create-project-info-heading">Project Information</div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project name</label>
                    <input type="text" 
                        onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                        value={newProject.name || ""}
                        required={true}
                    />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Completed timestamp</label>
                    <input type="datetime-local" onChange={
                        (e) => setNewProject({...newProject, completed_timestamp: e.target.value})
                    }
                    value={newProject.completed_timestamp || ""}
                    />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Building size</label>
                    <input type="text" onChange={
                        (e) => setNewProject({...newProject, building_size: e.target.value})
                    } 
                    value={newProject.building_size || ""}
                    />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Constructed By</label>
                    <input type="text" onChange={
                        (e) => setNewProject({...newProject, constructed_by: e.target.value})
                    }
                    value={newProject.constructed_by || ""}
                    />
                </div>
            </div>

            <div className="create-proj-one-field-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Description</label>
                    <div className="proj-textarea-wrapper">
                        <textarea id="description" maxLength="250" onInput={handleInput} className="create-proj-textarea" type="textarea"></textarea>
                        <div id="descriptionText" className={ usedText >= 240 ? "proj-new-text-count create-proj-textarea-max" : "proj-new-text-count"}>{`${usedText}/250`}</div>
                    </div>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Land title</label>
                    <select className="select"
                        onChange={
                            (e) => setNewProject({...newProject, land_title: e.target.value})
                        } 
                    >
                        <option value="">Select Land Title</option>
                        {
                            landTitles.map(landTitle => (
                                <option value={landTitle.id} key={landTitle.name}>{landTitle.name}</option>
                                )
                            )
                        }
                    </select>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Building type</label>
                    <select className="select"
                        onChange={
                            (e) => setNewProject({...newProject, building_type: e.target.value})
                        } 
                    >
                        <option value="">Select Building Type</option>
                        {
                            buildingTypes.map(buildingType => (
                                <option value={buildingType.id} key={buildingType.name}>{buildingType.name}</option>
                                )
                            )
                        }
                    </select>
                </div>
            </div>

            <div className="create-proj-one-field-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project images</label>
                    <div>
                        <div className="create-proj-images-container">
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
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Evaluation</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span>
                        <input type="text" 
                        onChange={
                            (e) => setNewProject({...newProject, evaluation: e.target.value})
                        }
                        value={newProject.evaluation || ""}
                        />
                    </div>
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Status</label>
                        <select className="select"
                            onChange={
                                (e) => setNewProject({...newProject, status: e.target.value})
                            } 
                        >
                            <option value="">Select Project Status</option>
                            {
                                statuses.map(status => (
                                    <option value={status.id} key={status.name}>{status.name}</option>
                                    )
                                )
                            }
                        </select>
                    </div>
                </div>
            

            <div className="create-proj-hr" />

            <div className="create-project-info-heading">Amenities</div>
            <div className="amenities-section">
                <h2>Add Amenity</h2>
                <select
                    name="amenities"
                    onChange={handleSelectedAmenities}
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
                selectedAmenities.map(selectedAmenity => (
                    <div className="selected-amenity" key={selectedAmenity.name}>
                        <strong>{selectedAmenity.name}</strong>
                        <div className="amenity-amount-and-delete">
                            <input 
                                type="number" 
                                placeholder="Input Amount" 
                                defaultValue={selectedAmenity.value}
                                onChange={
                                    (e) => setAmenityAmount("project", selectedAmenity.name, e.target.value)
                                }
                            />
                            <strong
                                onClick={() => removeAmenity("project", selectedAmenity)}
                            >Delete</strong>
                        </div>
                    </div>
                ))
            }
            
            <div className="create-proj-hr" />

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Total units</label>
                    <input type="text" 
                        onChange={
                            (e) => setNewProject({...newProject, total_units: e.target.value})
                        }
                        value={newProject.total_units || ""}
                    />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project address</label>
                    <input type="text" 
                    onChange={
                        (e) => setNewProject({...newProject, location_description: e.target.value})
                    }
                    value={newProject.location_description || ""}
                    />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Longitude</label>
                    <input type="text" 
                        onChange={
                            (e) => setNewProject({...newProject, longitude: e.target.value})
                        }
                        value={newProject.longitude || ""}
                        />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Latitude</label>
                    <input type="text" 
                        onChange={
                            (e) => setNewProject({...newProject, latitude: e.target.value})
                        }
                        value={newProject.latitude || ""}
                    />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                
                <div className="create-proj-input-container">
                </div>

                <div className="create-proj-input-container create-proj-btn-container">
                    <button className="create-outline-green"
                    onClick={cancelProjectCreation}>Cancel</button>
                    <button onClick={handleProceedToNextPage} className="create-fill-green">Next</button>
                </div>

            </div>
        </div>
    )
}

export default ProjectInformation
