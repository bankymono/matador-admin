import axios from 'axios';
import dotenv from 'dotenv'
import api from '../../api';

import { 
    ADMIN_CREATE_COMPLETE,
    ADMIN_CREATE_REQUEST,
    ADMIN_CREATE_SUCCESS,
    ADMIN_LIST_REQUEST,
    ADMIN_LIST_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT,
    INVESTORS_LIST,
    ADMIN_REFRESH_TOKEN_FAIL,
    ADMIN_REFRESH_TOKEN_REQUEST,
    ADMIN_REFRESH_TOKEN_SUCCESS,
    COUNTRY_LIST_REQUEST,
    COUNTRY_LIST_SUCCESS,
    SUPER_ADMIN_CREATE_COMPLETE,
    SUPER_ADMIN_CREATE_FAIL,
    SUPER_ADMIN_CREATE_REQUEST,
    SUPER_ADMIN_CREATE_SUCCESS,
    SUPER_ADMIN_LIST_FAIL, 
    SUPER_ADMIN_LIST_REQUEST, 
    SUPER_ADMIN_LIST_SUCCESS,
    PROJECT_CREATE_COMPLETE,
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    VERIFICATION_ID_DETAIL_REQUEST,
    VERIFICATION_ID_DETAIL_SUCCESS,
    VERIFICATION_ID_DETAIL_FAIL,
    VERIFICATION_ID_LIST_REQUEST,
    VERIFICATION_ID_LIST_SUCCESS,
    VERIFICATION_ID_LIST_FAIL,
    VERIFICATION_ID_VERIFY_REQUEST,
    VERIFICATION_ID_VERIFY_SUCCESS,
    VERIFICATION_ID_VERIFY_COMPLETE,
    VERIFICATION_ID_VERIFY_FAIL,
    VERIFICATION_ID_DETAIL_CLEAR,
    INVESTORS_LIST_REQUEST,
    INVESTORS_LIST_SUCCESS,
    INVESTORS_DETAIL_REQUEST,
    INVESTORS_DETAIL_SUCCESS,
    INVESTORS_DETAIL_FAIL,
    } from "../constants/userConstants";
dotenv.config();

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type:ADMIN_LOGIN_REQUEST
        })



        const {data} = await api.post('/user/admin-login',{email, password})
        dispatch({
            type:ADMIN_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('mtdX', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type:ADMIN_LOGIN_FAIL,
            payload:error.response.data
        })
    }
}

