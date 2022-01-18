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
        ADMIN_SETTINGS_REWARD_UPDATE_FAIL,
        INVESTMENTS_LIST_SUCCESS,
        INVESTMENTS_LIST_FAIL,
        INVESTMENTS_LIST_REQUEST,
        INVESTMENTS_DETAIL_REQUEST,
        INVESTMENTS_DETAIL_SUCCESS,
        INVESTMENTS_DETAIL_FAIL,
        INVESTMENTS_TYPE_LIST_REQUEST,
        INVESTMENTS_TYPE_LIST_SUCCESS,
        INVESTMENT_GRAPH_STAT_FAIL,
        INVESTMENT_GRAPH_STAT_REQUEST,
        INVESTMENT_GRAPH_STAT_SUCCESS,
        EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_FAIL,
        EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_REQUEST,
        EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_SUCCESS,
        EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_FAIL,
        EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_SUCCESS,
        EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_REQUEST
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
        let pageNum = Number(queryParams.page) + 1;
        let inv_comp = queryParams.investment_completed === 'all' ? "": "investment_completed="+queryParams.investment_completed;
        // console.log('did i get here?')
        const {data} = await api.get(`/investment/user-investment?investment_type_id=${queryParams.investment_type_id}&&page=${pageNum}&&is_sold=${queryParams.is_sold}&&${inv_comp}`)
        
        dispatch({
            type: EQUITY_INVESTMENT_DATA_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log('got here, err', error)
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


export const getInvestments = (pageIndex=0,user=null, status="all", investment_type="0") => async (dispatch) => {

    try {
        dispatch({
            type: INVESTMENTS_LIST_REQUEST
        })

        let invStatus = "";
        invStatus = status==="all" ? "": "status=" + status;
        let invType = ""
        invType = investment_type==="0" ?"":"investment_type_id="+ investment_type

        // const { data } = await api.get(`/investment/user-investment?${user===null?"":"user_id="+user}&&limit=10&&offset=${pageIndex * 10}&&${txnStatus}&&${txnType}`)
        const { data } = await api.get(`/investment/user-investment?${user===null?"":"user_id="+user}&&limit=10&&page=${pageIndex + 1}&&${invStatus}&&${invType}`)
        // const { data } = await api.get(`/transaction/txns?${user===null?"":"user="+user}&&limit=10&&offset=${pageIndex * 10}&&status=`)
       

        dispatch({
            type: INVESTMENTS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: INVESTMENTS_LIST_FAIL,
            payload: error.response
        })
    }
}

export const getInvestmentsDetail = (id) => async (dispatch) => {

    try {

        dispatch({
            type: INVESTMENTS_DETAIL_REQUEST
        })

        const { data } = await api.get(`/investment/user-investment/${id}`)

        dispatch({
            type: INVESTMENTS_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: INVESTMENTS_DETAIL_FAIL,
            payload: error.response
        })
    }
}


export const listInvestmentsType = () => async (dispatch) => {
    try {
        dispatch({
            type:INVESTMENTS_TYPE_LIST_REQUEST
        })

        const { data } = await api.get(`/investment/investment-type`)
        dispatch({
            type:INVESTMENTS_TYPE_LIST_SUCCESS,
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


export const getEquityInvestmentGraphData = () => async (dispatch) => {
    
    try {
        dispatch({
            type: EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_REQUEST
        })


        const {data} = await api.get('/admin/get-investment-graph-stat?type=investment&&investment_type=equity-investment&&limit=100')

        dispatch({
            type: EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_FAIL,
            payload: error.response
        })
    }
}

export const getEquityInvestmentDepositGraphData = () => async (dispatch) => {
    
    try {
        dispatch({
            type: EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_REQUEST
        })


        const {data} = await api.get('/admin/get-investment-graph-stat?type=deposit&&investment_type=equity-investment&&limit=100')

        dispatch({
            type: EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_FAIL,
            payload: error.response
        })
    }
}