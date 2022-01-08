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
        investorsListReducer,
        investorsDetailReducer
} from './reducers/userReducers'

import { 
        amenityListReducer, 
        buildingTypeListReducer, 
        equityInvestmentListReducer, 
        landTitleListReducer, 
        projectCategoryListReducer, 
        projectStatusListReducer, 
        projectCreateReducer,
        projectsStatReducer,
        projectsDataReducer,
        singleProjectReducer,
    } from './reducers/projectReducers';
import { 
        equityInvestmentStatReducer,
        equityInvestmentDataReducer,
        adminSettingsReducer,
        adminSettingsRewardUpdateReducer,
        investmentsListReducer,
        investmentsDetailReducer,
        investmentsTypeListReducer,
    } from './reducers/investmentsReducer';
import { amenitiesCreateReducer, buildingTypeCreateReducer, categoryCreateReducer, landTitleCreateReducer, projDepAmenityDetailReducer, projDepAmenityListReducer, projDepBuildingTypeDetailReducer, projDepBuildingTypeListReducer, projDepCategoryDetailReducer, projDepCategoryListReducer, projDepLandTitleDetailReducer, projDepLandTitleListReducer, projDepStatusDetailReducer, projDepStatusListReducer, projStatusCreateReducer } from './reducers/projDepReducers';
import { transactionsDetailReducer, transactionsListReducer } from './reducers/transactionsReducer';

const reducer = combineReducers({
    adminLogin:adminLoginReducer,
    superAdminList:superAdminListReducer,
    adminList:adminListReducer,
    superAdminCreate:superAdminCreateReducer,
    adminCreate:adminCreateReducer,
    countryList:countryListReducer,
    investorsList: investorsListReducer,
    investorsDetailItem:investorsDetailReducer,
    
    //project-related-reducers
    landTitleList:landTitleListReducer,
    buildingTypeList:buildingTypeListReducer,
    projectCategoryList:projectCategoryListReducer,
    projectStatusList:projectStatusListReducer,
    amenityList:amenityListReducer,
    projectCreate:projectCreateReducer,
    projectsStat: projectsStatReducer,
    projectsData: projectsDataReducer,
    singleProjectData: singleProjectReducer,
    equityInvestmentList:equityInvestmentListReducer,

    verificationIdList: verificationIdListReducer,
    verificationIdDetail: verificationIdDetailReducer,
    verifyVerificationIdData: verifyVerificationIdReducer,

    //investment-related-reducers
    equityInvestmentStatData: equityInvestmentStatReducer,
    equityInvestmentData: equityInvestmentDataReducer,
    adminSettings: adminSettingsReducer,
    adminRewardSettingsUpdate: adminSettingsRewardUpdateReducer,

    // project-dependency-related reducers
    depProjStatusList:projDepStatusListReducer,
    depLandTitleList:projDepLandTitleListReducer,
    depAmenityList:projDepAmenityListReducer,
    depBuildingTypeList:projDepBuildingTypeListReducer,
    depCategoryList:projDepCategoryListReducer,

    depProjStatusDetail:projDepStatusDetailReducer,
    depLandTitleDetail:projDepLandTitleDetailReducer,
    depAmenityDetail:projDepAmenityDetailReducer,
    depBuildingTypeDetail:projDepBuildingTypeDetailReducer,
    depCategoryDetail:projDepCategoryDetailReducer,

    depProjStatusCreate:projStatusCreateReducer,
    depLandTitleCreate:landTitleCreateReducer,
    depAmenitiesCreate:amenitiesCreateReducer,
    depBuildingTypeCreate:buildingTypeCreateReducer,
    depCategoryCreate:categoryCreateReducer,

    // transactions-related reucers
    transactionsList:transactionsListReducer,
    transactionsDetailItem:transactionsDetailReducer,

    investmentsList:investmentsListReducer,
    investmentsDetailItem:investmentsDetailReducer,
    investmentsTypeList:investmentsTypeListReducer,
});

const userInfoFromStorage = localStorage.getItem('mtdX') ? JSON.parse(localStorage.getItem('mtdX')):null;

const initialState = {
    adminLogin:{ adminInfo:userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;