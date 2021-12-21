import React, { useState } from 'react'
import ReactDom from 'react-dom';
import './CreateProjectDependency.css';
import { useHistory } from 'react-router-dom';


import * as Yup from 'yup';
import { ClipLoader } from 'react-spinners'
import Swal from 'sweetalert2';

import close_icon from '../../../assets/icons/close-icon.png';
import Group5487 from '../../../assets/icons/group_5487.svg';
import upload_icon from '../../../assets/icons/create-deposit-img-upload.png'
import { Field, Form, Formik, useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAmenity, createBuildingType, createCategory, createLandTitle, createProjectStatus } from '../../../redux/actions/projDepActions';

const validationSchema = Yup.object({
    name:Yup.string().required('required'),
    description:Yup.string().required('required'),
})

const CreateProjectDependency = ({open,onClose, dependencyType}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const depProjStatusCreate = useSelector(state => state.depProjStatusCreate);
    const depLandTitleCreate = useSelector(state => state.depLandTitleCreate);
    const depAmenitiesCreate = useSelector(state => state.depAmenitiesCreate);
    const depBuildingTypeCreate = useSelector(state => state.depBuildingTypeCreate);
    const depCategoryCreate = useSelector(state => state.depCategoryCreate);

    const [selectedProfileImg, setSelectedProfileImg] = useState('')

    useEffect(()=> {
        if(open){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }
    })

    useEffect(()=> {
        if(dependencyType === 'project-status'){
            if(depProjStatusCreate.success && open){
                Swal.fire({
                    icon: 'success',
                    title: 'Dependency Created Successfully',
                    showConfirmButton: false,
                    timer: 2000
                  }).then(()=>{
                      history.push('/project-dependencies/project-status');
                      onClose();
                  })
            }
        } else if(dependencyType === 'land-title'){
            if(depLandTitleCreate.success && open){
                Swal.fire({
                    icon: 'success',
                    title: 'Dependency Created Successfully',
                    showConfirmButton: false,
                    timer: 2000
                  }).then(()=>{
                      history.push('/project-dependencies/land-title');
                      onClose();
                  })
            }
        } else if(dependencyType === 'amenity'){
            if(depAmenitiesCreate.success){
                Swal.fire({
                    icon: 'success',
                    title: 'Dependency Created Successfully',
                    showConfirmButton: false,
                    timer: 2000
                  }).then(()=>{
                      history.push('/project-dependencies/amenity');
                      onClose();
                  })
            }
        } else if(dependencyType === 'building-type'){
            if(depBuildingTypeCreate.success && open){
                Swal.fire({
                    icon: 'success',
                    title: 'Dependency Created Successfully',
                    showConfirmButton: false,
                    timer: 2000
                  }).then(()=>{
                      history.push('/project-dependencies/building-type');
                      onClose();
                  })
            }

        } else if(dependencyType === 'categorys'){
            if(depCategoryCreate.success && open){
                Swal.fire({
                    icon: 'success',
                    title: 'Dependency Created Successfully',
                    showConfirmButton: false,
                    timer: 2000
                  }).then(()=>{
                      history.push('/project-dependencies/categorys');
                      onClose();
                  })
            }
        } 
    },[dependencyType,history, depProjStatusCreate, 
            depLandTitleCreate,
            depAmenitiesCreate,
            depBuildingTypeCreate,
            depCategoryCreate,
            onClose,open])
    
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

    const formik = useFormik({
        initialValues:{
            name:'',
            description:''
        },
        onSubmit: async values => {
            if(dependencyType === 'project-status'){
                await dispatch(createProjectStatus({name:values.name,description:values.description}))
            } else if(dependencyType === 'land-title'){
                await dispatch(createLandTitle({name:values.name,description:values.description}))
            }
            else if(dependencyType === 'amenity'){
                await dispatch(createAmenity({name:values.name,description:values.description}))
            }
            else if(dependencyType === 'building-type'){
                await dispatch(createBuildingType({name:values.name,description:values.description}))
            }
            else if(dependencyType === 'categorys'){
                await dispatch(createCategory({name:values.name,description:values.description}))
            }



        },

        validationSchema,
    })

    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div onClick={onClose} className="c-p-d-container">
                <div onClick={(event)=> event.stopPropagation()} className="c-p-d-input-wrapper">
                    <div className="c-p-d-heading">
                        <div>Create Project Dependency</div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                    <div className="c-p-d-form-wrapper">
                        {/* <Formik> */}
                            {/* <Form> */}
                            
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
                                            <input id="dep-name" name="name" 
                                            className={formik.touched.name && formik.errors.name?"c-p-d-input c-p-d-input-error":"c-p-d-input"} 
                                                value={formik.values.name} 
                                                onChange={formik.handleChange} 
                                                onBlur={formik.handleBlur}
                                            />
                                        </div>

                                        <div className="c-p-d-input-wrapper-2">
                                            <label className="c-p-d-label" htmlFor="dep-description">Description</label>
                                            <textarea id="dep-description" 
                                                rows='4' 
                                                cols='50' 
                                                name="description" 
                                                className={formik.touched.description && formik.errors.description? "c-p-d-input c-p-d-input-error" : "c-p-d-input"}
                                                value={formik.values.description} 
                                                onChange={formik.handleChange} 
                                                onBlur={formik.handleBlur}
                                                ></textarea>
                                        </div>


                                
                                        {/* <div className='c-p-d-radio-container'>
                                            <div className='c-p-d-radio-desc'>Image Upload</div>
                                            <div className='rads-wrapper'>
                                                <div className='rad-and-lab'>
                                                    <label htmlFor="enable-img-upload">Yes</label><input name='dep-img-upload' id='enable-img-upload' type="radio" />
                                                </div>

                                                <div className='rad-and-lab'>
                                                    <label htmlFor="disable-img-upload">No</label><input name='dep-img-upload' id='disable-img-upload' type="radio" />
                                                </div>

                                            </div>
                                        </div> */}
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
                                    <button type='submit' className="c-p-d-modal-btn">Create Dependency</button>
                                </div>
                            {/* </Form> */}

                        {/* </Formik> */}
                    </div>
                    </form>
                </div>
            </div>        
        </>,
        document.getElementById('modal-portal')
    )
}

export default CreateProjectDependency
