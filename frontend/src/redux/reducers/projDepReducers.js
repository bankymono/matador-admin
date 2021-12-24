
import { AMENITIES_CREATE_COMPLETE, AMENITIES_CREATE_FAIL, AMENITIES_CREATE_REQUEST, AMENITIES_CREATE_SUCCESS, AMENITIES_DETAIL_FAIL, AMENITIES_DETAIL_REQUEST, AMENITIES_DETAIL_RESET, AMENITIES_DETAIL_SUCCESS, AMENITIES_LIST_FAIL, AMENITIES_LIST_REQUEST, AMENITIES_LIST_SUCCESS, BUILDING_TYPE_CREATE_COMPLETE, BUILDING_TYPE_CREATE_FAIL, BUILDING_TYPE_CREATE_REQUEST, BUILDING_TYPE_CREATE_SUCCESS, BUILDING_TYPE_DETAIL_FAIL, BUILDING_TYPE_DETAIL_REQUEST, BUILDING_TYPE_DETAIL_RESET, BUILDING_TYPE_DETAIL_SUCCESS, BUILDING_TYPE_LIST_FAIL, BUILDING_TYPE_LIST_REQUEST, BUILDING_TYPE_LIST_SUCCESS, CATEGORY_CREATE_COMPLETE, CATEGORY_CREATE_FAIL, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS, CATEGORY_DETAIL_FAIL, CATEGORY_DETAIL_REQUEST, CATEGORY_DETAIL_RESET, CATEGORY_DETAIL_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, LAND_TITLE_CREATE_COMPLETE, LAND_TITLE_CREATE_FAIL, LAND_TITLE_CREATE_REQUEST, LAND_TITLE_CREATE_SUCCESS, LAND_TITLE_DETAIL_FAIL, LAND_TITLE_DETAIL_REQUEST, LAND_TITLE_DETAIL_RESET, LAND_TITLE_DETAIL_SUCCESS, LAND_TITLE_LIST_FAIL, LAND_TITLE_LIST_REQUEST, LAND_TITLE_LIST_SUCCESS, PROJECT_STATUS_CREATE_COMPLETE, PROJECT_STATUS_CREATE_FAIL, PROJECT_STATUS_CREATE_REQUEST, PROJECT_STATUS_CREATE_SUCCESS, PROJECT_STATUS_DETAIL_FAIL, PROJECT_STATUS_DETAIL_REQUEST, PROJECT_STATUS_DETAIL_RESET, PROJECT_STATUS_DETAIL_SUCCESS, PROJECT_STATUS_LIST_FAIL, PROJECT_STATUS_LIST_REQUEST, PROJECT_STATUS_LIST_SUCCESS } from "../constants/projDepConstants";

export const projDepStatusListReducer = (state = { projDepStatuses: {}, projDepStatusLoading: true }, action) => {
    switch (action.type) {
        case PROJECT_STATUS_LIST_REQUEST:
            return { projDepStatusLoading: true, projDepStatuses: {} }
        case PROJECT_STATUS_LIST_SUCCESS:
            return { projDepStatusLoading: false, projDepStatuses: action.payload }
        case PROJECT_STATUS_LIST_FAIL:
            return { projDepStatusLoading: false, projDepStatusError: action.payload }
        default:
            return state;
    }
}

export const projDepStatusDetailReducer = (state = { projDepStatusDetail: {}, projDepStatusDetailLoading: true }, action) => {
    switch (action.type) {
        case PROJECT_STATUS_DETAIL_REQUEST:
            return { projDepStatusDetailLoading: true, projDepStatusDetail: {} }
        case PROJECT_STATUS_DETAIL_SUCCESS:
            return { projDepStatusDetailLoading: false, projDepStatusDetail: action.payload }
        case PROJECT_STATUS_DETAIL_FAIL:
            return { projDepStatusDetailLoading: false, projDepStatusDetailError: action.payload }
        case PROJECT_STATUS_DETAIL_RESET:
            return { projDepStatusDetail: {}, projDepStatusDetailLoading: true }
        default:
            return state;
    }
}