export const getNewToken = () => async (dispatch,getState) => {
    try {
        dispatch({
            type:ADMIN_REFRESH_TOKEN_REQUEST
        })
        const { adminLogin : { adminInfo } } = getState()


        const {data} = await api.post('/user/refresh_token',
            {refresh_token:adminInfo.refresh_token})

        adminInfo.token = data.token
        adminInfo.refresh_token = data.refresh_token        

        dispatch({
            type:ADMIN_REFRESH_TOKEN_SUCCESS,
            payload:adminInfo
        })

        localStorage.setItem('mtdX', JSON.stringify(adminInfo))
        return;        
    } catch (error) {
        dispatch({
            type:ADMIN_REFRESH_TOKEN_FAIL,
            payload:error.response.data
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('mtdX');
    dispatch({
        type:ADMIN_LOGOUT
    })
}

export const getInvestors = (pageIndex=0, filterOpt="all") => async (dispatch) => {
    try{
        dispatch({
            type:INVESTORS_LIST_REQUEST
        })

        const data = await api.get(`/user/investor?limit=10&&offset=${pageIndex * 10}${filterOpt!=="all"? (filterOpt === "verified"?"&&verified=True":"&&verified=False"):""}`);

        dispatch({
            type:INVESTORS_LIST_SUCCESS,
            payload:data
        })

        // dispatch({
        //     type:INVESTORS_LIST_SUCCESS,
        //     payload:data
        // })
    }catch(error){
        console.log(error);
    }
}

export const getInvestorsDetail = (id) => async (dispatch) => {

    try {

        dispatch({
            type: INVESTORS_DETAIL_REQUEST
        })

        const { data } = await api.get(`/user/investor/${id}`)

        dispatch({
            type: INVESTORS_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: INVESTORS_DETAIL_FAIL,
            payload: error.response
        })
    }
}

export const listCountries = () => async (dispatch) => {
        try {
            dispatch({
                type:COUNTRY_LIST_REQUEST
            })
    
            const config = {
                headers:{
                    'Content-Type':'application/json',
                },
            }
            const {data} = await axios.get(
                process.env.REACT_APP_BASE_URL +'/user/country',
                config
            )
            dispatch({
                type:COUNTRY_LIST_SUCCESS,
                payload:data
            })
            
    
        } catch (error) {
            // dispatch({
            //     type:SUPER_ADMIN_LIST_FAIL,
            //     payload:error.response && error.response.data.message
            //     ? error.response.data.message
            //     : error.message,
            // })
            console.log(error);
        }
    }

export const listSuperAdmins = () => async (dispatch) => {
    try {
        dispatch({
            type:SUPER_ADMIN_LIST_REQUEST
        })

        // process.env.REACT_APP_BASE_URL + '/user/super_admin/?limit=10&offset=10'
        const {data} = await api.get('/user/super_admin')

        dispatch({
            type:SUPER_ADMIN_LIST_SUCCESS,
            payload:data
        })

    } catch (error) {
        // dispatch({
        //     type:SUPER_ADMIN_LIST_FAIL,
        //     payload:error.response && error.response.data.message
        //     ? error.response.data.message
        //     : error.message,
        // })
        console.log(error.response);
    }
}

export const listAdmins = () => async (dispatch) => {
    try {
        dispatch({
            type:ADMIN_LIST_REQUEST
        })

        const {data} = await api.get('/user/admin')

        dispatch({
            type:ADMIN_LIST_SUCCESS,
            payload:data
        })

        console.log('adm list', data)

    } catch (error) {
        // dispatch({
        //     type:ADMIN_LIST_FAIL,
        //     payload:error.response && error.response.data.message
        //     ? error.response.data.message
        //     : error.message,
        // })
        console.log('adm list err',error.response);
    }
}

export const createSuperAdmin = (superAdmin) => async (dispatch) => {
    try {
        dispatch({
            type: SUPER_ADMIN_CREATE_REQUEST
        })

        const {data} = await api.post('/user/super_admin', superAdmin)
        dispatch({
            type:SUPER_ADMIN_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:SUPER_ADMIN_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create adm error', error.response)
        // dispatch({
        //     type:SUPER_ADMIN_CREATE_FAIL,
        //     payload:error.response && error.response.data.message
        //     ? error.response.data.message
        //     : error.message,
        // })
    }
}

export const createAdmin = (admin) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_CREATE_REQUEST
        })

        const {data} = await api.post('/user/admin', admin)
        dispatch({
            type:ADMIN_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:ADMIN_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create adm error', error.response)
        // dispatch({
        //     type:SUPER_ADMIN_CREATE_FAIL,
        //     payload:error.response && error.response.data.message
        //     ? error.response.data.message
        //     : error.message,
        // })
    }
}

const temporaryToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NDY4NTQzLCJqdGkiOiJmODNkNzhhM2M4NjE0OTYyOTAzYmU4ODBlYTgxNWQwMSIsInVzZXJfaWQiOjF9.ZjhiKYlEf3q9E00Ckkf8RHsEZC37LDrYdEUEeyJaHdY";
const BASE_API_URL = "https://matador-api.herokuapp.com/v1";

export const createProject = (project) => async (dispatch) => {
    try {
        dispatch({
            type: PROJECT_CREATE_REQUEST
        })

        const config = {
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${temporaryToken}`
            },
        }
        const {data} = await axios.post(
            BASE_API_URL + '/investment/project/', project,
            config
        )
        dispatch({
            type:PROJECT_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:PROJECT_CREATE_COMPLETE
        })

        return 'Success';
    } catch (error) {
        console.log('create project error', error.response);
        return 'Error';
    }
}


export const listVerificationId = (status) => async (dispatch) => {
    try {
        dispatch({
            type: VERIFICATION_ID_LIST_REQUEST
        })
        console.log('status', status)
        const {data} = await api.get(`/user/verify-verification_id?status=${status}`)

        dispatch({
            type:VERIFICATION_ID_LIST_SUCCESS,
            payload:data
        })

        console.log('ver-id-list list', data)

    } catch (error) {
        dispatch({
            type: VERIFICATION_ID_LIST_FAIL,
            payload: error.response
        })
        console.log('VER-id list err',error.response);
    }
}

export const getVerificationIdDetail = (id) => async (dispatch) => {
    try {
        dispatch({
            type: VERIFICATION_ID_DETAIL_REQUEST
        })

        const {data} = await api.get(`/user/verify-verification_id/${id}`)

        dispatch({
            type:VERIFICATION_ID_DETAIL_SUCCESS,
            payload:data
        })

        console.log('ver-id- DETAIL', data)

    } catch (error) {
        dispatch({
            type: VERIFICATION_ID_DETAIL_FAIL,
            payload: error.response
        })
        console.log('VER-id DETAIL err',error.response);
    }
}

export const clearVerificationIdDetail = () => async (dispatch) => {
    dispatch({
        type: VERIFICATION_ID_DETAIL_CLEAR
    })
}

export const verifyVerificationId = (id,verifyData) => async (dispatch) => {
    try {
        dispatch({
            type: VERIFICATION_ID_VERIFY_REQUEST
        })

        const {data} = await api.patch(`/user/verify-verification_id/${id}`, verifyData);

        dispatch({
            type:VERIFICATION_ID_VERIFY_SUCCESS,
            payload:data
        })

        dispatch({
            type:VERIFICATION_ID_VERIFY_COMPLETE
        })

    } catch (error) {
        console.log('ver id error', error.response);
        dispatch({
            type:VERIFICATION_ID_VERIFY_FAIL,
            payload:error.response
        })
    }
}