import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { getEquityInvestmentStat } from './actions/investmentsActions';

import {
        adminCreateReducer, 
        adminListReducer, 
        adminLoginReducer, 
        countryListReducer, 
        superAdminCreateReducer, 
        superAdminListReducer,
        verificationIdDetailReducer, 
        verificationIdListReducer, 
        verifyVerificationIdReducer,
        investorsListReducer
} from './reducers/userReducers'

import { 
        amenityListReducer, 
        buildingTypeListReducer, 
        equityInvestmentListReducer, 
        landTitleListReducer, 
        projectCategoryListReducer, 
        projectStatusListReducer, 
        projectCreateReducer 
    } from './reducers/projectReducers';
import { 
        equityInvestmentStatReducer,
        adminSettingsReducer,
        adminSettingsRewardUpdateReducer,
    } from './reducers/investmentsReducer';



const reducer = combineReducers({
    adminLogin:adminLoginReducer,
    superAdminList:superAdminListReducer,
    adminList:adminListReducer,
    superAdminCreate:superAdminCreateReducer,
    adminCreate:adminCreateReducer,
    countryList:countryListReducer,
    investorsList: investorsListReducer,
    
    //project-related-reducers
    landTitleList:landTitleListReducer,
    buildingTypeList:buildingTypeListReducer,
    projectCategoryList:projectCategoryListReducer,
    projectStatusList:projectStatusListReducer,
    amenityList:amenityListReducer,
    projectCreate:projectCreateReducer,
    equityInvestmentList:equityInvestmentListReducer,

    verificationIdList: verificationIdListReducer,
    verificationIdDetail: verificationIdDetailReducer,
    verifyVerificationId: verifyVerificationIdReducer,

    //investment-related-reducers
    equityInvestmentStatData: equityInvestmentStatReducer,
    adminSettings: adminSettingsReducer,
    adminRewardSettingsUpdate: adminSettingsRewardUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem('mtdX') ? JSON.parse(localStorage.getItem('mtdX')):null;

const initialState = {
    adminLogin:{ adminInfo:userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;