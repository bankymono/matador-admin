import React from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import {RiCalendarEventFill, RiUploadCloudFill} from 'react-icons/ri';
import TempImg from '../../../assets/images/office-building.jpg';

const Bundle = ({handleDeleteBundleImage,fileName,handleFileChange, handleBundleImageChange, selectedBundleImages }) => {
    return (
        <div className="bundle-inputs-wrapper">

        {/* <div className="bundle-inputs-summarized"> */}
        <div className="bundle-inputs-summarized">
            <img className="bundle-item-img" src={TempImg} alt="temp" />
            <div className="content-details">
                <div className="content-details-item">
                    <div className="mini-heading">Title</div>
                    <div className="mini-desc">3 Bedroom</div>
                </div>

                <div className="content-details-item">
                    <div className="mini-heading">Bundle Size</div>
                    <div className="mini-desc">4500</div>
                </div>

                <div className="content-details-item">
                    <div className="mini-heading">Bundle Price</div>
                    <div className="mini-desc">N 2,500,000</div>
                </div>

                <div className="content-details-item">
                    <div className="mini-heading">Deed Title</div>
                    <div className="mini-desc">Astrid 3.0</div>
                </div>
            </div>
            
            <div className="controls-wrapper">
                <button className="delete-btn">Delete</button>
                <button className="expand-collapse-btn">Expand</button>
            </div>
        </div>
        {/* </div> */}
        
        <div className="bundle-form-wrapper">

            <div className="create-investment-info-heading">Bundle</div>

            <div className="create-proj-two-fields-row bundle-input-container">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Title</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Size</label>
                    <input type="text" />
                </div>
            </div>

            <div className="create-proj-one-field-row bundle-input-container">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Project images</label>
                    <div>
                        <div className="create-proj-images-container">

                            {
                                selectedBundleImages.map((image, index) => {
                                    return (
                                        <div key={index} className="create-proj-preview-img-wrapper">
                                            <IoCloseOutline onClick={()=>handleDeleteBundleImage(index)} className="proj-create-close-icon"/>
                                            <img className="proj-preview-img" src={image} alt="rand" />
                                        </div>
                                    )
                                })
                            }


                            
                            <div className="proj-add-img-wrapper">
                                <label className="proj-add-img-label" htmlFor="proj-add-img">
                                <AiOutlinePlus className="proj-add-img" /></label>
                                <input onChange={handleBundleImageChange} multiple id="proj-add-img" className="proj-add-img-input" type="file" accept="image/png, image/jpeg, image/jpg" />
                            </div>
                            
                        </div>
                        <div className="proj-new-accept-img-desc">Accepted file type: .jpg, .png and .jpeg</div>
                    </div>
                </div>
            </div>

            <div className="create-proj-two-fields-row bundle-input-container">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-name">Deed title</label>
                    <input type="text" />
                </div>

                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Deed file</label>

                    <div className="create-proj-input-with-suffix">
                        <div className="create-proj-file-disp">{fileName}</div>
                        <div className="proj-file-save-container">
                            <input onChange={handleFileChange} className="proj-file-save" type="file" id="proj-file-save" />
                            
                            <label className="proj-file-save-icon-wrap" htmlFor="proj-file-save">
                                <RiUploadCloudFill className="proj-file-save-icon" />
                                <span>Upload file</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>


            <div className="create-proj-two-fields-row bundle-input-container">
                <div className="create-proj-input-container">
                    <label className="create-proj-input-label" htmlFor="proj-img-name">Price</label>
                    <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                </div>

                <div className="create-proj-input-container">
                </div>
            </div>

            <div className="create-proj-hr bundle-input-container" />

            {/* <Amenities /> */}

            <div className="create-investment-info-heading bundle-amenities-heading">Amenities</div>

            <div className=" bundle-amenities create-proj-one-field-row amenities-and-its-lists-container">
                
                <div className="create-proj-amenities-container">
                    <div className="add-amenity-label">Add Amenity</div>
                    <select className="amenity-select">
                        <option className="amen-option">Amenity one</option>
                        <option className="amen-option">Amenity two</option>
                        <option className="amen-option">Amenity three</option>
                    </select>
                </div>

                <div className="amenities-list-wrapper">
                    <div  className="amenities-item">
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
                    </div>
                    
                </div>
            </div>


        </div>

    </div>  
    )
}

export default Bundle
