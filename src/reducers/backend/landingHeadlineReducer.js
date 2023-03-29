import { ADD_LANDINGHEADLINE_FAILED, ADD_LANDINGHEADLINE_REQUEST, ADD_LANDINGHEADLINE_SUCCESS, DELETE_LANDINGHEADLINE_FAILED, DELETE_LANDINGHEADLINE_REQUEST, DELETE_LANDINGHEADLINE_SUCCESS, GETONE_LANDINGHEADLINE_FAILED, GETONE_LANDINGHEADLINE_REQUEST, GETONE_LANDINGHEADLINE_SUCCESS, GET_LANDINGHEADLINE_FAILED, GET_LANDINGHEADLINE_REQUEST, GET_LANDINGHEADLINE_SUCCESS } from "../../constant/backend/LandingHeadlineConstant";



export const addLandingHeadlineReducer = (state={},action) => {
    switch(action.type){
        case ADD_LANDINGHEADLINE_REQUEST:
            return {loading:true}
        case ADD_LANDINGHEADLINE_SUCCESS:
            return {loading:false, success:true}
        case ADD_LANDINGHEADLINE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getLandingHeadlineReducer = (state={Landings:[]},action) => {
    switch(action.type){
        case GET_LANDINGHEADLINE_REQUEST:
            return {loading:true}
        case GET_LANDINGHEADLINE_SUCCESS:
            return {loading:false, success:true, Landings:action.payload}
        case GET_LANDINGHEADLINE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneLandingHeadlineReducer = (state={Land:[]},action) => {
    switch(action.type){
        case GETONE_LANDINGHEADLINE_REQUEST:
            return {loading:true}
        case GETONE_LANDINGHEADLINE_SUCCESS:
            return {loading:false, success:true, Land:action.payload}
        case GETONE_LANDINGHEADLINE_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteLandingHeadlineReducer = (state={},action) => {
    switch(action.type){
        case DELETE_LANDINGHEADLINE_REQUEST:
            return {loading:true}
        case DELETE_LANDINGHEADLINE_SUCCESS:
            return {loading:false, success:true}
        case DELETE_LANDINGHEADLINE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
