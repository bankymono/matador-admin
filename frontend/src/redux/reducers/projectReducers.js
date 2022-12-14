import {
    AMENITY_LIST_FAIL,
    AMENITY_LIST_REQUEST,
    AMENITY_LIST_SUCCESS,

    BUILDING_TYPE_LIST_FAIL,
    BUILDING_TYPE_LIST_REQUEST,
    BUILDING_TYPE_LIST_SUCCESS,

    PROJECT_CREATE_COMPLETE,
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,

    EQUITY_INVESTMENT_LIST_FAIL,
    EQUITY_INVESTMENT_LIST_REQUEST,
    EQUITY_INVESTMENT_LIST_SUCCESS,

    LAND_TITLE_LIST_FAIL,
    LAND_TITLE_LIST_REQUEST,
    LAND_TITLE_LIST_SUCCESS,

    PROJECT_CATEGORY_LIST_FAIL,
    PROJECT_CATEGORY_LIST_REQUEST,
    PROJECT_CATEGORY_LIST_SUCCESS,

    PROJECT_STATUS_LIST_FAIL,
    PROJECT_STATUS_LIST_REQUEST,
    PROJECT_STATUS_LIST_SUCCESS,

    PROJECTS_STAT_REQUEST,
    PROJECTS_STAT_SUCCESS,
    PROJECTS_STAT_FAIL,

    PROJECTS_DATA_FAIL,
    PROJECTS_DATA_SUCCESS,
    PROJECTS_DATA_REQUEST,
    PROJECT_DATA_FAIL,
    PROJECT_DATA_SUCCESS,
    PROJECT_DATA_REQUEST,

} from "../constants/projectConstants";

export const landTitleListReducer = (state = { landTitles: {}, landTitleLoading: true }, action) => {
    switch (action.type) {
        case LAND_TITLE_LIST_REQUEST:
            return { landTitleLoading: true, landTitles: {} }
        case LAND_TITLE_LIST_SUCCESS:
            return { landTitleLoading: false, landTitles: action.payload }
        case LAND_TITLE_LIST_FAIL:
            return { landTitleLoading: false, landTitleError: action.payload }
        default:
            return state;
    }
}

export const buildingTypeListReducer = (state = { buildingTypes: {}, buildingTypeLoading: true }, action) => {
    switch (action.type) {
        case BUILDING_TYPE_LIST_REQUEST:
            return { buildingTypeLoading: true, buildingTypes: {} }
        case BUILDING_TYPE_LIST_SUCCESS:
            return { buildingTypeLoading: false, buildingTypes: action.payload }
        case BUILDING_TYPE_LIST_FAIL:
            return { buildingTypeLoading: false, buildingTypeError: action.payload }
        default:
            return state;
    }
}


export const projectCategoryListReducer = (state = { projectCategories: {}, projectCategoryLoading: true }, action) => {
    switch (action.type) {
        case PROJECT_CATEGORY_LIST_REQUEST:
            return { projectCategoryLoading: true, projectCategories: {} }
        case PROJECT_CATEGORY_LIST_SUCCESS:
            return { projectCategoryLoading: false, projectCategories: action.payload }
        case PROJECT_CATEGORY_LIST_FAIL:
            return { projectCategoryLoading: false, projectCategoryError: action.payload }
        default:
            return state;
    }
}

export const projectStatusListReducer = (state = { projectStatuses: {}, projectStatusLoading: true }, action) => {
    switch (action.type) {
        case PROJECT_STATUS_LIST_REQUEST:
            return { projectStatusLoading: true, projectStatuses: {} }
        case PROJECT_STATUS_LIST_SUCCESS:
            return { projectStatusLoading: false, projectStatuses: action.payload }
        case PROJECT_STATUS_LIST_FAIL:
            return { projectStatusLoading: false, projectStatusError: action.payload }
        default:
            return state;
    }
}


export const amenityListReducer = (state = { amenities: {}, amenityLoading: true }, action) => {
    switch (action.type) {
        case AMENITY_LIST_REQUEST:
            return { amenityLoading: true, projectStatuses: {} }
        case AMENITY_LIST_SUCCESS:
            return { amenityLoading: false, amenities: action.payload }
        case AMENITY_LIST_FAIL:
            return { amenityLoading: false, amenityError: action.payload }
        default:
            return state;
    }
}

export const projectCreateReducer = (state = { requested: false, projectSuccess: false, projectLoading: true }, action) => {
    switch (action.type) {
        case PROJECT_CREATE_REQUEST:
            return {
                projectLoading: true,
                requested: true
            }
        case PROJECT_CREATE_SUCCESS:
            return {
                requested: true,
                projectLoading: false,
                projectSuccess: true,
                project: action.payloaded
            }
        case PROJECT_CREATE_COMPLETE:
            return {
                projectLoading: false,
                projectSuccess: false,
                requested: true
            }
        case PROJECT_CREATE_FAIL:
            return {
                projectLoading: false,
                projectError: action.payload,
                requested: true
            }

        default:
            return state;
    }
}
export const equityInvestmentListReducer = (state = { equityInvestments: {}, eqLoading: true }, action) => {
    switch (action.type) {
        case EQUITY_INVESTMENT_LIST_REQUEST:
            return { equityInvestments: {}, eqLoading: true }
        case EQUITY_INVESTMENT_LIST_SUCCESS:
            return { eqLoading: false, equityInvestments: action.payload }
        case EQUITY_INVESTMENT_LIST_FAIL:
            return { eqLoading: false, eqError: action.payload }
        default:
            return state;
    }
}
export const projectsStatReducer = (state = { projectsStat: null, projectStatRequest: false, projectsError: false }, action) => {
    switch (action.type) {
        case PROJECTS_STAT_REQUEST:
            return { projectsStat: null, projectStatRequest: true, projectsError: false }
        case PROJECTS_STAT_SUCCESS:
            return { projectsStat: action.payload, projectStatRequest: true, projectsError: false }
        case PROJECTS_STAT_FAIL:
            return { projectsStat: null, projectStatRequest: true, projectsError: true }
        default:
            return state;
    }
}
export const projectsDataReducer = (state = { projectsListData: null, projectDataRequest: false, projectsError: false }, action) => {
    switch (action.type) {
        case PROJECTS_DATA_REQUEST:
            return { projectsListData: null, projectsDataRequest: true, projectsError: false }
        case PROJECTS_DATA_SUCCESS:
            return { projectsListData: action.payload, projectsDataRequest: true, projectsError: false }
        case PROJECTS_DATA_FAIL:
            return { projectsListData: null, projectsDataRequest: true, projectsError: true }
        default:
            return state;
    }
}
export const singleProjectReducer = (state = { projectData: null, projectDataRequest: false, projectError: false }, action) => {
    switch (action.type) {
        case PROJECT_DATA_REQUEST:
            return { projectData: null, projectDataRequest: true, projectError: false }
        case PROJECT_DATA_SUCCESS:
            return { projectData: action.payload, projectDataRequest: true, projectError: false }
        case PROJECT_DATA_FAIL:
            return { projectData: null, projectDataRequest: true, projectError: true }
        default:
            return state;
    }
}