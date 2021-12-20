import React, { useState } from 'react'
import ReactDom from 'react-dom';
import './CreateProjectDependency.css';

import close_icon from '../../../assets/icons/close-icon.png';
import Group5487 from '../../../assets/icons/group_5487.svg';
import upload_icon from '../../../assets/icons/create-deposit-img-upload.png'
import { Field, Form, Formik } from 'formik';
import { useEffect } from 'react';

const CreateProjectDependency = ({open,onClose}) => {
    const [selectedProfileImg, setSelectedProfileImg] = useState('')

    useEffect(()=> {
        if(open){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }
    })
    
    const encodeFileToBase64 = (file) => {
        return new Promise((resolve, reject)=> {
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }

    const handleProfileImgUpload = (e) => {
        if(e.target.files){
                encodeFileToBase64(e.target.files[0])
                .then(result =>{
                    setSelectedProfileImg(result)
                })
        }
    }

    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div onClick={onClose} className="c-p-d-container">
                <div onClick={(event)=> event.stopPropagation()} className="c-p-d-input-wrapper">
                    <div className="c-p-d-heading">
                        <div>Create Project Dependency</div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>
                    <div className="c-p-d-form-wrapper">
                        <Formik>
                            <Form>
                                <div className='c-p-d-form-content'>

                                <div className="c-p-d-top-image-upload-wrapper">
                                        {
                                            selectedProfileImg !== '' 
                                                ?<img className="c-p-d-top-image-upload" src={selectedProfileImg} alt="profile placeholder" />
                                                :<img className="c-p-d-top-image-upload" src={Group5487} alt="profile placeholder" />
                                        }
                                        <div className="c-p-d-img-upload-btn-wrapper">
                                            <input onChange={handleProfileImgUpload} id="c-p-d-upload-btn" className="c-p-d-img-input" type="file" accept="image/png, image/jpeg, image/jpg" />
                                            <label className="c-p-d-top-upload-btn" htmlFor="c-p-d-upload-btn">Upload Icon</label>
                                        </div>

                                    </div>

                                    <div className='actual-input-main-wrap'>
                                        <div className="c-p-d-input-wrapper-2">
                                            <label className="c-p-d-label" htmlFor="dep-name">Name</label>
                                            <Field id="dep-name" name="name" className="c-p-d-input" />
                                        </div>

                                        <div className="c-p-d-input-wrapper-2">
                                            <label className="c-p-d-label" htmlFor="dep-description">Description</label>
                                            <Field id="dep-description" as="textarea" name="description" className="c-p-d-input" />
                                        </div>


                                
                                        <div className='c-p-d-radio-container'>
                                            <div className='c-p-d-radio-desc'>Image Upload</div>
                                            <div className='rads-wrapper'>
                                                <div className='rad-and-lab'>
                                                    <label htmlFor="enable-img-upload">Yes</label><input name='dep-img-upload' id='enable-img-upload' type="radio" />
                                                </div>

                                                <div className='rad-and-lab'>
                                                    <label htmlFor="disable-img-upload">No</label><input name='dep-img-upload' id='disable-img-upload' type="radio" />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="c-p-d-bottom-image-upload-wrapper">
                                        {
                                            selectedProfileImg !== '' 
                                                ?<img className="c-p-d-bottom-image-upload" src={selectedProfileImg} alt="profile placeholder" />
                                                :<img className="c-p-d-bottom-image-upload" src={upload_icon} alt="profile placeholder" />
                                        }
                                        <div className="c-p-d-img-upload-btn-wrapper">
                                            <input onChange={handleProfileImgUpload} id="c-p-d-upload-btn" className="c-p-d-img-input" type="file" accept="image/png, image/jpeg, image/jpg" />
                                            <label className="c-p-d-bottom-upload-btn" htmlFor="c-p-d-upload-btn">Upload Image</label>
                                        </div>

                                    </div>

                                        {/* <div className="c-p-d-input-wrapper-2">
                                            <label className="c-p-d-label" htmlFor="dep-powered">Powered by</label>
                                            <Field id="dep-powered" name="powered" className="c-p-d-input" />
                                        </div> */}
                                    </div>
                                    <button className="c-p-d-modal-btn">Create Dependency</button>
                                </div>
                            </Form>

                        </Formik>
                    </div>
                </div>
            </div>        
        </>,
        document.getElementById('modal-portal')
    )
}

export default CreateProjectDependency
