import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';

const Amenities = () => {
    return (
        <>
            <div className="create-project-info-heading">Amenities</div>

                <div className="create-proj-one-field-row amenities-and-its-lists-container">

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
        </>
    )
}

export default Amenities
