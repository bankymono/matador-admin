import axios from 'axios';
import dotenv from 'dotenv'

import { 
    ADMIN_LIST_REQUEST,
    ADMIN_LIST_SUCCESS,
    COUNTRY_LIST_REQUEST,
    COUNTRY_LIST_SUCCESS,
    SUPER_ADMIN_CREATE_COMPLETE,
    SUPER_ADMIN_CREATE_FAIL,
    SUPER_ADMIN_CREATE_REQUEST,
        SUPER_ADMIN_CREATE_SUCCESS,
        SUPER_ADMIN_LIST_FAIL, 
        SUPER_ADMIN_LIST_REQUEST, 
        SUPER_ADMIN_LIST_SUCCESS,
        
    } from "../constants/userConstants";
    dotenv.config();

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

        const config = {
            headers:{
                'Content-Type':'application/json',
            },
        }
        const {data} = await axios.get(
            process.env.REACT_APP_BASE_URL + '/user/super_admin/?limit=10&offset=10',
            config
        )

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
        console.log(error);
    }
}

export const listAdmins = () => async (dispatch) => {
    try {
        dispatch({
            type:ADMIN_LIST_REQUEST
        })

        const config = {
            headers:{
                'Content-Type':'application/json',
            },
        }
        const {data} = await axios.get(
            process.env.REACT_APP_BASE_URL + '/user/admin/',
            config
        )

        dispatch({
            type:ADMIN_LIST_SUCCESS,
            payload:data
        })

    } catch (error) {
        // dispatch({
        //     type:ADMIN_LIST_FAIL,
        //     payload:error.response && error.response.data.message
        //     ? error.response.data.message
        //     : error.message,
        // })
        console.log(error);
    }
}

export const createSuperAdmin = (superAdmin) => async (dispatch) => {
    try {
        dispatch({
            type: SUPER_ADMIN_CREATE_REQUEST
        })


        const config = {
            headers:{
                'Content-Type':'application/json'
            },
        }
        const {data} = await axios.post(
            process.env.REACT_APP_BASE_URL + '/user/super_admin/', superAdmin,
            config
        )
        dispatch({
            type:SUPER_ADMIN_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:SUPER_ADMIN_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create adm error', error)
        // dispatch({
        //     type:SUPER_ADMIN_CREATE_FAIL,
        //     payload:error.response && error.response.data.message
        //     ? error.response.data.message
        //     : error.message,
        // })
    }
}