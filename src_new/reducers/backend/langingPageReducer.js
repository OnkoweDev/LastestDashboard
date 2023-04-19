import { ADD_LANDINGPAGE_FAILED, ADD_LANDINGPAGE_REQUEST, ADD_LANDINGPAGE_SUCCESS, DELETE_LANDINGPAGE_FAILED, DELETE_LANDINGPAGE_REQUEST, DELETE_LANDINGPAGE_SUCCESS, GETONE_LANDINGPAGE_FAILED, GETONE_LANDINGPAGE_REQUEST, GETONE_LANDINGPAGE_SUCCESS, GET_LANDINGPAGE_FAILED, GET_LANDINGPAGE_REQUEST, GET_LANDINGPAGE_SUCCESS } from "../../constant/backend/landingPageConstant";


export const addLandingPageCapReducer = (state={},action) => {
    switch(action.type){
        case ADD_LANDINGPAGE_REQUEST:
            return {loading:true}
        case ADD_LANDINGPAGE_SUCCESS:
            return {loading:false, success:true}
        case ADD_LANDINGPAGE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getLandingPageReducer = (state={LandingPages:[]},action) => {
    switch(action.type){
        case GET_LANDINGPAGE_REQUEST:
            return {loading:true}
        case GET_LANDINGPAGE_SUCCESS:
            return {loading:false, success:true, LandingPages:action.payload}
        case GET_LANDINGPAGE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneLandingPageReducer = (state={LandingPage:[]},action) => {
    switch(action.type){
        case GETONE_LANDINGPAGE_REQUEST:
            return {loading:true}
        case GETONE_LANDINGPAGE_SUCCESS:
            return {loading:false, success:true, LandingPage:action.payload}
        case GETONE_LANDINGPAGE_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteLandingPageReducer = (state={},action) => {
    switch(action.type){
        case DELETE_LANDINGPAGE_REQUEST:
            return {loading:true}
        case DELETE_LANDINGPAGE_SUCCESS:
            return {loading:false, success:true}
        case DELETE_LANDINGPAGE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