export const projDepLandTitleListReducer = (state = { projDepLandTitles: {}, projDepLandTitleLoading: true }, action) => {

    switch (action.type) {
        case LAND_TITLE_LIST_REQUEST:
            return { projDepLandTitleLoading: true, projDepLandTitles: {} }
        case LAND_TITLE_LIST_SUCCESS:
            return { projDepLandTitleLoading: false, projDepLandTitles: action.payload }
        case LAND_TITLE_LIST_FAIL:
            return { projDepLandTitleLoading: false, projDepLandTitleError: action.payload }
        default:
            return state;
    }
}

export const projDepLandTitleDetailReducer = (state = { projDepLandTitleDetail: {}, projDepLandTitleLoading: true }, action) => {

    switch (action.type) {
        case LAND_TITLE_DETAIL_REQUEST:
            return { projDepLandTitleDetailLoading: true, projDepLandTitleDetail: {} }
        case LAND_TITLE_DETAIL_SUCCESS:
            return { projDepLandTitleDetailLoading: false, projDepLandTitleDetail: action.payload }
        case LAND_TITLE_DETAIL_FAIL:
            return { projDepLandTitleDetailLoading: false, projDepLandTitleDetailError: action.payload }
        case LAND_TITLE_DETAIL_RESET:
            return { projDepLandTitleDetail: {}, projDepLandTitleLoading: true }
        default:
            return state;
    }
}


export const projDepAmenityListReducer = (state = { projDepAmenities: {}, projDepAmenitiesLoading: true }, action) => {

    switch (action.type) {
        case AMENITIES_LIST_REQUEST:
            return { projDepAmenitiesLoading: true, projDepAmenities: {} }
        case AMENITIES_LIST_SUCCESS:
            return { projDepAmenitiesLoading: false, projDepAmenities: action.payload }
        case AMENITIES_LIST_FAIL:
            return { projDepAmenitiesLoading: false, projDepAmenitiesError: action.payload }
        default:
            return state;
    }
}

export const projDepAmenityDetailReducer = (state = { projDepAmenityDetail: {}, projDepAmenityDetailLoading: true }, action) => {

    switch (action.type) {
        case AMENITIES_DETAIL_REQUEST:
            return { projDepAmenityDetailLoading: true, projDepAmenityDetail: {} }
        case AMENITIES_DETAIL_SUCCESS:
            return { projDepAmenityDetailLoading: false, projDepAmenityDetail: action.payload }
        case AMENITIES_DETAIL_FAIL:
            return { projDepAmenityDetailLoading: false, projDepAmenityDetailError: action.payload }
        case AMENITIES_DETAIL_RESET:
            return { projDepAmenityDetail: {}, projDepAmenityDetailLoading: true }
        default:
            return state;
    }
}


export const projDepBuildingTypeListReducer = (state = { projDepBuildingTypes: {}, projDepBuildingTypesLoading: true }, action) => {

    switch (action.type) {
        case BUILDING_TYPE_LIST_REQUEST:
            return { projDepBuildingTypesLoading: true, projDepBuildingTypes: {} }
        case BUILDING_TYPE_LIST_SUCCESS:
            return { projDepBuildingTypesLoading: false, projDepBuildingTypes: action.payload }
        case BUILDING_TYPE_LIST_FAIL:
            return { projDepBuildingTypesLoading: false, projDepBuildingTypesError: action.payload }
        default:
            return state;
    }
}


export const projDepBuildingTypeDetailReducer = (state = { projDepBuildingTypeDetail: {}, projDepBuildingTypeDetailLoading: true }, action) => {

    switch (action.type) {
        case BUILDING_TYPE_DETAIL_REQUEST:
            return { projDepBuildingTypeDetailLoading: true, projDepBuildingTypeDetail: {} }
        case BUILDING_TYPE_DETAIL_SUCCESS:
            return { projDepBuildingTypeDetailLoading: false, projDepBuildingTypeDetail: action.payload }
        case BUILDING_TYPE_DETAIL_FAIL:
            return { projDepBuildingTypeDetailLoading: false, projDepBuildingTypeDetailError: action.payload }
        case BUILDING_TYPE_DETAIL_RESET:
            return { projDepBuildingTypeDetail: {}, projDepBuildingTypeDetailLoading: true }
        default:
            return state;
    }
}

