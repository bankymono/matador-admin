import axios from 'axios';
import dotenv from 'dotenv'
import api from '../../api';

import { AMENITY_LIST_FAIL, AMENITY_LIST_REQUEST, AMENITY_LIST_SUCCESS, BUILDING_TYPE_LIST_FAIL, BUILDING_TYPE_LIST_REQUEST, BUILDING_TYPE_LIST_SUCCESS, LAND_TITLE_LIST_FAIL, LAND_TITLE_LIST_REQUEST, LAND_TITLE_LIST_SUCCESS, PROJECT_CATEGORY_LIST_FAIL, PROJECT_CATEGORY_LIST_REQUEST, PROJECT_CATEGORY_LIST_SUCCESS, PROJECT_STATUS_LIST_FAIL, PROJECT_STATUS_LIST_REQUEST, PROJECT_STATUS_LIST_SUCCESS } from "../constants/projectConstants"

export const listLandTitles = () => async (dispatch) => {
    
    try {
        dispatch({
            type:LAND_TITLE_LIST_REQUEST
        })
        console.log('got here 1')

        const {data} = await api.get('/investment/land-title')

        dispatch({
            type:LAND_TITLE_LIST_SUCCESS,
            payload:data
        })
        // console.log('land title data', data)
    } catch (error) {
        dispatch({
            type:LAND_TITLE_LIST_FAIL,
            payload:error.response
        })
        console.log('land_title_list_error',error, error.response);
    }
}


export const listBuildingTypes = () => async (dispatch) => {
    
    try {
        dispatch({
            type:BUILDING_TYPE_LIST_REQUEST
        })

        const {data} = await api.get('/investment/building-type')

        dispatch({
            type:BUILDING_TYPE_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:BUILDING_TYPE_LIST_FAIL,
            payload:error.response
        })
    }
}

export const listProjectCategories = () => async (dispatch) => {
    
    try {
        dispatch({
            type:PROJECT_CATEGORY_LIST_REQUEST
        })


        const {data} = await api.get('/investment/categorys')

        dispatch({
            type:PROJECT_CATEGORY_LIST_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:PROJECT_CATEGORY_LIST_FAIL,
            payload:error.response
        })

    }
}

export const listProjectStatuses = () => async (dispatch) => {
    
    try {
        dispatch({
            type:PROJECT_STATUS_LIST_REQUEST
        })


        const {data} = await api.get('/investment/project-status')

        dispatch({
            type:PROJECT_STATUS_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:PROJECT_STATUS_LIST_FAIL,
            payload:error.response
        })
    }
}

export const listAmenities = () => async (dispatch) => {
    
    try {
        dispatch({
            type:AMENITY_LIST_REQUEST
        })


        const {data} = await api.get('/investment/amenity')

        dispatch({
            type:AMENITY_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:AMENITY_LIST_FAIL,
            payload:error.response
        })
    }
}