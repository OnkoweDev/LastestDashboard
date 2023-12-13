import { ADD_CONTENTREPRE_FAILED, ADD_CONTENTREPRE_REQUEST, ADD_CONTENTREPRE_SUCCESS, DELETE_CONTENTREPRE_FAILED, DELETE_CONTENTREPRE_REQUEST, DELETE_CONTENTREPRE_SUCCESS, GETONE_CONTENTREPRE_FAILED, GETONE_CONTENTREPRE_REQUEST, GETONE_CONTENTREPRE_SUCCESS, GET_CONTENTREPRE_FAILED, GET_CONTENTREPRE_REQUEST, GET_CONTENTREPRE_SUCCESS } from "../../constant/backend/contentRepreConstant";

export const addContentReducer = (state={},action) => {
    switch(action.type){
        case ADD_CONTENTREPRE_REQUEST:
            return {loading:true}
        case ADD_CONTENTREPRE_SUCCESS:
            return {loading:false, success:true}
        case ADD_CONTENTREPRE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}


export const getContentReducer = (state={content:[]},action) => {
    switch(action.type){
        case GET_CONTENTREPRE_REQUEST:
            return {loading:true}
        case GET_CONTENTREPRE_SUCCESS:
            return {loading:false, success:true, content:action.payload}
        case GET_CONTENTREPRE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}


export const getOneContentReducer = (state={contents:[]},action) => {
    switch(action.type){
        case GETONE_CONTENTREPRE_REQUEST:
            return {loading:true}
        case GETONE_CONTENTREPRE_SUCCESS:
            return {loading:false, success:true, contents:action.payload}
        case GETONE_CONTENTREPRE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteContentReducer = (state={},action) => {
    switch(action.type){
        case DELETE_CONTENTREPRE_REQUEST:
            return {loading:true}
        case DELETE_CONTENTREPRE_SUCCESS:
            return {loading:false, success:true}
        case DELETE_CONTENTREPRE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}