export const projDepCategoryListReducer = (state = { projDepCategorys: {}, projDepCategorysLoading: true }, action) => {

    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { projDepCategorysLoading: true, projDepCategorys: {} }
        case CATEGORY_LIST_SUCCESS:
            return { projDepCategorysLoading: false, projDepCategorys: action.payload }
        case CATEGORY_LIST_FAIL:
            return { projDepCategorysLoading: false, projDepCategorysError: action.payload }
        default:
            return state;
    }
}

export const projDepCategoryDetailReducer = (state = { projDepCategoryDetail: {}, projDepCategoryDetailLoading: true }, action) => {

    switch (action.type) {
        case CATEGORY_DETAIL_REQUEST:
            return { projDepCategoryDetailLoading: true, projDepCategoryDetail: {} }
        case CATEGORY_DETAIL_SUCCESS:
            return { projDepCategoryDetailLoading: false, projDepCategoryDetail: action.payload }
        case CATEGORY_DETAIL_FAIL:
            return { projDepCategoryDetailLoading: false, projDepCategoryDetailError: action.payload }
        case CATEGORY_DETAIL_RESET:
            return { projDepCategoryDetail: {}, projDepCategoryDetailLoading: true }
        default:
            return state;
    }
}



export const projStatusCreateReducer = (state={success:false}, action) => {
    switch(action.type){
        case PROJECT_STATUS_CREATE_REQUEST:
            return {
                loading:true
            }
        case PROJECT_STATUS_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                projectStatus:action.payload
            }
        case PROJECT_STATUS_CREATE_COMPLETE:
            return {
                loading:false,
                success:false,
            }
        case PROJECT_STATUS_CREATE_FAIL:
            return {
                loading:false,
                error:action.payload,
            }

        default:
            return state
    }
}


export const landTitleCreateReducer = (state={success:false}, action) => {
    switch(action.type){
        case LAND_TITLE_CREATE_REQUEST:
            return {
                loading:true
            }
        case LAND_TITLE_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                landTitle:action.payload
            }
        case LAND_TITLE_CREATE_COMPLETE:
            return {
                loading:false,
                success:false,
            }
        case LAND_TITLE_CREATE_FAIL:
            return {
                loading:false,
                error:action.payload,
            }

        default:
            return state
    }
}


export const amenitiesCreateReducer = (state={success:false}, action) => {
    switch(action.type){
        case AMENITIES_CREATE_REQUEST:
            return {
                loading:true
            }
        case AMENITIES_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                amenity:action.payload
            }
        case AMENITIES_CREATE_COMPLETE:
            return {
                loading:false,
                success:false,
            }
        case AMENITIES_CREATE_FAIL:
            return {
                loading:false,
                error:action.payload,
            }

        default:
            return state
    }
}


export const buildingTypeCreateReducer = (state={success:false}, action) => {
    switch(action.type){
        case BUILDING_TYPE_CREATE_REQUEST:
            return {
                loading:true
            }
        case BUILDING_TYPE_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                amenity:action.payload
            }
        case BUILDING_TYPE_CREATE_COMPLETE:
            return {
                loading:false,
                success:false,
            }
        case BUILDING_TYPE_CREATE_FAIL:
            return {
                loading:false,
                error:action.payload,
            }

        default:
            return state
    }
}


export const categoryCreateReducer = (state={success:false}, action) => {
    switch(action.type){
        case CATEGORY_CREATE_REQUEST:
            return {
                loading:true
            }
        case CATEGORY_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                amenity:action.payload
            }
        case CATEGORY_CREATE_COMPLETE:
            return {
                loading:false,
                success:false,
            }
        case CATEGORY_CREATE_FAIL:
            return {
                loading:false,
                error:action.payload,
            }

        default:
            return state
    }
}