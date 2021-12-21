
import api from '../../api';
import { 
    AMENITIES_CREATE_COMPLETE,
    AMENITIES_CREATE_FAIL,
    AMENITIES_CREATE_REQUEST,
    AMENITIES_CREATE_SUCCESS,
    AMENITIES_DETAIL_FAIL,
    AMENITIES_DETAIL_REQUEST,
    AMENITIES_DETAIL_RESET,
    AMENITIES_DETAIL_SUCCESS,
    AMENITIES_LIST_FAIL, 
    AMENITIES_LIST_REQUEST, 
    AMENITIES_LIST_SUCCESS, 
    BUILDING_TYPE_CREATE_COMPLETE, 
    BUILDING_TYPE_CREATE_FAIL, 
    BUILDING_TYPE_CREATE_REQUEST, 
    BUILDING_TYPE_CREATE_SUCCESS, 
    BUILDING_TYPE_DETAIL_FAIL, 
    BUILDING_TYPE_DETAIL_REQUEST, 
    BUILDING_TYPE_DETAIL_RESET, 
    BUILDING_TYPE_DETAIL_SUCCESS, 
    BUILDING_TYPE_LIST_FAIL, 
    BUILDING_TYPE_LIST_REQUEST, 
    BUILDING_TYPE_LIST_SUCCESS, 
    CATEGORY_CREATE_COMPLETE, 
    CATEGORY_CREATE_FAIL, 
    CATEGORY_CREATE_REQUEST, 
    CATEGORY_CREATE_SUCCESS, 
    CATEGORY_DETAIL_FAIL, 
    CATEGORY_DETAIL_REQUEST, 
    CATEGORY_DETAIL_RESET, 
    CATEGORY_DETAIL_SUCCESS, 
    CATEGORY_LIST_FAIL, 
    CATEGORY_LIST_REQUEST, 
    CATEGORY_LIST_SUCCESS, 
    LAND_TITLE_CREATE_COMPLETE, 
    LAND_TITLE_CREATE_FAIL, 
    LAND_TITLE_CREATE_REQUEST, 
    LAND_TITLE_CREATE_SUCCESS, 
    LAND_TITLE_DETAIL_FAIL, 
    LAND_TITLE_DETAIL_REQUEST, 
    LAND_TITLE_DETAIL_RESET, 
    LAND_TITLE_DETAIL_SUCCESS, 
    LAND_TITLE_LIST_FAIL, 
    LAND_TITLE_LIST_REQUEST, 
    LAND_TITLE_LIST_SUCCESS, 
    PROJECT_STATUS_CREATE_COMPLETE, 
    PROJECT_STATUS_CREATE_FAIL, 
    PROJECT_STATUS_CREATE_REQUEST, 
    PROJECT_STATUS_CREATE_SUCCESS, 
    PROJECT_STATUS_DETAIL_FAIL, 
    PROJECT_STATUS_DETAIL_REQUEST, 
    PROJECT_STATUS_DETAIL_RESET, 
    PROJECT_STATUS_DETAIL_SUCCESS, 
    PROJECT_STATUS_LIST_FAIL, 
    PROJECT_STATUS_LIST_REQUEST, 
    PROJECT_STATUS_LIST_SUCCESS 
} from "../constants/projDepConstants"


export const getProjStatus = () => async (dispatch) => {

    try {
        dispatch({
            type: PROJECT_STATUS_LIST_REQUEST
        })

        const { data } = await api.get('/investment/project-status')

        dispatch({
            type: PROJECT_STATUS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PROJECT_STATUS_LIST_FAIL,
            payload: error.response
        })
    }
}

export const getProjStatusDetail = (id) => async (dispatch) => {

    try {
        dispatch({
            type: LAND_TITLE_DETAIL_RESET
        })
        dispatch({
            type: AMENITIES_DETAIL_RESET
        })
        dispatch({
            type: BUILDING_TYPE_DETAIL_RESET
        })
        dispatch({
            type: CATEGORY_DETAIL_RESET
        })
        dispatch({
            type: PROJECT_STATUS_DETAIL_REQUEST
        })

        const { data } = await api.get(`/investment/project-status/${id}`)

        dispatch({
            type: PROJECT_STATUS_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PROJECT_STATUS_DETAIL_FAIL,
            payload: error.response
        })
    }
}


