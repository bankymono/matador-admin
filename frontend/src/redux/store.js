import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {adminListReducer, countryListReducer, superAdminCreateReducer, superAdminListReducer} from './reducers/userReducers'

const reducer = combineReducers({
    superAdminList:superAdminListReducer,
    adminList:adminListReducer,
    superAdminCreate:superAdminCreateReducer,
    countryList:countryListReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;