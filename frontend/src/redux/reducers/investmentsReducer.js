import { 
    ADMIN_SETTINGS_FAIL, 
    ADMIN_SETTINGS_REQUEST, 
    ADMIN_SETTINGS_REWARD_UPDATE_SUCCESS,
    ADMIN_SETTINGS_REWARD_UPDATE_FAIL, 
    ADMIN_SETTINGS_SUCCESS, 
    EQUITY_INVESTMENT_STAT_FAIL, 
    EQUITY_INVESTMENT_STAT_REQUEST, 
    EQUITY_INVESTMENT_STAT_SUCCESS,
    EQUITY_INVESTMENT_DATA_FAIL, 
    EQUITY_INVESTMENT_DATA_REQUEST, 
    EQUITY_INVESTMENT_DATA_SUCCESS,
    INVESTMENTS_DETAIL_REQUEST,
    INVESTMENTS_DETAIL_SUCCESS,
    INVESTMENTS_DETAIL_FAIL,
    INVESTMENTS_DETAIL_RESET,
    INVESTMENTS_LIST_REQUEST,
    INVESTMENTS_LIST_SUCCESS,
    INVESTMENTS_LIST_FAIL,
    INVESTMENTS_TYPE_LIST_REQUEST,
    INVESTMENTS_TYPE_LIST_SUCCESS,
    INVESTMENTS_TYPE_LIST_FAIL,
    EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_SUCCESS,
    EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_REQUEST,
    EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_FAIL,
    EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_REQUEST,
    EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_FAIL,
    EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_SUCCESS,
    FIXED_INCOME_INVESTMENT_STAT_REQUEST,
    FIXED_INCOME_INVESTMENT_STAT_SUCCESS,
    FIXED_INCOME_INVESTMENT_STAT_FAIL,
    FIXED_INCOME_INVESTMENT_INVESTMENT_GRAPH_DATA_REQUEST,
    FIXED_INCOME_INVESTMENT_INVESTMENT_GRAPH_DATA_SUCCESS,
    FIXED_INCOME_INVESTMENT_INVESTMENT_GRAPH_DATA_FAIL,
    FIXED_INCOME_INVESTMENT_DEPOSIT_GRAPH_DATA_REQUEST,
    FIXED_INCOME_INVESTMENT_DEPOSIT_GRAPH_DATA_SUCCESS,
    FIXED_INCOME_INVESTMENT_DEPOSIT_GRAPH_DATA_FAIL,
    SOLE_INVESTMENT_STAT_REQUEST,
    SOLE_INVESTMENT_STAT_SUCCESS,
    SOLE_INVESTMENT_STAT_FAIL,
     
} from "../constants/investmentsContants";


export const equityInvestmentStatReducer = (state={equityInvestmentStat:{}, loading:true}, action) => {
    switch(action.type){
        case EQUITY_INVESTMENT_STAT_REQUEST:
            return { ...state, equityInvestmentStat:{}, loading:true }
        case EQUITY_INVESTMENT_STAT_SUCCESS:
            return { ...state, loading: false, equityInvestmentStat: action.payload}
        case EQUITY_INVESTMENT_STAT_FAIL:
            return { ...state, loading:false, error: action.payload}
        default:
            return state;
    }
}

export const equityInvestmentDataReducer = (state={eqData: {}, loading: true}, action)=>{
    switch(action.type){
        case EQUITY_INVESTMENT_DATA_REQUEST:
            return { ...state,loading:true, eqData: {}};
        case EQUITY_INVESTMENT_DATA_SUCCESS:
            return { ...state, eqData: action.payload, loading:false};
        case EQUITY_INVESTMENT_DATA_FAIL:
            return { ...state, error: action.payload, loading:false};
        default:
            return state;
    }
}

export const adminSettingsReducer = (state={settingsRequest: false, settingsData: null, settingsFail: false}, action)=>{
    switch(action.type){
        case ADMIN_SETTINGS_REQUEST:
            return {settingsRequest: action.payload, settingsData: null, settingsFail: false};
        case ADMIN_SETTINGS_SUCCESS:
            return {settingsRequest: true, settingsData: action.payload, settingsFail: false};
        case ADMIN_SETTINGS_FAIL:
            return {settingsRequest: true, settingsData: null, settingsFail: action.payload};
        default:
            return state;
    }
}

export const adminSettingsRewardUpdateReducer = (state={}, action)=>{
    switch(action.type){
        case ADMIN_SETTINGS_REWARD_UPDATE_SUCCESS:
            return {rewardUpdateSuccess: true, rewardUpdateFail: false};
        case ADMIN_SETTINGS_REWARD_UPDATE_FAIL:
            return {rewardUpdateSuccess: false, rewardUpdateFail: true}
        default:
            return state
    }
}


