import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { RiUploadCloudFill } from 'react-icons/ri';
import TempImg from '../../../assets/images/office-building.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { listAmenities } from '../../../redux/actions/projectActions';

const Bundle = ({
    selectedFileError,
    selectedBundleImagesError,
    item,
    theIndex,
    bundleLength,
    handleBundleInputChange,
    handleRemoveBundle,
    handleBundleAmenitiesFieldChange,
    bundleAmenities,
    bundleAmenitiesErrors,
    setBundleAmenitiesErrors,
    setBundleAmenities,
    projectBundlesInfo,
    handleDeleteBundleImage, fileName, handleFileChange, handleBundleImageChange, selectedBundleImages }) => {

    const [showBundleForm, setShowBundleForm] = useState(true);

    const handleBundleAmenitiesValueChange = (index, event) => {
        event.preventDefault();
        event.persist();

        setBundleAmenities(prev => {

            return prev.map((item, i) => {
                if (i !== index) {
                    return item;
                }

                setBundleAmenitiesErrors(prev => {
                    let newArr = [...prev]

                    newArr[i][Object.keys(newArr[i])] = null;

                    return newArr;
                })

                return {
                    ...item,
                    [event.target.name]: event.target.value
                }
            })
        });
    }

    const handleRemoveBundleAmenitiesInput = (index, event) => {
        event.preventDefault();

        setBundleAmenities(prev => prev.filter((item, i) => i !== index))
        setBundleAmenitiesErrors(prev => prev.filter((item, i) => i !== index))
    }

    const dispatch = useDispatch();
    const amenityList = useSelector(state => state.amenityList);
    const { amenities, amenityError, amenityLoading } = amenityList;

    useEffect(() => {
        dispatch(listAmenities())
    }, [dispatch])

    return (
        <div className="bundle-inputs-wrapper">

            {
                !showBundleForm && !(theIndex === (bundleLength - 1)) ? (
                    <div className="bundle-inputs-summarized">
                        <img className="bundle-item-img" src={item.bundlePhotos[0]} alt="temp" />
                        <div className="content-details">
                            <div className="content-details-item">
                                <div className="mini-heading">Title</div>
                                <div className="mini-desc">{item?.title}</div>
                            </div>

                            <div className="content-details-item">
                                <div className="mini-heading">Bundle Size</div>
                                <div className="mini-desc">{item?.size}</div>
                            </div>

                            <div className="content-details-item">
                                <div className="mini-heading">Bundle Price</div>
                                <div className="mini-desc">{item?.price}</div>
                            </div>

                            <div className="content-details-item">
                                <div className="mini-heading">Deed Title</div>
                                <div className="mini-desc">{item?.deedTitle}</div>
                            </div>
                        </div>

                        <div className="controls-wrapper">
                            <button onClick={(e) => handleRemoveBundle(e, theIndex)} className="delete-btn">Delete</button>
                            <button onClick={() => setShowBundleForm(!showBundleForm)} className="expand-collapse-btn">Expand</button>
                        </div>
                    </div>
                ) : null
            }


            {
                showBundleForm || (theIndex === (bundleLength - 1)) ?
                    <div className="bundle-form-wrapper">

                        <div className="title-and-collapse-btn-wrapper">
                            <div className="create-investment-info-heading">Bundle</div>
                            <button onClick={() => setShowBundleForm(!showBundleForm)} className="expand-collapse-btn">Collapse</button>
                        </div>
                        {
                            showBundleForm?
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
                                <label className="create-proj-input-label" htmlFor="proj-name">Photos</label>
                                <div>
                                    <div className={selectedBundleImagesError ? "create-proj-images-container error-border" : "create-proj-images-container"}>
                                        {
                                            projectBundlesInfo[theIndex].bundlePhotos?
                                            projectBundlesInfo[theIndex].bundlePhotos.map((image, index) => {
                                                return (
                                                    <div key={index} className="create-proj-preview-img-wrapper">
                                                        <IoCloseOutline onClick={() => handleDeleteBundleImage(theIndex, index)} className="proj-create-close-icon" />
                                                        <img className="proj-preview-img" src={image} alt="rand" />
                                                    </div>
                                                )
                                            }) : null
                                        }



                                        <div className="proj-add-img-wrapper">
                                            <label className="proj-add-img-label" htmlFor="proj-add-img">
                                                <AiOutlinePlus className="proj-add-img" /></label>
                                            <input onChange={(e)=>{handleBundleImageChange(theIndex, e)}} multiple id="proj-add-img" className="proj-add-img-input" type="file" accept="image/png, image/jpeg, image/jpg" />
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

                                <div className={selectedFileError ? "create-proj-input-with-suffix error-border" : "create-proj-input-with-suffix"}>
                                    <div className="create-proj-file-disp">{fileName}</div>
                                    <div className={"proj-file-save-container"}>
                                        <input onChange={(e)=>handleFileChange(theIndex, e)} className="proj-file-save" type="file" id="proj-file-save" />

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
                                {
                                    bundleAmenities.map((item, index) => (
                                        <div key={`item-${index}`} className="amenities-item">
                                            <div className="amenities-name">{Object.keys(item)}</div>
                                            <div className="amenities-amt-input-container">
                                                {/* {console.log('wgat is this',)} */}
                                                <input
                                                    name={Object.keys(item)}
                                                    value={Object.values(item)}
                                                    className={Object.values(bundleAmenitiesErrors[index])[0] ? "error-border" : ""}
                                                    onChange={(event) => handleBundleAmenitiesValueChange(index, event)}
                                                    type="text" placeholder="Input Amount" />
                                                <button onClick={(event) => handleRemoveBundleAmenitiesInput(index, event)}><span>Delete</span><AiOutlineClose /></button>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                        </div>
                        : null
    }
                    </div>
                    :
                    null
            }


        </div>
    )
}

export default Bundle
