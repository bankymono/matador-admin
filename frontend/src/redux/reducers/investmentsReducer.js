import { EQUITY_INVESTMENT_STAT_FAIL, EQUITY_INVESTMENT_STAT_REQUEST, EQUITY_INVESTMENT_STAT_SUCCESS } from "../constants/investmentsContants";


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