export const investmentsListReducer = (state = { investments: {}, investmentsLoading: true }, action) => {
    switch (action.type) {
        case INVESTMENTS_LIST_REQUEST:
            return { investmentsLoading: true, investments: {} }
        case INVESTMENTS_LIST_SUCCESS:
            return { investmentsLoading: false, investments: action.payload }
        case INVESTMENTS_LIST_FAIL:
            return { investmentsLoading: false, investmentsError: action.payload }
        default:
            return state;
    }
}


export const investmentsDetailReducer = (state = { investmentsDetail: {}, investmentsDetailLoading: true }, action) => {
    switch (action.type) {
        case INVESTMENTS_DETAIL_REQUEST:
            return { investmentsDetailLoading: true, investmentsDetail: {} }
        case INVESTMENTS_DETAIL_SUCCESS:
            return { investmentsDetailLoading: false, investmentsDetail: action.payload }
        case INVESTMENTS_DETAIL_FAIL:
            return { investmentsDetailLoading: false, investmentsDetailError: action.payload }
        case INVESTMENTS_DETAIL_RESET:
            return { investmentsDetail: {}, investmentsDetailLoading: true }
        default:
            return state;
    }
}


export const investmentsTypeListReducer = (state={investmentsTypes:{}, loading:true}, action) => {
    switch(action.type){
        case INVESTMENTS_TYPE_LIST_REQUEST:
            return { loading:true, investmentsTypes:{} }
        case INVESTMENTS_TYPE_LIST_SUCCESS:
            return { loading: false, investmentsTypes: action.payload}
        case INVESTMENTS_TYPE_LIST_FAIL:
            return { loading:false, error: action.payload}
        default:
            return state;
    }
}




export const equityInvestmentGraphDataReducer = (state={values:{}, loading:true}, action) => {
    switch(action.type){
        case EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_REQUEST:
            return { ...state, values:{}, loading:true }
        case EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_SUCCESS:
            return { ...state, loading: false, values: action.payload}
        case EQUITY_INVESTMENT_INVESTMENT_GRAPH_DATA_FAIL:
            return { ...state, loading:false, error: action.payload}
        default:
            return state;
    }
}

export const equityInvestmentDepositGraphDataReducer = (state={values:{}, loading:true}, action) => {
    switch(action.type){
        case EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_REQUEST:
            return { ...state, values:{}, loading:true }
        case EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_SUCCESS:
            return { ...state, loading: false, values: action.payload}
        case EQUITY_INVESTMENT_DEPOSIT_GRAPH_DATA_FAIL:
            return { ...state, loading:false, error: action.payload}
        default:
            return state;
    }
}


export const fixedIncomeInvestmentStatReducer = (state={fixedIncomeInvestmentStat:{}, loading:true}, action) => {
    switch(action.type){
        case FIXED_INCOME_INVESTMENT_STAT_REQUEST:
            return { ...state, fixedIncomeInvestmentStat:{}, loading:true }
        case FIXED_INCOME_INVESTMENT_STAT_SUCCESS:
            return { ...state, loading: false, fixedIncomeInvestmentStat: action.payload}
        case FIXED_INCOME_INVESTMENT_STAT_FAIL:
            return { ...state, loading:false, error: action.payload}
        default:
            return state;
    }
}


export const fixedIncomeInvestmentGraphDataReducer = (state={values:{}, loading:true}, action) => {
    switch(action.type){
        case FIXED_INCOME_INVESTMENT_INVESTMENT_GRAPH_DATA_REQUEST:
            return { ...state, values:{}, loading:true }
        case FIXED_INCOME_INVESTMENT_INVESTMENT_GRAPH_DATA_SUCCESS:
            return { ...state, loading: false, values: action.payload}
        case FIXED_INCOME_INVESTMENT_INVESTMENT_GRAPH_DATA_FAIL:
            return { ...state, loading:false, error: action.payload}
        default:
            return state;
    }
}

export const fixedIncomeInvestmentDepositGraphDataReducer = (state={values:{}, loading:true}, action) => {
    switch(action.type){
        case FIXED_INCOME_INVESTMENT_DEPOSIT_GRAPH_DATA_REQUEST:
            return { ...state, values:{}, loading:true }
        case FIXED_INCOME_INVESTMENT_DEPOSIT_GRAPH_DATA_SUCCESS:
            return { ...state, loading: false, values: action.payload}
        case FIXED_INCOME_INVESTMENT_DEPOSIT_GRAPH_DATA_FAIL:
            return { ...state, loading:false, error: action.payload}
        default:
            return state;
    }
}


export const soleInvestmentStatReducer = (state={soleInvestmentStat:{}, loading:true}, action) => {
    switch(action.type){
        case SOLE_INVESTMENT_STAT_REQUEST:
            return { ...state, soleInvestmentStat:{}, loading:true }
        case SOLE_INVESTMENT_STAT_SUCCESS:
            return { ...state, loading: false, soleInvestmentStat: action.payload}
        case SOLE_INVESTMENT_STAT_FAIL:
            return { ...state, loading:false, error: action.payload}
        default:
            return state;
    }
}