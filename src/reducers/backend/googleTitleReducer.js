import { ADD_GOOGLETITLE_FAILED, ADD_GOOGLETITLE_REQUEST, ADD_GOOGLETITLE_SUCCESS, DELETE_GOOGLETITLE_FAILED, DELETE_GOOGLETITLE_REQUEST, DELETE_GOOGLETITLE_SUCCESS, GETONE_GOOGLETITLE_FAILED, GETONE_GOOGLETITLE_REQUEST, GETONE_GOOGLETITLE_SUCCESS, GET_GOOGLETITLE_FAILED, GET_GOOGLETITLE_REQUEST, GET_GOOGLETITLE_SUCCESS } from "../../constant/backend/googleTitleConstant";



export const addGoogleTitleReducer = (state={},action) => {
    switch(action.type){
        case ADD_GOOGLETITLE_REQUEST:
            return {loading:true}
        case ADD_GOOGLETITLE_SUCCESS:
            return {loading:false, success:true}
        case ADD_GOOGLETITLE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getGoogleTitleReducer = (state={titles:[]},action) => {
    switch(action.type){
        case GET_GOOGLETITLE_REQUEST:
            return {loading:true}
        case GET_GOOGLETITLE_SUCCESS:
            return {loading:false, success:true, titles:action.payload}
        case GET_GOOGLETITLE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneGoogleTitleReducer = (state={title:[]},action) => {
    switch(action.type){
        case GETONE_GOOGLETITLE_REQUEST:
            return {loading:true}
        case GETONE_GOOGLETITLE_SUCCESS:
            return {loading:false, success:true, title:action.payload}
        case GETONE_GOOGLETITLE_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteGoogleTitleReducer = (state={},action) => {
    switch(action.type){
        case DELETE_GOOGLETITLE_REQUEST:
            return {loading:true}
        case DELETE_GOOGLETITLE_SUCCESS:
            return {loading:false, success:true}
        case DELETE_GOOGLETITLE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
