import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
        adminCreateReducer, 
        adminListReducer, 
        adminLoginReducer, 
        countryListReducer, 
        superAdminCreateReducer, 
        superAdminListReducer,
        investorsList
    } from './reducers/userReducers'


const reducer = combineReducers({
    adminLogin:adminLoginReducer,
    superAdminList:superAdminListReducer,
    adminList:adminListReducer,
    superAdminCreate:superAdminCreateReducer,
    adminCreate:adminCreateReducer,
    countryList:countryListReducer,
    investorsList: investorsList
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null;

const initialState = {
    adminLogin:{ adminInfo:userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;