export const getLandTitles = () => async (dispatch) => {

    try {
        dispatch({
            type: LAND_TITLE_LIST_REQUEST
        })

        const { data } = await api.get('/investment/land-title')

        dispatch({
            type: LAND_TITLE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LAND_TITLE_LIST_FAIL,
            payload: error.response
        })
    }
}


export const getLandTitleDetail = (id) => async (dispatch) => {

    try {
        dispatch({
            type: PROJECT_STATUS_DETAIL_RESET
        }) 
        dispatch({
            type: AMENITIES_DETAIL_RESET
        }) 
        dispatch({
            type: BUILDING_TYPE_DETAIL_RESET
        }) 
        dispatch({
            type: CATEGORY_DETAIL_RESET
        }) 

        dispatch({
            type: LAND_TITLE_DETAIL_REQUEST
        })


        const { data } = await api.get(`/investment/land-title/${id}`)

        dispatch({
            type: LAND_TITLE_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LAND_TITLE_DETAIL_FAIL,
            payload: error.response
        })
    }
}

export const getAmenities = () => async (dispatch) => {

    try {
        dispatch({
            type: AMENITIES_LIST_REQUEST
        })

        const { data } = await api.get('/investment/amenity')

        dispatch({
            type: AMENITIES_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: AMENITIES_LIST_FAIL,
            payload: error.response
        })
    }
}


export const getAmenityDetail = (id) => async (dispatch) => {

    try {
        dispatch({
            type: PROJECT_STATUS_DETAIL_RESET
        })

        dispatch({
            type: LAND_TITLE_DETAIL_RESET
        })
        dispatch({
            type: BUILDING_TYPE_DETAIL_RESET
        })
        dispatch({
            type: CATEGORY_DETAIL_RESET
        })

        dispatch({
            type: AMENITIES_DETAIL_REQUEST
        })

        const { data } = await api.get(`/investment/amenity/${id}`)

        dispatch({
            type: AMENITIES_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: AMENITIES_DETAIL_FAIL,
            payload: error.response
        })
    }
}


export const getBuildingTypes = () => async (dispatch) => {

    try {
        dispatch({
            type: BUILDING_TYPE_LIST_REQUEST
        })
        

        const { data } = await api.get('/investment/building-type');

        dispatch({
            type: BUILDING_TYPE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BUILDING_TYPE_LIST_FAIL,
            payload: error.response
        })
    }
}


export const getBuildingTypeDetail = (id) => async (dispatch) => {

    try {
        dispatch({
            type: PROJECT_STATUS_DETAIL_RESET
        })
        dispatch({
            type: LAND_TITLE_DETAIL_RESET
        })

        dispatch({
            type: AMENITIES_DETAIL_RESET
        })
        dispatch({
            type: CATEGORY_DETAIL_RESET
        })

        dispatch({
            type: BUILDING_TYPE_DETAIL_REQUEST
        })

        const { data } = await api.get(`/investment/building-type/${id}`);

        dispatch({
            type: BUILDING_TYPE_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BUILDING_TYPE_DETAIL_FAIL,
            payload: error.response
        })
    }
}


export const getCategories = () => async (dispatch) => {

    try {
        dispatch({
            type: CATEGORY_LIST_REQUEST
        })

        const { data } = await api.get('/investment/categorys');

        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.response
        })
    }
}

export const getCategoryDetail = (id) => async (dispatch) => {

    try {
        dispatch({
            type: PROJECT_STATUS_DETAIL_RESET
        })
        dispatch({
            type: LAND_TITLE_DETAIL_RESET
        })
        dispatch({
            type: AMENITIES_DETAIL_RESET
        })
        dispatch({
            type: BUILDING_TYPE_DETAIL_RESET
        })
        dispatch({
            type: CATEGORY_DETAIL_REQUEST
        })

        const { data } = await api.get(`/investment/categorys/${id}`);

        dispatch({
            type: CATEGORY_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_DETAIL_FAIL,
            payload: error.response
        })
    }
}



