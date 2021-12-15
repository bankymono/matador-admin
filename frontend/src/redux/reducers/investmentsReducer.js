import { 
    ADMIN_SETTINGS_FAIL, 
    ADMIN_SETTINGS_REQUEST, 
    ADMIN_SETTINGS_REWARD_UPDATE_SUCCESS,
    ADMIN_SETTINGS_REWARD_UPDATE_FAIL, 
    ADMIN_SETTINGS_SUCCESS, 
    EQUITY_INVESTMENT_STAT_FAIL, 
    EQUITY_INVESTMENT_STAT_REQUEST, 
    EQUITY_INVESTMENT_STAT_SUCCESS } from "../constants/investmentsContants";


export const equityInvestmentStatReducer = (state={equityInvestmentStat:{}, eqInvStatLoading:true}, action) => {
    switch(action.type){
        case EQUITY_INVESTMENT_STAT_REQUEST:
            return { equityInvestmentStat:{}, eqInvStatLoading:true }
        case EQUITY_INVESTMENT_STAT_SUCCESS:
            return { eqInvStatLoading: false, equityInvestmentStat: action.payload}
        case EQUITY_INVESTMENT_STAT_FAIL:
            return { eqInvStatLoading:false, eqInvStatError: action.payload}
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