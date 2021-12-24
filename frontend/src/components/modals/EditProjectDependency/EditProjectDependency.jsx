import React, { useState } from 'react'
import ReactDom from 'react-dom';
import './EditProjectDependency.css';
import { useHistory } from 'react-router-dom';


import * as Yup from 'yup';
import { ClipLoader } from 'react-spinners'
import Swal from 'sweetalert2';

import close_icon from '../../../assets/icons/close-icon.png';
import Group5487 from '../../../assets/icons/group_5487.svg';
import upload_icon from '../../../assets/icons/create-deposit-img-upload.png'
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAmenity, createBuildingType, createCategory, createLandTitle, createProjectStatus, getAmenityDetail, getBuildingTypeDetail, getCategoryDetail, getLandTitleDetail, getProjStatusDetail, updateAmenity, updateBuildingType, updateCategory, updateLandTitle, updateProjectStatus } from '../../../redux/actions/projDepActions';



const EditProjectDependency = ({open,onClose, dependencyType, depId}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [projDepDetail, setProjDepDetail] = useState({})

    const depProjStatusDetail = useSelector(state => state.depProjStatusDetail);
    const depLandTitleDetail = useSelector(state => state.depLandTitleDetail);
    const depAmenityDetail = useSelector(state => state.depAmenityDetail);
    const depBuildingTypeDetail = useSelector(state => state.depBuildingTypeDetail);
    const depCategoryDetail = useSelector(state => state.depCategoryDetail);

    const depProjStatusCreate = useSelector(state => state.depProjStatusCreate);
    const depLandTitleCreate = useSelector(state => state.depLandTitleCreate);
    const depAmenitiesCreate = useSelector(state => state.depAmenitiesCreate);
    const depBuildingTypeCreate = useSelector(state => state.depBuildingTypeCreate);
    const depCategoryCreate = useSelector(state => state.depCategoryCreate);

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let isValid = validateInputs()
        

                const data = {
                    name:name,
                    description:description,
                  }

                    if(isValid){

                        if(dependencyType === 'project-status'){
                            await dispatch(updateProjectStatus(depId,data))
                        } else if(dependencyType === 'land-title'){
                            await dispatch(updateLandTitle(depId,data))
                        }
                        else if(dependencyType === 'amenity'){
                            await dispatch(updateAmenity(depId,data))
                        }
                        else if(dependencyType === 'building-type'){
                            await dispatch(updateBuildingType(depId,data))
                        }
                        else if(dependencyType === 'categorys'){
                            await dispatch(updateCategory(depId,data))
                        }
                    
                    }

    }

    const validateInputs = () => {
        let nameError = '';
        let descriptionError = '';




        if(name.trim() === ''){
            nameError="Field is required";
        }



        if(description.trim() === ''){
            descriptionError="Field is required";
        }




        if(
            nameError 
        || descriptionError){
            setNameError(nameError)
            setDescriptionError(descriptionError)

            return false;
        }
        
        return true;
    }

    const handleChange = (e) => {
        switch(e.target.name){
            case "name":
                setName(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
                default:
                    return null;
        }
    }

    useEffect(()=>{
        console.log('ddd',depId)
        if(depId){
            console.log('edit modal',depId)
            if(dependencyType==='project-status'){
                dispatch(getProjStatusDetail(depId));
                // console.log('got here')
            } else if(dependencyType==='land-title'){
                dispatch(getLandTitleDetail(depId))
            } else if(dependencyType==='amenity'){ 
                dispatch(getAmenityDetail(depId))
            } else if(dependencyType==='building-type'){
                dispatch(getBuildingTypeDetail(depId))
            } else if(dependencyType==='categorys'){
                // console.log('ha got here')
                dispatch(getCategoryDetail(depId))
            }
        }

    },[dispatch, depId, dependencyType, open])

    useEffect(()=>{
        if(depProjStatusDetail.projDepStatusDetailLoading === false){

            // setProjDepDetail({
            //     name: depProjStatusDetail.projDepStatusDetail.data?.name,               
            //     description: depProjStatusDetail.projDepStatusDetail.data?.description,               
 
            // })

            setName(depProjStatusDetail.projDepStatusDetail.data?.name);
            setDescription(depProjStatusDetail.projDepStatusDetail.data?.description);
            
        } else if(depLandTitleDetail.projDepLandTitleDetailLoading === false){


            // setProjDepDetail({
            //     name: depLandTitleDetail.projDepLandTitleDetail.data?.name,               
            //     description: depLandTitleDetail.projDepLandTitleDetail.data?.description,               
            // })

            setName(depLandTitleDetail.projDepLandTitleDetail.data?.name);
            setDescription(depLandTitleDetail.projDepLandTitleDetail.data?.description);
        } else if(depAmenityDetail.projDepAmenityDetailLoading === false){


            // setProjDepDetail({
            //     name: depAmenityDetail.projDepAmenityDetail.data?.name,               
            //     description: depAmenityDetail.projDepAmenityDetail.data?.description,               

            // })
            setName(depAmenityDetail.projDepAmenityDetail.data?.name);
            setDescription(depAmenityDetail.projDepAmenityDetail.data?.description);
        } else if(depBuildingTypeDetail.projDepBuildingTypeDetailLoading === false){



            // setProjDepDetail({
            //     name: depBuildingTypeDetail.projDepBuildingTypeDetail.data?.name,               
            //     description: depBuildingTypeDetail.projDepBuildingTypeDetail.data?.description,               

            // })
            setName(depBuildingTypeDetail.projDepBuildingTypeDetail.data?.name);
            setDescription(depBuildingTypeDetail.projDepBuildingTypeDetail.data?.description);

        } else if(depCategoryDetail.projDepCategoryDetailLoading === false){
            console.log('dhh',depCategoryDetail.projDepCategoryDetail.data )

            // setProjDepDetail({
            //     name: depCategoryDetail.projDepCategoryDetail.data?.name,               
            //     description: depCategoryDetail.projDepCategoryDetail.data?.description,               

            // })

            setName(depCategoryDetail.projDepCategoryDetail.data?.name);
            setDescription(depCategoryDetail.projDepCategoryDetail.data?.description);
        } 

    },[dispatch, 
        depId, 
        dependencyType, 
        depProjStatusDetail,
        depLandTitleDetail,
        depAmenityDetail,
        depBuildingTypeDetail,
        depCategoryDetail,
    
    ])

    const [selectedProfileImg, setSelectedProfileImg] = useState('')

    useEffect(()=> {
        if(open){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }
    },[open])

    useEffect(()=> {
        if(dependencyType === 'project-status'){
            console.log('got here')
            if(depProjStatusCreate.success && open){
                console.log('got ehre again')
                Swal.fire({
                    icon: 'success',
                    title: 'Dependency Updated Successfully',
                    showConfirmButton: false,
                    timer: 2000
                  }).then(()=>{
                      history.push('/project-dependencies/project-status');
                      onClose();
                  })
            }
        } else if(dependencyType === 'land-title'){ 
            if(depLandTitleCreate.success&& open){
                Swal.fire({
                    icon: 'success',
                    title: 'Dependency Updated Successfully',
                    showConfirmButton: false,
                    timer: 2000
                  }).then(()=>{
                      history.push('/project-dependencies/land-title');
                      onClose();
                  })
            }
        } else if(dependencyType === 'amenity'){
            if(depAmenitiesCreate.success&& open){
                Swal.fire({
                    icon: 'success',
                    title: 'Dependency Updated Successfully',
                    showConfirmButton: false,
                    timer: 2000
                  }).then(()=>{
                      history.push('/project-dependencies/amenity');
                      onClose();
                  })
            }
        } else if(dependencyType === 'building-type'){
            if(depBuildingTypeCreate.success&& open){
                Swal.fire({
                    icon: 'success',
                    title: 'Dependency Updated Successfully',
                    showConfirmButton: false,
                    timer: 2000
                  }).then(()=>{
                      history.push('/project-dependencies/building-type');
                      onClose();
                  })
            }

        } else if(dependencyType === 'categorys'){
            if(depCategoryCreate.success&& open){
                Swal.fire({
                    icon: 'success',
                    title: 'Dependency Updated Successfully',
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
            onClose, open])
    
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

    // const formik = useFormik({
    //     initialValues:{
    //         name: projDepDetail.name,
    //         description: projDepDetail.description
    //     },
    //     onSubmit: async values => {
    //         if(dependencyType === 'project-status'){
    //             await dispatch(updateProjectStatus({name:values.name,description:values.description}))
    //         } else if(dependencyType === 'land-title'){
    //             await dispatch(updateLandTitle({name:values.name,description:values.description}))
    //         }
    //         else if(dependencyType === 'amenity'){
    //             await dispatch(updateAmenity({name:values.name,description:values.description}))
    //         }
    //         else if(dependencyType === 'building-type'){
    //             await dispatch(updateBuildingType({name:values.name,description:values.description}))
    //         }
    //         else if(dependencyType === 'categorys'){
    //             await dispatch(updateCategory({name:values.name,description:values.description}))
    //         }



    //     },

    //     validationSchema,
    // })

    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div onClick={onClose} className="c-p-d-container">
                <div onClick={(event)=> event.stopPropagation()} className="c-p-d-input-wrapper">
                    <div className="c-p-d-heading">
                        <div>Update Project Dependency</div>
                        <img src={close_icon} alt="close" onClick={onClose} />
                    </div>
                    <form onSubmit={handleSubmit}>
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
                                            className={nameError?"c-p-d-input c-p-d-input-error":"c-p-d-input"} 
                                                value={name} 
                                                onChange={handleChange} 
                                                // onBlur={formik.handleBlur}
                                            />
                                        </div>

                                        <div className="c-p-d-input-wrapper-2">
                                            <label className="c-p-d-label" htmlFor="dep-description">Description</label>
                                            <textarea id="dep-description" 
                                                rows='4' 
                                                cols='50' 
                                                name="description" 
                                                className={descriptionError ? "c-p-d-input c-p-d-input-error" : "c-p-d-input"}
                                                value={description} 
                                                onChange={handleChange} 
                                                // onBlur={formik.handleBlur}
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
                                    <button type='submit' className="c-p-d-modal-btn">Update Dependency</button>
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

export default EditProjectDependency
