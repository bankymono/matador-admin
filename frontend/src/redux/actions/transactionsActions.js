import api from '../../api';

import { 
    TRANSACTIONS_DETAIL_FAIL, 
    TRANSACTIONS_DETAIL_REQUEST, 
    TRANSACTIONS_DETAIL_SUCCESS, 
    TRANSACTIONS_LIST_FAIL, 
    TRANSACTIONS_LIST_REQUEST, 
    TRANSACTIONS_LIST_SUCCESS 
} from "../constants/transactionsConstants"


export const getTransactions = (pageIndex=0,user=null, status="all", transaction_type="all") => async (dispatch) => {

    try {
        dispatch({
            type: TRANSACTIONS_LIST_REQUEST
        })

        let txnStatus = "";
        txnStatus = status==="all" ? "": "status=" + status;
        let txnType = ""
        txnType = transaction_type==="all" ?"":"transaction_type="+transaction_type
        
        const { data } = await api.get(`/transaction/txns?${user===null?"":"user="+user}&&limit=10&&offset=${pageIndex * 10}&&${txnStatus}&&${txnType}`)
        // const { data } = await api.get(`/transaction/txns?${user===null?"":"user="+user}&&limit=10&&offset=${pageIndex * 10}&&status=`)
        
        dispatch({
            type: TRANSACTIONS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log('got an err', error.response)
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