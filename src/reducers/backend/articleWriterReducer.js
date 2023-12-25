import { ADD_ARTICLEWRITTER_FAILED, ADD_ARTICLEWRITTER_REQUEST, ADD_ARTICLEWRITTER_SUCCESS, DELETE_ARTICLEWRITTER_FAILED, DELETE_ARTICLEWRITTER_REQUEST, DELETE_ARTICLEWRITTER_SUCCESS, GETONE_ARTICLEWRITTER_FAILED, GETONE_ARTICLEWRITTER_REQUEST, GETONE_ARTICLEWRITTER_SUCCESS, GET_ARTICLEWRITTER_FAILED, GET_ARTICLEWRITTER_REQUEST, GET_ARTICLEWRITTER_SUCCESS, UPDATE_ARTICLEWRITTER_FAILED, UPDATE_ARTICLEWRITTER_REQUEST, UPDATE_ARTICLEWRITTER_SUCCESS } from "../../constant/backend/articleWriterConstant"

export const addArticleWriterReducer = (state={},action) => {
    switch(action.type){
        case ADD_ARTICLEWRITTER_REQUEST:
            return {loading:true}
        case ADD_ARTICLEWRITTER_SUCCESS:
            return {loading:false, success:true}
        case ADD_ARTICLEWRITTER_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getArticleWriterReducer = (state={writer:[]},action) => {
    switch(action.type){
        case GET_ARTICLEWRITTER_REQUEST:
            return {loading:true}
        case GET_ARTICLEWRITTER_SUCCESS:
            return {laoding:false, writer:action.payload}
        case GET_ARTICLEWRITTER_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneArticleWriterReducer = (state={wroter:[]},action) => {
    switch(action.type){
        case GETONE_ARTICLEWRITTER_REQUEST:
            return {loading:true}
        case GETONE_ARTICLEWRITTER_SUCCESS:
            return {laoding:false, success:true,wroter:action.payload}
        case GETONE_ARTICLEWRITTER_FAILED:
            return {loading:false,  success:false, error:action.payload}
        default:
            return state;
    }   
}

export const updatdeArticleWriterReducer = (state={},action) => {
    switch(action.type){
        case UPDATE_ARTICLEWRITTER_REQUEST:
            return {loading:true}
        case UPDATE_ARTICLEWRITTER_SUCCESS:
            return {laoding:false, success:true}
        case UPDATE_ARTICLEWRITTER_FAILED:
            return {loading:false,  success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteArticleWriterReducer = (state={},action) => {
    switch(action.type){
        case DELETE_ARTICLEWRITTER_REQUEST:
            return {loading:true}
        case DELETE_ARTICLEWRITTER_SUCCESS:
            return {laoding:false, success:true}
        case DELETE_ARTICLEWRITTER_FAILED:
            return {loading:false,  success:false, error:action.payload}
        default:
            return state;
    }   
}