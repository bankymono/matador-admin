import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { RiUploadCloudFill } from 'react-icons/ri';
import TempImg from '../../../assets/images/office-building.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { listAmenities } from '../../../redux/actions/projectActions';
import './Bundle.css'
const Bundle = ({
    selectedFileError,
    selectedBundleImagesError,
    item,
    theIndex,
    bundleLength,
    handleBundleInputChange,
    handleRemoveBundle,
    handleBundleAmenitiesFieldChange,
    handleBundleAmenitiesValueChange,
    bundleAmenities,
    bundleAmenitiesErrors,
    setBundleAmenitiesErrors,
    setBundleAmenities,
    projectBundlesInfo,
    handleDeleteBundleImage, 
    handleRemoveBundleAmenitiesInput,
    fileName, handleFileChange, handleBundleImageChange, selectedBundleImages }) => {

    const [showBundleForm, setShowBundleForm] = useState(true);

    const dispatch = useDispatch();
    const amenityList = useSelector(state => state.amenityList);
    const { amenities, amenityError, amenityLoading } = amenityList;

    useEffect(() => {
        dispatch(listAmenities())
    }, [dispatch])

    return (
        <div className="bundle-inputs-wrapper">
            {
                <div className="bundle-form-wrapper">
                    <div className="title-and-collapse-btn-wrapper">
                        <div className="create-investment-info-heading">Bundle ({theIndex})</div>
                        <div className="controls-wrapper">
                            <button onClick={(e) => handleRemoveBundle(e, theIndex)} className="bundle-delete-btn">Delete</button>
                            <button onClick={() => setShowBundleForm(!showBundleForm)} className="expand-collapse-btn">{showBundleForm ? 'Collapse' : 'Expand'}</button>
                        </div>
                    </div>
                    {
                        showBundleForm ?
                            <div>
                                <div className="create-proj-two-fields-row bundle-input-container">
                                    <div className="create-proj-input-container">
                                        <label className="create-proj-input-label" htmlFor="proj-name">Title</label>
                                        <input type="text" name="title"
                                            className={item.titleError ? "error-border" : ""}
                                            value={item.title}
                                            onChange={(e) => handleBundleInputChange(theIndex, e)} />
                                    </div>

                                    <div className="create-proj-input-container">
                                        <label className="create-proj-input-label" htmlFor="proj-name">Size</label>
                                        <input type="text" name="size"
                                            className={item.sizeError ? "error-border" : ""}
                                            value={item.size}
                                            onChange={(e) => handleBundleInputChange(theIndex, e)} />
                                    </div>
                                </div>

                                <div className="create-proj-one-field-row bundle-input-container">
                                    <div className="create-proj-input-container">
                                        <label className="create-proj-input-label">Photos</label>
                                        <div>
                                            <div className={item.bundlePhotosError ? "create-proj-images-container error-border" : "create-proj-images-container"}>
                                                {
                                                    item.bundlePhotos ?
                                                        item.bundlePhotos.map((image, index) => {
                                                            return (
                                                                <div key={index} className="create-proj-preview-img-wrapper">
                                                                    <IoCloseOutline onClick={() => handleDeleteBundleImage(theIndex, index)} className="proj-create-close-icon" />
                                                                    <img className="proj-preview-img" src={image} alt="rand" />
                                                                </div>
                                                            )
                                                        }) : null
                                                }



                                                <div className="proj-add-img-wrapper">
                                                    <label className="proj-add-img-label">
                                                        <AiOutlinePlus className="proj-add-img" />
                                                        <input onChange={(e) => { handleBundleImageChange(theIndex, e) }}
                                                        multiple
                                                        type="file" accept="image/png, image/jpeg, image/jpg"
                                                        hidden
                                                        />
                                                
                                                    </label>
                                                </div>

                                            </div>
                                            <div className="proj-new-accept-img-desc">Accepted file type: .jpg, .png and .jpeg</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="create-proj-two-fields-row bundle-input-container">
                                    <div className="create-proj-input-container">
                                        <label className="create-proj-input-label" htmlFor="proj-name">Deed title</label>
                                        <input type="text" name="deedTitle"
                                            className={item.deedTitleError ? "error-border" : ""}
                                            value={item.deedTitle}
                                            onChange={(e) => handleBundleInputChange(theIndex, e)} />
                                    </div>

                                    <div className="create-proj-input-container">
                                        <label className="create-proj-input-label" htmlFor="proj-img-name">Deed file</label>

                                        <div className={item.deedFileError ? "create-proj-input-with-suffix error-border" : "create-proj-input-with-suffix"}>
                                            <div className="create-proj-file-disp">{item.deedFile ? `Deed File Selected (${theIndex + 1})` : 'No file chosen'}</div>

                                            <div className={"proj-file-save-container"}>
                                                <label className="proj-file-save-icon-wrap">
                                                    <input
                                                        name={`deefile-${theIndex}`}
                                                        onChange={(e) => handleFileChange(theIndex, e)}
                                                        hidden
                                                        type="file"
                                                    />

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
                                        <div className="create-proj-input-with-prefix">
                                            <span className="create-proj-input-prefix">N</span>
                                            <input name="price"
                                                className={item.priceError ? "error-border" : ""}
                                                value={item.price}
                                                onChange={(e) => handleBundleInputChange(theIndex, e)} type="text" /></div>
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
                                        <select
                                            className={item.amenitiesSelectError ? "amenity-select error-border" : "amenity-select"}
                                            value={item.amenitiesSelect}
                                            onChange={(e) => handleBundleAmenitiesFieldChange(e, theIndex)}
                                        >
                                            <option className="amen-option">Select One</option>
                                            {amenityLoading === false ? amenities.data.map(el => (
                                                <option key={el.id} value={el.name}>{el.name}</option>
                                            )) : null}
                                        </select>
                                    </div>

                                    <div className="amenities-list-wrapper">
                                        {   item.amenitiesSelect?
                                            item.amenitiesSelect.map((item, index) => (
                                                <div key={`item-${index}`} className="amenities-item">
                                                    <div className="amenities-name">{item.name}</div>
                                                    <div className="amenities-amt-input-container">
                                                        <input
                                                            name={`${theIndex}-${item}-amenity`}
                                                            value={item.value}
                                                            className={!item.value ? "error-border" : ""}
                                                            onChange={(event) => handleBundleAmenitiesValueChange(theIndex ,index, event.target.value)}
                                                            type="text" placeholder="Input Amount" 
                                                        />
                                                        <button onClick={(event) => handleRemoveBundleAmenitiesInput(theIndex ,index)}><span>Delete</span><AiOutlineClose /></button>
                                                    </div>
                                                </div>
                                            )):
                                            null
                                        }


                                    </div>
                                </div>
                            </div>
                            : null
                    }
                </div>
            }
        </div>
    )
}

export default Bundle
