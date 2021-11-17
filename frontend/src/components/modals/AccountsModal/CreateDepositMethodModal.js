import React, { useState } from 'react'
import ReactDom from 'react-dom';
import './CreateDepositMethodModal.css';

import close_icon from '../../../assets/icons/close-icon.png';
import upload_icon from '../../../assets/icons/create-deposit-img-upload.png'
import { Field, Form, Formik } from 'formik';

const CreateDepositMethodModal = ({open,onClose}) => {
    const [selectedProfileImg, setSelectedProfileImg] = useState('')
    
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
            <div onClick={onClose} className="create-deposit-method-container">
                <div onClick={(event)=> event.stopPropagation()} className="create-deposit-method-input-wrapper">
                    <div className="create-deposit-heading">
                        <div>Create Deposit Method</div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>
                    <div className="create-deposit-method-form-wrapper">
                        <Formik>
                            <Form>
                                <div className='create-dep-mtd-form-content'>
                                    <div className="create-deposit-mtd-image-upload-wrapper">
                                        {
                                            selectedProfileImg !== '' 
                                                ?<img className="create-deposit-mtd-image-upload" src={selectedProfileImg} alt="profile placeholder" />
                                                :<img className="create-deposit-mtd-image-upload" src={upload_icon} alt="profile placeholder" />
                                        }
                                        <div className="create-deposit-mtd-img-upload-btn-wrapper">
                                            <input onChange={handleProfileImgUpload} id="create-deposit-mtd-upload-btn" className="create-deposit-mtd-img-input" type="file" accept="image/png, image/jpeg, image/jpg" />
                                            <label className="create-deposit-mtd-upload-btn" htmlFor="create-deposit-mtd-upload-btn">Upload Image</label>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="create-dep-mtd-input-wrapper">
                                            <label className="create-dep-mtd-label" htmlFor="dep-name">Name</label>
                                            <Field id="dep-name" name="name" className="create-dep-mtd-input" />
                                        </div>

                                        <div className="create-dep-mtd-input-wrapper">
                                            <label className="create-dep-mtd-label" htmlFor="dep-description">Description</label>
                                            <Field id="dep-description" as="textarea" name="description" className="create-dep-mtd-input" />
                                        </div>

                                        <div className="create-dep-mtd-input-wrapper">
                                            <label className="create-dep-mtd-label" htmlFor="dep-powered">Powered by</label>
                                            <Field id="dep-powered" name="powered" className="create-dep-mtd-input" />
                                        </div>
                                    </div>
                                    <button className="create-dep-mtd-modal-btn">Create Deposit Method</button>
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

export default CreateDepositMethodModal
