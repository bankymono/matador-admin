import React from 'react'
import './ProjectInformation.css';
import {IoCloseOutline} from 'react-icons/io5';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiUploadCloudFill} from 'react-icons/ri';
import {RiCalendarEventFill} from 'react-icons/ri';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import rand from '../../../assets/random_img.jpg';

const ProjectInformation = ({handleProceedToNextPage}) => {
    return (
        <div>
            <div className="create-project-info-heading">Project Information</div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project name</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Completed timestamp</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Building size</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Constructed By</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-one-field-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Description</label>
                    <input className="create-proj-textarea" type="textarea" />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Land title</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Building type</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-one-field-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project images</label>
                    <div className="create-proj-images-container">

                        <div className="create-proj-preview-img-wrapper">
                            <IoCloseOutline className="proj-create-close-icon"/>
                            <img className="proj-preview-img" src={rand} alt="rand" />
                        </div>
                        
                        <div className="proj-add-img-wrapper">
                            <label className="proj-add-img-label" htmlFor="proj-add-img">
                            <AiOutlinePlus className="proj-add-img" /></label>
                            <input multiple id="proj-add-img" className="proj-add-img-input" type="file" accept="image/png, image/jpeg, image/jpg" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Evaluation</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                </div>

                <div className="create-proj-input-radio-wrapper">
                    <div className="create-proj-radio-label" htmlFor="proj-name">Status</div>

                    <div className="create-proj-input-radio-container">
                        <div className="create-radio-item-wrap">
                            <label className="create-radio-label" htmlFor="create-avail">Available</label>
                            <input id="create-avail" type="radio" name="create-avail" />
                        </div>

                        <div className="create-radio-item-wrap">
                            <label className="create-radio-label" htmlFor="create-avail">Unavailable</label>
                            <input id="create-avail" type="radio" name="create-avail" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Evaluation</label>

                    <div className="create-proj-input-with-suffix">
                        <div className="create-proj-file-disp">img</div>
                        <div className="proj-file-save-container">
                            <input className="proj-file-save" type="file" id="proj-file-save" />
                            
                            <label className="proj-file-save-icon-wrap" htmlFor="proj-file-save">
                                <RiUploadCloudFill className="proj-file-save-icon" />
                                <span>Upload file</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="create-proj-input-radio-wrapper">
                    <div className="create-proj-radio-label" htmlFor="proj-name">Status</div>

                    <div className="create-proj-input-radio-container">
                        <div className="create-radio-item-wrap">
                            <label className="create-radio-label" htmlFor="create-avail">Available</label>
                            <input id="create-avail" type="radio" name="create-avail" />
                        </div>

                        <div className="create-radio-item-wrap">
                            <label className="create-radio-label" htmlFor="create-avail">Unavailable</label>
                            <input id="create-avail" type="radio" name="create-avail" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Evaluation</label>

                    <div className="create-proj-input-with-suffix">
                        
                        <DatePicker id="proj-add-datepicker" className="proj-add-datepicker" />
                        <label className="proj-add-datepicker-icon-wrap" htmlFor="proj-add-datepicker">
                            <RiCalendarEventFill className="proj-add-datepicker-icon" />
                        </label>
                        
                    </div>
                </div>

                <div className="create-proj-input-radio-wrapper">
                    <div className="create-proj-radio-label" htmlFor="proj-name">Status</div>

                    <div className="create-proj-input-radio-container">
                        <div className="create-radio-item-wrap">
                            <label className="create-radio-label" htmlFor="create-avail">Available</label>
                            <input id="create-avail" type="radio" name="create-avail" />
                        </div>

                        <div className="create-radio-item-wrap">
                            <label className="create-radio-label" htmlFor="create-avail">Unavailable</label>
                            <input id="create-avail" type="radio" name="create-avail" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="create-proj-hr" />

            <div className="create-project-info-heading">Amenities</div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Bedroom</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Bathroom</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Toilet</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Sitting room</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Dining room</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Kitchen Net</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-two-fields-row">

                <div className="create-proj-inner-radio-wrapper">

                    <div className="create-proj-input-radio-wrapper">
                        <div className="create-proj-radio-label" htmlFor="proj-name">Laundry room</div>

                        <div className="create-proj-input-radio-container">
                            <div className="create-radio-item-wrap">
                                <label className="create-radio-label" htmlFor="create-avail">Yes</label>
                                <input id="create-avail" type="radio" name="laundry-room" />
                            </div>

                            <div className="create-radio-item-wrap">
                                <label className="create-radio-label" htmlFor="create-avail">No</label>
                                <input id="create-avail" type="radio" name="laundry-room" />
                            </div>
                        </div>
                    </div>

                    <div className="create-proj-input-radio-wrapper">
                        <div className="create-proj-radio-label" htmlFor="proj-name">Kitchen store</div>

                        <div className="create-proj-input-radio-container">
                            <div className="create-radio-item-wrap">
                                <label className="create-radio-label" htmlFor="create-avail">Yes</label>
                                <input id="create-avail" type="radio" name="create-avail" />
                            </div>

                            <div className="create-radio-item-wrap">
                                <label className="create-radio-label" htmlFor="create-avail">No</label>
                                <input id="create-avail" type="radio" name="create-avail" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="create-proj-input-container">
                </div>
            </div>
            <div className="create-proj-hr" />

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Total units</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project address</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-two-fields-row">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Longitude</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Latitude</label>
                    <input type="text" />
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
