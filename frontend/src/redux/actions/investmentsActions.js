import api from "../../api"
import { 
        EQUITY_INVESTMENT_STAT_FAIL, 
        EQUITY_INVESTMENT_STAT_REQUEST, 
        EQUITY_INVESTMENT_STAT_SUCCESS,

        EQUITY_INVESTMENT_DATA_FAIL, 
        EQUITY_INVESTMENT_DATA_REQUEST, 
        EQUITY_INVESTMENT_DATA_SUCCESS,

        ADMIN_SETTINGS_REQUEST,
        ADMIN_SETTINGS_FAIL,
        ADMIN_SETTINGS_SUCCESS,

        ADMIN_SETTINGS_REWARD_UPDATE_SUCCESS,
        ADMIN_SETTINGS_REWARD_UPDATE_FAIL
    } from "../constants/investmentsContants"

export const getEquityInvestmentStat = () => async (dispatch) => {
    
    try {
        dispatch({
            type: EQUITY_INVESTMENT_STAT_REQUEST
        })


        const {data} = await api.get('/admin/get-investment-stat?investment_type=equity-investment')

        dispatch({
            type: EQUITY_INVESTMENT_STAT_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: EQUITY_INVESTMENT_STAT_FAIL,
            payload: error.response
        })
    }
}

export const getEquityInvestmentData = (queryParams) => async (dispatch) => {
    
    try {
        dispatch({
            type: EQUITY_INVESTMENT_DATA_REQUEST
        })

        const {data} = await api.get(`/investment/user-investment?investment_type_id=${queryParams.investment_type_id}&page=${queryParams.page}&is_sold=${queryParams.is_sold}&search=${queryParams.search}`)

        dispatch({
            type: EQUITY_INVESTMENT_DATA_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EQUITY_INVESTMENT_DATA_FAIL,
            payload: error.response
        })
    }
}
export const getSettings =()=> async(dispatch)=>{
    try {
        dispatch({
            type:ADMIN_SETTINGS_REQUEST,
            payload: true,
        })

        const {data} = await api.get('/investment/setting');

        dispatch({
            type:ADMIN_SETTINGS_SUCCESS,
            payload: data.data
        })


    } catch (error) {
        dispatch({
            type:ADMIN_SETTINGS_FAIL,
            payload: error
        })
    }
}
export const updateSettingsReward = (updateData)=> async(dispatch)=>{
    try {
        const {data} = await api.patch('/investment/setting', updateData);

        dispatch({
            type:ADMIN_SETTINGS_REWARD_UPDATE_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        dispatch({
            type:ADMIN_SETTINGS_REWARD_UPDATE_FAIL,
            payload: error
        })
        console.log('settings data err', error);
    }
}