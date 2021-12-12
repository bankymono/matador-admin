import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
        adminCreateReducer, 
        adminListReducer, 
        adminLoginReducer, 
        countryListReducer, 
        superAdminCreateReducer, 
        superAdminListReducer
    } from './reducers/userReducers'
import { 
        amenityListReducer, 
        buildingTypeListReducer, 
        equityInvestmentListReducer, 
        landTitleListReducer, 
        projectCategoryListReducer, 
        projectStatusListReducer 
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
    
    //project-related-reducers
    landTitleList:landTitleListReducer,
    buildingTypeList:buildingTypeListReducer,
    projectCategoryList:projectCategoryListReducer,
    projectStatusList:projectStatusListReducer,
    amenityList:amenityListReducer,
    equityInvestmentList:equityInvestmentListReducer,

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