import { ADD_INSTAGRAMCAP_FAILED, ADD_INSTAGRAMCAP_REQUEST, ADD_INSTAGRAMCAP_SUCCESS, DELETE_INSTAGRAMCAP_FAILED, DELETE_INSTAGRAMCAP_REQUEST, DELETE_INSTAGRAMCAP_SUCCESS, GETONE_INSTAGRAMCAP_FAILED, GETONE_INSTAGRAMCAP_REQUEST, GETONE_INSTAGRAMCAP_SUCCESS, GET_INSTAGRAMCAP_FAILED, GET_INSTAGRAMCAP_REQUEST, GET_INSTAGRAMCAP_SUCCESS } from "../../constant/backend/instagramConstant";

export const addInstagramCapReducer = (state={},action) => {
    switch(action.type){
        case ADD_INSTAGRAMCAP_REQUEST:
            return {loading:true}
        case ADD_INSTAGRAMCAP_SUCCESS:
            return {loading:false, success:true}
        case ADD_INSTAGRAMCAP_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getInstagramReducer = (state={instagrams:[]},action) => {
    switch(action.type){
        case GET_INSTAGRAMCAP_REQUEST:
            return {loading:true}
        case GET_INSTAGRAMCAP_SUCCESS:
            return {loading:false, success:true, instagrams:action.payload}
        case GET_INSTAGRAMCAP_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneInstagramReducer = (state={instagram:[]},action) => {
    switch(action.type){
        case GETONE_INSTAGRAMCAP_REQUEST:
            return {loading:true}
        case GETONE_INSTAGRAMCAP_SUCCESS:
            return {loading:false, success:true, instagram:action.payload}
        case GETONE_INSTAGRAMCAP_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteInstagramReducer = (state={},action) => {
    switch(action.type){
        case DELETE_INSTAGRAMCAP_REQUEST:
            return {loading:true}
        case DELETE_INSTAGRAMCAP_SUCCESS:
            return {loading:false, success:true}
        case DELETE_INSTAGRAMCAP_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
