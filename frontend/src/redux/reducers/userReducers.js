import { 
    ADMIN_CREATE_COMPLETE,
    ADMIN_CREATE_FAIL,
    ADMIN_CREATE_REQUEST,
    ADMIN_CREATE_SUCCESS,
    ADMIN_LIST_FAIL, 
    ADMIN_LIST_REQUEST, 
    ADMIN_LIST_SUCCESS, 
    ADMIN_LOGIN_FAIL, 
    ADMIN_LOGIN_REQUEST, 
    ADMIN_LOGIN_SUCCESS, 
    ADMIN_LOGOUT, 
    ADMIN_REFRESH_TOKEN_FAIL, 
    ADMIN_REFRESH_TOKEN_REQUEST, 
    ADMIN_REFRESH_TOKEN_SUCCESS, 
    COUNTRY_LIST_FAIL, 
    COUNTRY_LIST_REQUEST, 
    COUNTRY_LIST_SUCCESS, 
    SUPER_ADMIN_CREATE_COMPLETE, 
    SUPER_ADMIN_CREATE_FAIL, 
    SUPER_ADMIN_CREATE_REQUEST, 
    SUPER_ADMIN_CREATE_SUCCESS, 
    SUPER_ADMIN_LIST_FAIL, 
    SUPER_ADMIN_LIST_REQUEST,
    SUPER_ADMIN_LIST_SUCCESS,
    PROJECT_CREATE_COMPLETE,
    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_SUCCESS,
    VERIFICATION_ID_LIST_REQUEST,
    VERIFICATION_ID_DETAIL_SUCCESS,
    VERIFICATION_ID_LIST_FAIL,
    VERIFICATION_ID_LIST_SUCCESS,
    VERIFICATION_ID_VERIFY_REQUEST,
    VERIFICATION_ID_VERIFY_SUCCESS,
    VERIFICATION_ID_VERIFY_COMPLETE,
    VERIFICATION_ID_DETAIL_FAIL,
    VERIFICATION_ID_DETAIL_REQUEST,

    VERIFICATION_ID_DETAIL_CLEAR,
    INVESTORS_LIST
} from "../constants/userConstants";

export const adminLoginReducer = (state={}, action) => {
    switch(action.type){
        case ADMIN_LOGIN_REQUEST:
            return { loading:true }

        case ADMIN_LOGIN_SUCCESS:
            return { loading: false, adminInfo: action.payload}

        case ADMIN_LOGIN_FAIL:
            return { loading:false, error: action.payload}

        case ADMIN_REFRESH_TOKEN_REQUEST:
            return {
                ...state,
                loading:true,
            }

        case ADMIN_REFRESH_TOKEN_SUCCESS:
            return {
                adminInfo:action.payload,
                loading:false
            }

        case ADMIN_REFRESH_TOKEN_FAIL:
            return { ...state, loading:false, error: action.payload}

        case ADMIN_LOGOUT:
            return {}
        default:
                return state;

    }
}


export const countryListReducer = (state={countries:{}, countryLoading:true}, action) => {
    switch(action.type){
        case COUNTRY_LIST_REQUEST:
            return { countryLoading:true, countries:{} }
        case COUNTRY_LIST_SUCCESS:
            return { countryLoading: false, countries: action.payload}
        case COUNTRY_LIST_FAIL:
            return { countryLoading:false, error: true}
        default:
            return state;
    }
}

export const superAdminListReducer = (state={superAdmins:{}, loading:true}, action) => {
    switch(action.type){
        case SUPER_ADMIN_LIST_REQUEST:
            return { loading:true, superAdmins:{} }
        case SUPER_ADMIN_LIST_SUCCESS:
            return { loading: false, superAdmins: action.payload}
        case SUPER_ADMIN_LIST_FAIL:
            return { loading:false, error: true}
        default:
            return state;
    }
}

export const adminListReducer = (state={admins:{}, loading:true}, action) => {
    switch(action.type){
        case ADMIN_LIST_REQUEST:
            return { loading:true, admins:{} }
        case ADMIN_LIST_SUCCESS:
            return { loading: false, admins: action.payload}
        case ADMIN_LIST_FAIL:
            return { loading:false, error: true}
        default:
            return state;
    }
}

export const superAdminCreateReducer = (state={success:false}, action) => {
    switch(action.type){
        case SUPER_ADMIN_CREATE_REQUEST:
            return {
                loading:true
            }
        case SUPER_ADMIN_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                superAdmin:action.payload
            }
        case SUPER_ADMIN_CREATE_COMPLETE:
            return {
                loading:false,
                success:false,
            }
        case SUPER_ADMIN_CREATE_FAIL:
            return {
                loading:false,
                error:action.payload,
            }

        default:
            return state
    }
}

export const adminCreateReducer = (state={admSuccess:false}, action) => {
    switch(action.type){
        case ADMIN_CREATE_REQUEST:
            return {
                admLoading:true
            }
        case ADMIN_CREATE_SUCCESS:
            return {
                admLoading:false,
                admSuccess:true,
                admin:action.payload
            }
        case ADMIN_CREATE_COMPLETE:
            return {
                admLoading:false,
                admSuccess:false,
            }
        case ADMIN_CREATE_FAIL:
            return {
                admLoading:false,
                admError:action.payload,
            }

        default:
            return state
    }
}


export const verificationIdListReducer = (state={verificationIds:{}, verifyIdLoading:true}, action) => {
    switch(action.type){
        case VERIFICATION_ID_LIST_REQUEST:
            return { verifyIdLoading:true, verificationIds:{} }
        case VERIFICATION_ID_LIST_SUCCESS:
            return { verifyIdLoading: false, verificationIds: action.payload}
        case VERIFICATION_ID_LIST_FAIL:
            return { verifyIdLoading:false, verificationIdError: action.payload}
        default:
            return state;
    }
}

export const verificationIdDetailReducer = (state={singleVerId:{}, singleVerIdLoading:true}, action) => {
    switch(action.type){
        case VERIFICATION_ID_DETAIL_REQUEST:
            return { singleVerIdLoading:true, singleVerId:{} }
        case VERIFICATION_ID_DETAIL_SUCCESS:
            return { singleVerIdLoading: false, singleVerId: action.payload}
        case VERIFICATION_ID_DETAIL_FAIL:
            return { singleVerIdLoading:false, singleVerIdError: action.payload}
        case VERIFICATION_ID_DETAIL_CLEAR:
            return { singleVerIdLoading:false, singleVerId:{}}
        default:
            return state;
    }
}

export const verifyVerificationIdReducer = (state={verifyVerIdLoading:true,verifyVerIdSuccess:false}, action) => {
    switch(action.type){
        case VERIFICATION_ID_VERIFY_REQUEST:
            return {
                verifyVerIdLoading:true
            }
        case VERIFICATION_ID_VERIFY_SUCCESS:
            return {
                verifyVerIdLoading:false,
                verifyVerIdSuccess:true,
                verifyVerId:action.payload
            }
        case VERIFICATION_ID_VERIFY_COMPLETE:
            return {
                verifyVerIdLoading:false,
                verifyVerIdSuccess:false,
            }
        case VERIFICATION_ID_DETAIL_FAIL:
            return {
                verifyVerIdLoading:false,
                verifyVerIdError:action.payload,
            }

        default:
            return state
    }
}

export const investorsListReducer = (state={}, action) => {

    return action.type === 'INVESTORS_LIST'?
    {investorsList: action.payload} : 'error fetching list';
}