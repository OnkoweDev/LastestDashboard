import { ADD_UPLOAD_FAILED, ADD_UPLOAD_REQUEST, ADD_UPLOAD_SUCCESS, DELETE_UPLOAD_FAILED, DELETE_UPLOAD_REQUEST, DELETE_UPLOAD_SUCCESS, GETONE_UPLOAD_FAILED, GETONE_UPLOAD_REQUEST, GETONE_UPLOAD_SUCCESS, GET_UPLOAD_FAILED, GET_UPLOAD_REQUEST, GET_UPLOAD_SUCCESS } from "../../constant/backend/uploadConstant";

export const addUploadReducer = (state={},action) => {
    switch(action.type){
        case ADD_UPLOAD_REQUEST:
            return {loading:true}
        case ADD_UPLOAD_SUCCESS:
            return {loading:false, success:true}
        case ADD_UPLOAD_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getUploadReducer = (state={uploads:[]},action) => {
    switch(action.type){
        case GET_UPLOAD_REQUEST:
            return {loading:true}
        case GET_UPLOAD_SUCCESS:
            return {loading:false, success:true, uploads:action.payload}
        case GET_UPLOAD_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneUploadReducer = (state={upload:[]},action) => {
    switch(action.type){
        case GETONE_UPLOAD_REQUEST:
            return {loading:true}
        case GETONE_UPLOAD_SUCCESS:
            return {loading:false, success:true, upload:action.payload}
        case GETONE_UPLOAD_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteUploadReducer = (state={},action) => {
    switch(action.type){
        case DELETE_UPLOAD_REQUEST:
            return {loading:true}
        case DELETE_UPLOAD_SUCCESS:
            return {loading:false, success:true}
        case DELETE_UPLOAD_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
