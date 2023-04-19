import { ADD_FACEBOOKADS_FAILED, ADD_FACEBOOKADS_REQUEST, ADD_FACEBOOKADS_SUCCESS, DELETE_FACEBOOKADS_FAILED, DELETE_FACEBOOKADS_REQUEST, DELETE_FACEBOOKADS_SUCCESS, GETONE_FACEBOOKADS_FAILED, GETONE_FACEBOOKADS_REQUEST, GETONE_FACEBOOKADS_SUCCESS, GET_FACEBOOKADS_FAILED, GET_FACEBOOKADS_REQUEST, GET_FACEBOOKADS_SUCCESS } from "../../constant/backend/facebookConstant";



export const addFacebookReducer = (state={},action) => {
    switch(action.type){
        case ADD_FACEBOOKADS_REQUEST:
            return {loading:true}
        case ADD_FACEBOOKADS_SUCCESS:
            return {loading:false, success:true}
        case ADD_FACEBOOKADS_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getFacebookReducer = (state={facebooks:[]},action) => {
    switch(action.type){
        case GET_FACEBOOKADS_REQUEST:
            return {loading:true}
        case GET_FACEBOOKADS_SUCCESS:
            return {loading:false, success:true, facebooks:action.payload}
        case GET_FACEBOOKADS_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneFacebookReducer = (state={facebook:[]},action) => {
    switch(action.type){
        case GETONE_FACEBOOKADS_REQUEST:
            return {loading:true}
        case GETONE_FACEBOOKADS_SUCCESS:
            return {loading:false, success:true, facebook:action.payload}
        case GETONE_FACEBOOKADS_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteFacebookReducer = (state={},action) => {
    switch(action.type){
        case DELETE_FACEBOOKADS_REQUEST:
            return {loading:true}
        case DELETE_FACEBOOKADS_SUCCESS:
            return {loading:false, success:true}
        case DELETE_FACEBOOKADS_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
