import { AMENITY_LIST_FAIL, AMENITY_LIST_REQUEST, AMENITY_LIST_SUCCESS, BUILDING_TYPE_LIST_FAIL, BUILDING_TYPE_LIST_REQUEST, BUILDING_TYPE_LIST_SUCCESS, EQUITY_INVESTMENT_LIST_FAIL, EQUITY_INVESTMENT_LIST_REQUEST, EQUITY_INVESTMENT_LIST_SUCCESS, LAND_TITLE_LIST_FAIL, LAND_TITLE_LIST_REQUEST, LAND_TITLE_LIST_SUCCESS, PROJECT_CATEGORY_LIST_FAIL, PROJECT_CATEGORY_LIST_REQUEST, PROJECT_CATEGORY_LIST_SUCCESS, PROJECT_STATUS_LIST_FAIL, PROJECT_STATUS_LIST_REQUEST, PROJECT_STATUS_LIST_SUCCESS } from "../constants/projectConstants";

export const landTitleListReducer = (state={landTitles:{}, landTitleLoading:true}, action) => {
    switch(action.type){
        case LAND_TITLE_LIST_REQUEST:
            return { landTitleLoading:true, landTitles:{} }
        case LAND_TITLE_LIST_SUCCESS:
            return { landTitleLoading: false, landTitles: action.payload}
        case LAND_TITLE_LIST_FAIL:
            return { landTitleLoading:false, landTitleError: action.payload}
        default:
            return state;
    }
}

export const buildingTypeListReducer = (state={buildingTypes:{}, buildingTypeLoading:true}, action) => {
    switch(action.type){
        case BUILDING_TYPE_LIST_REQUEST:
            return { buildingTypeLoading:true, buildingTypes:{} }
        case BUILDING_TYPE_LIST_SUCCESS:
            return { buildingTypeLoading: false, buildingTypes: action.payload}
        case BUILDING_TYPE_LIST_FAIL:
            return { buildingTypeLoading: false, buildingTypeError: action.payload}
        default:
            return state;
    }
}


export const projectCategoryListReducer = (state={projectCategories:{}, projectCategoryLoading:true}, action) => {
    switch(action.type){
        case PROJECT_CATEGORY_LIST_REQUEST:
            return { projectCategoryLoading:true, projectCategories:{} }
        case PROJECT_CATEGORY_LIST_SUCCESS:
            return { projectCategoryLoading: false, projectCategories: action.payload}
        case PROJECT_CATEGORY_LIST_FAIL:
            return { projectCategoryLoading:false, projectCategoryError: action.payload}
        default:
            return state;
    }
}

export const projectStatusListReducer = (state={projectStatuses:{}, projectStatusLoading:true}, action) => {
    switch(action.type){
        case PROJECT_STATUS_LIST_REQUEST:
            return { projectStatusLoading:true, projectStatuses:{} }
        case PROJECT_STATUS_LIST_SUCCESS:
            return { projectStatusLoading: false, projectStatuses: action.payload}
        case PROJECT_STATUS_LIST_FAIL:
            return { projectStatusLoading:false, projectStatusError: action.payload}
        default:
            return state;
    }
}


export const amenityListReducer = (state={amenities:{}, amenityLoading:true}, action) => {
    switch(action.type){
        case AMENITY_LIST_REQUEST:
            return { amenityLoading:true, projectStatuses:{} }
        case AMENITY_LIST_SUCCESS:
            return { amenityLoading: false, amenities: action.payload}
        case AMENITY_LIST_FAIL:
            return { amenityLoading:false, amenityError: action.payload}
        default:
            return state;
    }
}

export const equityInvestmentListReducer = (state={equityInvestments:{}, eqLoading:true}, action) => {
    switch(action.type){
        case EQUITY_INVESTMENT_LIST_REQUEST:
            return { equityInvestments:{}, eqLoading:true }
        case EQUITY_INVESTMENT_LIST_SUCCESS:
            return { eqLoading: false, equityInvestments: action.payload}
        case EQUITY_INVESTMENT_LIST_FAIL:
            return { eqLoading:false, eqError: action.payload}
        default:
            return state;
    }
}