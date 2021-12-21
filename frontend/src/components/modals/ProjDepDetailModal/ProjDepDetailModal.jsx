import React, { useEffect } from 'react'
import ReactDom from 'react-dom';
import './ProjDepDetailModal.css';

import close_icon from '../../../assets/icons/close-icon.png';
// import profile_img from '../../../assets/images/profile-img.png';

// import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAmenityDetail, getBuildingTypeDetail, getCategoryDetail, getLandTitleDetail, getProjStatusDetail } from '../../../redux/actions/projDepActions';
import { useState } from 'react';


const ProjDepDetailModal = ({setIsOpen, open, onClose, depId, depType}) => {

    const dispatch = useDispatch();

    const [projDepDetail, setProjDepDetail] = useState({})

    const depProjStatusDetail = useSelector(state => state.depProjStatusDetail);
    const depLandTitleDetail = useSelector(state => state.depLandTitleDetail);
    const depAmenityDetail = useSelector(state => state.depAmenityDetail);
    const depBuildingTypeDetail = useSelector(state => state.depBuildingTypeDetail);
    const depCategoryDetail = useSelector(state => state.depCategoryDetail);
    
    
    useEffect(()=> {
        if(open){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }
    },[open])


    useEffect(()=>{
        if(depId){
            // console.log('ygi',depType)
            if(depType==='project-status'){
                dispatch(getProjStatusDetail(depId));
                // console.log('got here')
            } else if(depType==='land-title'){
                dispatch(getLandTitleDetail(depId))
            } else if(depType==='amenity'){ 
                dispatch(getAmenityDetail(depId))
            } else if(depType==='building-type'){
                dispatch(getBuildingTypeDetail(depId))
            } else if(depType==='categorys'){
                // console.log('ha got here')
                dispatch(getCategoryDetail(depId))
            }
        }

    },[dispatch, depId, depType,open])

    useEffect(()=>{
        if(depProjStatusDetail.projDepStatusDetailLoading === false){
            console.log('what is here',depProjStatusDetail.projDepStatusDetail)
            let dt = new Date(depProjStatusDetail.projDepStatusDetail.data.created_at)
            setProjDepDetail({
                name: depProjStatusDetail.projDepStatusDetail.data?.name,               
                description: depProjStatusDetail.projDepStatusDetail.data?.description,               
                created_by: depProjStatusDetail.projDepStatusDetail.data?.created_by?.first_name + " " +  depProjStatusDetail.projDepStatusDetail.data?.created_by?.last_name,               
                created_at: dt.toLocaleDateString(),
                last_updated_by: depProjStatusDetail.projDepStatusDetail.data?.last_updated_by?.first_name + " " + depProjStatusDetail.projDepStatusDetail.data?.last_updated_by?.last_name 
            })
        } else if(depLandTitleDetail.projDepLandTitleDetailLoading === false){

            let dt = new Date(depLandTitleDetail.projDepLandTitleDetail.data.created_at)
            setProjDepDetail({
                name: depLandTitleDetail.projDepLandTitleDetail.data?.name,               
                description: depLandTitleDetail.projDepLandTitleDetail.data?.description,               
                created_by: depLandTitleDetail.projDepLandTitleDetail.data?.created_by?.first_name + " " +  depLandTitleDetail.projDepLandTitleDetail.data?.created_by?.last_name,               
                created_at: dt.toLocaleDateString(),
                last_updated_by: depLandTitleDetail.projDepLandTitleDetail.data?.last_updated_by?.first_name + " " + depLandTitleDetail.projDepLandTitleDetail.data?.last_updated_by?.last_name 
            })
        } else if(depAmenityDetail.projDepAmenityDetailLoading === false){

            let dt = new Date(depAmenityDetail.projDepAmenityDetail.data.created_at)
            setProjDepDetail({
                name: depAmenityDetail.projDepAmenityDetail.data?.name,               
                description: depAmenityDetail.projDepAmenityDetail.data?.description,               
                created_by: depAmenityDetail.projDepAmenityDetail.data?.created_by?.first_name + " " +  depAmenityDetail.projDepAmenityDetail.data?.created_by?.last_name,               
                created_at: dt.toLocaleDateString(),
                last_updated_by: depAmenityDetail.projDepAmenityDetail.data?.last_updated_by?.first_name + " " + depAmenityDetail.projDepAmenityDetail.data?.last_updated_by?.last_name   
            })
        } else if(depBuildingTypeDetail.projDepBuildingTypeDetailLoading === false){

            let dt = new Date(depBuildingTypeDetail.projDepBuildingTypeDetail.data.created_at)


            setProjDepDetail({
                name: depBuildingTypeDetail.projDepBuildingTypeDetail.data?.name,               
                description: depBuildingTypeDetail.projDepBuildingTypeDetail.data?.description,               
                created_by: depBuildingTypeDetail.projDepBuildingTypeDetail.data?.created_by?.first_name + " " +  depBuildingTypeDetail.projDepBuildingTypeDetail.data?.created_by?.last_name,               
                created_at: dt.toLocaleDateString(),
                last_updated_by: depBuildingTypeDetail.projDepBuildingTypeDetail.data?.last_updated_by?.first_name + " " + depBuildingTypeDetail.projDepBuildingTypeDetail.data?.last_updated_by?.last_name 
            })
        } else if(depCategoryDetail.projDepCategoryDetailLoading === false){
            console.log('dhh',depCategoryDetail.projDepCategoryDetail.data )
            let dt = new Date(depCategoryDetail.projDepCategoryDetail.data.created_at)
            setProjDepDetail({
                name: depCategoryDetail.projDepCategoryDetail.data?.name,               
                description: depCategoryDetail.projDepCategoryDetail.data?.description,               
                created_by: depCategoryDetail.projDepCategoryDetail.data?.created_by?.first_name + " " +  depCategoryDetail.projDepCategoryDetail.data?.created_by?.last_name,               
                created_at: dt.toLocaleDateString(),
                last_updated_by: depCategoryDetail.projDepCategoryDetail.data?.last_updated_by?.first_name + " " + depCategoryDetail.projDepCategoryDetail.data?.last_updated_by?.last_name 
            })
        } 

    },[dispatch, 
        depId, 
        depType, 
        depProjStatusDetail,
        depLandTitleDetail,
        depAmenityDetail,
        depBuildingTypeDetail,
        depCategoryDetail,
    
    ])
    const handleModClose = () => {
        // dispatch({
        //     type:PROJECT_STATUS_DETAIL_RESET
        // })
        // dispatch({
        //     type:LAND_TITLE_DETAIL_RESET
        // })
        // dispatch({
        //     type:AMENITIES_DETAIL_RESET
        // })
        // dispatch({
        //     type:BUILDING_TYPE_DETAIL_RESET
        // })
        // dispatch({
        //     type:CATEGORY_DETAIL_RESET
        // })
        onClose()

    }

    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div onClick={handleModClose} className="p-d-d-m-container">
                <div className='p-d-d-m-input-wrapper-main'>
                <div onClick={(event)=> event.stopPropagation()} className="p-d-d-m-input-wrapper">
                    <div className="p-d-d-m-heading">
                        
                        <div className='info'>
                            <div className='desc'>Name</div>
                            <div className='act-name'>{projDepDetail?.name}</div>
                        </div>
                        <img src={close_icon} alt="close" onClick={handleModClose} />
                    </div>

                    <div className="p-d-d-m-detail-wrapper">

                        <div className='p-d-d-m-body-wrapper'>
                            <div className='desc'>Description</div>
                            <div className='p-d-d-m-content'>
                                {projDepDetail?.description}
                            </div>
                        </div>

                        <div className='p-d-d-m-third-wrapper'>
                            <div className='p-d-d-m-item'>
                                <div className='desc'>Created by</div>
                                <div className='val'>{projDepDetail?.created_by}</div>
                            </div>

                            <div className='p-d-d-m-item'>
                                <div className='desc'>Last updated by</div>
                                <div className='val'>{projDepDetail?.last_updated_by}</div>
                            </div>

                            <div className='p-d-d-m-item'>
                                <div className='desc'>Created at</div>
                                <div className='val'>{projDepDetail?.created_at}</div>
                            </div>

                        </div>

                    </div>
                </div>
                </div>
            </div>        
        </>,
        document.getElementById('modal-portal')
    )
}

export default ProjDepDetailModal
