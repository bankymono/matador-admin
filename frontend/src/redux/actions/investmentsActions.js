import api from "../../api"
import { EQUITY_INVESTMENT_STAT_FAIL, EQUITY_INVESTMENT_STAT_REQUEST, EQUITY_INVESTMENT_STAT_SUCCESS } from "../constants/investmentsContants"

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