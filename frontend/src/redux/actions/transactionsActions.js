import api from '../../api';

import { 
    TRANSACTIONS_DETAIL_FAIL, 
    TRANSACTIONS_DETAIL_REQUEST, 
    TRANSACTIONS_DETAIL_SUCCESS, 
    TRANSACTIONS_LIST_FAIL, 
    TRANSACTIONS_LIST_REQUEST, 
    TRANSACTIONS_LIST_SUCCESS 
} from "../constants/transactionsConstants"


export const getTransactions = () => async (dispatch) => {

    try {
        dispatch({
            type: TRANSACTIONS_LIST_REQUEST
        })

        const { data } = await api.get('/transaction/txns')

        dispatch({
            type: TRANSACTIONS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRANSACTIONS_LIST_FAIL,
            payload: error.response
        })
    }
}

export const getTransactionsDetail = (id) => async (dispatch) => {

    try {

        dispatch({
            type: TRANSACTIONS_DETAIL_REQUEST
        })

        const { data } = await api.get(`/transaction/txns/${id}`)

        dispatch({
            type: TRANSACTIONS_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRANSACTIONS_DETAIL_FAIL,
            payload: error.response
        })
    }
}