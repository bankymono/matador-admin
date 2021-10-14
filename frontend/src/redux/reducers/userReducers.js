import { 
    ADMIN_LIST_FAIL, 
    ADMIN_LIST_REQUEST, 
    ADMIN_LIST_SUCCESS, 
    COUNTRY_LIST_FAIL, 
    COUNTRY_LIST_REQUEST, 
    COUNTRY_LIST_SUCCESS, 
    SUPER_ADMIN_CREATE_COMPLETE, 
    SUPER_ADMIN_CREATE_FAIL, 
    SUPER_ADMIN_CREATE_REQUEST, 
    SUPER_ADMIN_CREATE_SUCCESS, 
    SUPER_ADMIN_LIST_FAIL, 
    SUPER_ADMIN_LIST_REQUEST,
    SUPER_ADMIN_LIST_SUCCESS
} from "../constants/userConstants";

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