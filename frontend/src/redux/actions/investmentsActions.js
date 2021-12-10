import api from "../../api"
import { 
        EQUITY_INVESTMENT_STAT_FAIL, 
        EQUITY_INVESTMENT_STAT_REQUEST, 
        EQUITY_INVESTMENT_STAT_SUCCESS,
        ADMIN_SETTINGS_REQUEST,
        ADMIN_SETTINGS_FAIL,
        ADMIN_SETTINGS_SUCCESS,
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

        console.log('stat data', data)

    } catch (error) {
        dispatch({
            type: EQUITY_INVESTMENT_STAT_FAIL,
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

        console.log('settings data', data)

    } catch (error) {
        dispatch({
            type:ADMIN_SETTINGS_FAIL,
            payload: error
        })
        console.log('settings data err', error.response);
    }
}