import React, { useState } from 'react'
import ReactDom from 'react-dom';
import './SoleFI.css';

import close_icon from '../../../assets/icons/close-icon.png';
import upload_icon from '../../../assets/icons/create-deposit-img-upload.png'
import { Field, Form, Formik } from 'formik';
import { useLocation } from 'react-router-dom';

const SoleFI = ({setIsOpen, open, onClose}) => {
    const location = useLocation()
    const [selectedProfileImg, setSelectedProfileImg] = useState('')
    
    console.log('locationnnn', location.search.split('=')[1])
    // location.search ? Number(location.search.split('=')[1]) : 1;
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
            <div onClick={onClose} className="s-f-i-container">
                <div onClick={(event)=> event.stopPropagation()} className="s-f-i-input-wrapper">
                    <div className="s-f-i-heading">
                        <div>Create Deposit Method</div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>
                    <div className="s-f-i-form-wrapper">
                        <Formik>
                            <Form>
                                <div className='s-f-i-mtd-form-content'>
                                    <div className="s-f-i-mtd-image-upload-wrapper">
                                        {
                                            selectedProfileImg !== '' 
                                                ?<img className="s-f-i-mtd-image-upload" src={selectedProfileImg} alt="profile placeholder" />
                                                :<img className="s-f-i-mtd-image-upload" src={upload_icon} alt="profile placeholder" />
                                        }
                                        <div className="s-f-i-mtd-img-upload-btn-wrapper">
                                            <input onChange={handleProfileImgUpload} id="s-f-i-mtd-upload-btn" className="s-f-i-mtd-img-input" type="file" accept="image/png, image/jpeg, image/jpg" />
                                            <label className="s-f-i-mtd-upload-btn" htmlFor="s-f-i-mtd-upload-btn">Upload Image</label>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="s-f-i-mtd-input-wrapper">
                                            <label className="s-f-i-mtd-label" htmlFor="dep-name">Name</label>
                                            <Field id="dep-name" name="name" className="s-f-i-mtd-input" />
                                        </div>

                                        <div className="s-f-i-mtd-input-wrapper">
                                            <label className="s-f-i-mtd-label" htmlFor="dep-description">Description</label>
                                            <Field id="dep-description" as="textarea" name="description" className="s-f-i-mtd-input" />
                                        </div>

                                        <div className="s-f-i-mtd-input-wrapper">
                                            <label className="s-f-i-mtd-label" htmlFor="dep-powered">Powered by</label>
                                            <Field id="dep-powered" name="powered" className="s-f-i-mtd-input" />
                                        </div>
                                    </div>
                                    <button className="s-f-i-mtd-modal-btn">Create Deposit Method</button>
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

export default SoleFI
