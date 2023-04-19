import { ADD_GOOGLEADS_FAILED, ADD_GOOGLEADS_REQUEST, ADD_GOOGLEADS_SUCCESS, DELETE_GOOGLEADS_FAILED, DELETE_GOOGLEADS_REQUEST, DELETE_GOOGLEADS_SUCCESS, GETONE_GOOGLEADS_FAILED, GETONE_GOOGLEADS_REQUEST, GETONE_GOOGLEADS_SUCCESS, GET_GOOGLEADS_FAILED, GET_GOOGLEADS_REQUEST, GET_GOOGLEADS_SUCCESS } from "../../constant/backend/googleAdsConstant";


export const addGoogleAdsReducer = (state={},action) => {
    switch(action.type){
        case ADD_GOOGLEADS_REQUEST:
            return {loading:true}
        case ADD_GOOGLEADS_SUCCESS:
            return {loading:false, success:true}
        case ADD_GOOGLEADS_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getGoogleAdsReducer = (state={GoogleAds:[]},action) => {
    switch(action.type){
        case GET_GOOGLEADS_REQUEST:
            return {loading:true}
        case GET_GOOGLEADS_SUCCESS:
            return {loading:false, success:true, GoogleAds:action.payload}
        case GET_GOOGLEADS_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneGoogleAdsReducer = (state={GoogleAd:[]},action) => {
    switch(action.type){
        case GETONE_GOOGLEADS_REQUEST:
            return {loading:true}
        case GETONE_GOOGLEADS_SUCCESS:
            return {loading:false, success:true, GoogleAd:action.payload}
        case GETONE_GOOGLEADS_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteGoogleAdsReducer = (state={},action) => {
    switch(action.type){
        case DELETE_GOOGLEADS_REQUEST:
            return {loading:true}
        case DELETE_GOOGLEADS_SUCCESS:
            return {loading:false, success:true}
        case DELETE_GOOGLEADS_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