export const createProjectStatus = (projDep) => async (dispatch) => {
    try {
        dispatch({
            type: PROJECT_STATUS_CREATE_REQUEST
        })

        const {data} = await api.post('/investment/project-status', projDep)

        dispatch({
            type:PROJECT_STATUS_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:PROJECT_STATUS_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create dep error', error.response)
        dispatch({
            type: PROJECT_STATUS_CREATE_FAIL,
            payload:error.response
        })
    }
}


export const updateProjectStatus = (id,projDep) => async (dispatch) => {
    try {
        dispatch({
            type: PROJECT_STATUS_CREATE_REQUEST
        })

        const {data} = await api.patch(`/investment/project-status/${id}`, projDep)

        dispatch({
            type:PROJECT_STATUS_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:PROJECT_STATUS_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create dep error', error.response)
        dispatch({
            type: PROJECT_STATUS_CREATE_FAIL,
            payload:error.response
        })
    }
}


export const createLandTitle = (projDep) => async (dispatch) => {
    try {
        dispatch({
            type: LAND_TITLE_CREATE_REQUEST
        })

        const {data} = await api.post('/investment/land-title', projDep)

        dispatch({
            type:LAND_TITLE_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:LAND_TITLE_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create DEP error', error.response)
        dispatch({
            type: LAND_TITLE_CREATE_FAIL,
            payload:error.response
        })
    }
}


export const updateLandTitle = (id, projDep) => async (dispatch) => {
    try {
        dispatch({
            type: LAND_TITLE_CREATE_REQUEST
        })

        const {data} = await api.patch(`/investment/land-title/${id}`, projDep)

        dispatch({
            type:LAND_TITLE_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:LAND_TITLE_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create DEP error', error.response)
        dispatch({
            type: LAND_TITLE_CREATE_FAIL,
            payload:error.response
        })
    }
}


export const createAmenity = (projDep) => async (dispatch) => {
    try {
        dispatch({
            type: AMENITIES_CREATE_REQUEST
        })

        const {data} = await api.post('/investment/amenity', projDep)

        dispatch({
            type:AMENITIES_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:AMENITIES_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create DEP error', error.response)
        dispatch({
            type: AMENITIES_CREATE_FAIL,
            payload:error.response
        })
    }
}

export const updateAmenity = (id, projDep) => async (dispatch) => {
    try {
        dispatch({
            type: AMENITIES_CREATE_REQUEST
        })

        const {data} = await api.patch(`/investment/amenity/${id}`, projDep)

        dispatch({
            type:AMENITIES_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:AMENITIES_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create DEP error', error.response)
        dispatch({
            type: AMENITIES_CREATE_FAIL,
            payload:error.response
        })
    }
}


export const createBuildingType = (projDep) => async (dispatch) => {
    try {
        dispatch({
            type: BUILDING_TYPE_CREATE_REQUEST
        })

        const {data} = await api.post('/investment/building-type', projDep)

        dispatch({
            type:BUILDING_TYPE_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:BUILDING_TYPE_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create DEP error', error.response)
        dispatch({
            type: BUILDING_TYPE_CREATE_FAIL,
            payload:error.response
        })
    }
}


export const updateBuildingType = (id,projDep) => async (dispatch) => {
    try {
        dispatch({
            type: BUILDING_TYPE_CREATE_REQUEST
        })

        const {data} = await api.patch(`/investment/building-type/${id}`, projDep)

        dispatch({
            type:BUILDING_TYPE_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:BUILDING_TYPE_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create DEP error', error.response)
        dispatch({
            type: BUILDING_TYPE_CREATE_FAIL,
            payload:error.response
        })
    }
}


export const createCategory = (projDep) => async (dispatch) => {
    try {
        dispatch({
            type: CATEGORY_CREATE_REQUEST
        })

        const {data} = await api.post('/investment/categorys', projDep)

        dispatch({
            type:CATEGORY_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:CATEGORY_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create DEP error', error.response)
        dispatch({
            type: CATEGORY_CREATE_FAIL,
            payload:error.response
        })
    }
}

export const updateCategory = (id,projDep) => async (dispatch) => {
    try {
        dispatch({
            type: CATEGORY_CREATE_REQUEST
        })

        const {data} = await api.patch(`/investment/categorys/${id}`, projDep)

        dispatch({
            type:CATEGORY_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:CATEGORY_CREATE_COMPLETE
        })

    } catch (error) {
        console.log('create DEP error', error.response)
        dispatch({
            type: CATEGORY_CREATE_FAIL,
            payload:error.response
        })
    }
}