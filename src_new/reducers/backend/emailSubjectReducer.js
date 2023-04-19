import { ADD_EMAILSUBJECT_FAILED, ADD_EMAILSUBJECT_REQUEST, ADD_EMAILSUBJECT_SUCCESS, DELETE_EMAILSUBJECT_FAILED, DELETE_EMAILSUBJECT_REQUEST, DELETE_EMAILSUBJECT_SUCCESS, GETONE_EMAILSUBJECT_FAILED, GETONE_EMAILSUBJECT_REQUEST, GETONE_EMAILSUBJECT_SUCCESS, GET_EMAILSUBJECT_FAILED, GET_EMAILSUBJECT_REQUEST, GET_EMAILSUBJECT_SUCCESS } from "../../constant/backend/emailSubjectConstant";


export const addSubjectReducer = (state={},action) => {
    switch(action.type){
        case ADD_EMAILSUBJECT_REQUEST:
            return {loading:true}
        case ADD_EMAILSUBJECT_SUCCESS:
            return {loading:false, success:true}
        case ADD_EMAILSUBJECT_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getSubjectReducer = (state={subjects:[]},action) => {
    switch(action.type){
        case GET_EMAILSUBJECT_REQUEST:
            return {loading:true}
        case GET_EMAILSUBJECT_SUCCESS:
            return {loading:false, success:true, subjects:action.payload}
        case GET_EMAILSUBJECT_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneSubjectReducer = (state={subject:[]},action) => {
    switch(action.type){
        case GETONE_EMAILSUBJECT_REQUEST:
            return {loading:true}
        case GETONE_EMAILSUBJECT_SUCCESS:
            return {loading:false, success:true, subject:action.payload}
        case GETONE_EMAILSUBJECT_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteSubjectReducer = (state={},action) => {
    switch(action.type){
        case DELETE_EMAILSUBJECT_REQUEST:
            return {loading:true}
        case DELETE_EMAILSUBJECT_SUCCESS:
            return {loading:false, success:true}
        case DELETE_EMAILSUBJECT_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
