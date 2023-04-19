import { ADD_EMAILGEN_FAILED, ADD_EMAILGEN_REQUEST, ADD_EMAILGEN_SUCCESS, DELETE_EMAILGEN_FAILED, DELETE_EMAILGEN_REQUEST, DELETE_EMAILGEN_SUCCESS, GETONE_EMAILGEN_FAILED, GETONE_EMAILGEN_REQUEST, GETONE_EMAILGEN_SUCCESS, GET_EMAILGEN_FAILED, GET_EMAILGEN_REQUEST, GET_EMAILGEN_SUCCESS } from "../../constant/backend/emailGenConstant";

export const addEmailReducer = (state={},action) => {
    switch(action.type){
        case ADD_EMAILGEN_REQUEST:
            return {loading:true}
        case ADD_EMAILGEN_SUCCESS:
            return {loading:false, success:true}
        case ADD_EMAILGEN_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getEmailReducer = (state={emails:[]},action) => {
    switch(action.type){
        case GET_EMAILGEN_REQUEST:
            return {loading:true}
        case GET_EMAILGEN_SUCCESS:
            return {loading:false, success:true, emails:action.payload}
        case GET_EMAILGEN_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneEmailReducer = (state={email:[]},action) => {
    switch(action.type){
        case GETONE_EMAILGEN_REQUEST:
            return {loading:true}
        case GETONE_EMAILGEN_SUCCESS:
            return {loading:false, success:true, email:action.payload}
        case GETONE_EMAILGEN_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteEmailReducer = (state={},action) => {
    switch(action.type){
        case DELETE_EMAILGEN_REQUEST:
            return {loading:true}
        case DELETE_EMAILGEN_SUCCESS:
            return {loading:false, success:true}
        case DELETE_EMAILGEN_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
