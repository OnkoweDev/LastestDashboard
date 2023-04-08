import { ADD_LANGUAGE_FAILED, ADD_LANGUAGE_REQUEST, ADD_LANGUAGE_SUCCESS, DELETE_LANGUAGE_FAILED, DELETE_LANGUAGE_REQUEST, DELETE_LANGUAGE_SUCCESS, GETONE_LANGUAGE_FAILED, GETONE_LANGUAGE_REQUEST, GETONE_LANGUAGE_SUCCESS, GET_LANGUAGE_FAILED, GET_LANGUAGE_REQUEST, GET_LANGUAGE_SUCCESS } from "../../constant/backend/languageConstant";

export const addLanguageReducer = (state={},action) => {
    switch(action.type){
        case ADD_LANGUAGE_REQUEST:
            return {loading:true}
        case ADD_LANGUAGE_SUCCESS:
            return {loading:false, success:true}
        case ADD_LANGUAGE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getLanguageReducer = (state={languages:[]},action) => {
    switch(action.type){
        case GET_LANGUAGE_REQUEST:
            return {loading:true}
        case GET_LANGUAGE_SUCCESS:
            return {loading:false, success:true, languages:action.payload}
        case GET_LANGUAGE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneLanguageReducer = (state={language:[]},action) => {
    switch(action.type){
        case GETONE_LANGUAGE_REQUEST:
            return {loading:true}
        case GETONE_LANGUAGE_SUCCESS:
            return {loading:false, success:true, language:action.payload}
        case GETONE_LANGUAGE_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteLanguageReducer = (state={},action) => {
    switch(action.type){
        case DELETE_LANGUAGE_REQUEST:
            return {loading:true}
        case DELETE_LANGUAGE_SUCCESS:
            return {loading:false, success:true}
        case DELETE_LANGUAGE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
