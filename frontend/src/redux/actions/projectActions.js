// import axios from 'axios';
// import dotenv from 'dotenv'
import api from '../../api';

import {
    AMENITY_LIST_FAIL,
    AMENITY_LIST_REQUEST,
    AMENITY_LIST_SUCCESS,
    
    BUILDING_TYPE_LIST_FAIL,
    BUILDING_TYPE_LIST_REQUEST,
    BUILDING_TYPE_LIST_SUCCESS,
    
    EQUITY_INVESTMENT_LIST_FAIL,
    EQUITY_INVESTMENT_LIST_REQUEST,
    EQUITY_INVESTMENT_LIST_SUCCESS,
    
    LAND_TITLE_LIST_FAIL,
    LAND_TITLE_LIST_REQUEST,
    LAND_TITLE_LIST_SUCCESS,
    
    PROJECT_CATEGORY_LIST_FAIL,
    PROJECT_CATEGORY_LIST_REQUEST,
    PROJECT_CATEGORY_LIST_SUCCESS,
    
    PROJECT_STATUS_LIST_FAIL,
    PROJECT_STATUS_LIST_REQUEST,
    PROJECT_STATUS_LIST_SUCCESS,
    
    PROJECT_CREATE_COMPLETE,
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,

    PROJECTS_STAT_REQUEST,
    PROJECTS_STAT_SUCCESS,
    PROJECTS_STAT_FAIL,

    PROJECTS_DATA_FAIL,
    PROJECTS_DATA_REQUEST,
    PROJECTS_DATA_SUCCESS,
    
    PROJECT_DATA_FAIL,
    PROJECT_DATA_REQUEST,
    PROJECT_DATA_SUCCESS,
} from "../constants/projectConstants"

export const listLandTitles = () => async (dispatch) => {

    try {
        dispatch({
            type: LAND_TITLE_LIST_REQUEST
        })
        console.log('got here 1')

        const { data } = await api.get('/investment/land-title')

        dispatch({
            type: LAND_TITLE_LIST_SUCCESS,
            payload: data
        })
        // console.log('land title data', data)
    } catch (error) {
        dispatch({
            type: LAND_TITLE_LIST_FAIL,
            payload: error.response
        })
        console.log('land_title_list_error', error, error.response);
    }
}

export const listBuildingTypes = () => async (dispatch) => {

    try {
        dispatch({
            type: BUILDING_TYPE_LIST_REQUEST
        })

        const { data } = await api.get('/investment/building-type')

        dispatch({
            type: BUILDING_TYPE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: BUILDING_TYPE_LIST_FAIL,
            payload: error.response
        })
    }
}

export const listProjectCategories = () => async (dispatch) => {

    try {
        dispatch({
            type: PROJECT_CATEGORY_LIST_REQUEST
        })


        const { data } = await api.get('/investment/categorys')

        dispatch({
            type: PROJECT_CATEGORY_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PROJECT_CATEGORY_LIST_FAIL,
            payload: error.response
        })

    }
}

export const listProjectStatuses = () => async (dispatch) => {

    try {
        dispatch({
            type: PROJECT_STATUS_LIST_REQUEST
        })


        const { data } = await api.get('/investment/project-status')

        dispatch({
            type: PROJECT_STATUS_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROJECT_STATUS_LIST_FAIL,
            payload: error.response
        })
    }
}

export const listAmenities = () => async (dispatch) => {

    try {
        dispatch({
            type: AMENITY_LIST_REQUEST
        })


        const { data } = await api.get('/investment/amenity')

        dispatch({
            type: AMENITY_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: AMENITY_LIST_FAIL,
            payload: error.response
        })
    }
}

export const createProject = (project) => async (dispatch) => {
    try {
        dispatch({
            type: PROJECT_CREATE_REQUEST
        })

        const { data } = await api.post('/investment/project', project)
        dispatch({
            type: PROJECT_CREATE_SUCCESS,
            payload: data
        })

        dispatch({
            type: PROJECT_CREATE_COMPLETE
        })
    } catch (error) {
        dispatch({
            type: PROJECT_CREATE_FAIL,
            payload: error.response
        })
    }
}
export const listEquityInvestment = () => async (dispatch) => {

    try {
        dispatch({
            type: EQUITY_INVESTMENT_LIST_REQUEST
        })


        const { data } = await api.get('/investment/user-investment')

        dispatch({
            type: EQUITY_INVESTMENT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EQUITY_INVESTMENT_LIST_FAIL,
            payload: error.response
        })
    }
}
export const getProjectsStat =()=> async(dispatch)=>{
    try{
        dispatch({
            type: PROJECTS_STAT_REQUEST,
        })
        const {data} = await api.get(`/admin/get-project-data`);
        dispatch({
            type: PROJECTS_STAT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: PROJECTS_STAT_FAIL,
            payload: error.response
        })
    }
}
export const getProjectsData =(params)=> async(dispatch)=>{
    try{
        dispatch({
            type: PROJECTS_DATA_REQUEST,
        })
        const {data} = await api.get(`/investment/project?search=${params.search}&page=${params.page}&publish=${params.published}`);
        dispatch({
            type: PROJECTS_DATA_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: PROJECTS_DATA_FAIL,
            payload: error.response
        })
    }
}
export const getSingleProject =(id)=> async(dispatch)=>{
    try{
        dispatch({
            type: PROJECT_DATA_REQUEST,
        });
        const {data} = await api.get(`/investment/project/${id}`);
        dispatch({
            type: PROJECT_DATA_SUCCESS,
            payload: data
        });
        console.log('single project', data);

    }catch(error){
        dispatch({
            type: PROJECT_DATA_FAIL,
            payload: error.response
        })
    }
}