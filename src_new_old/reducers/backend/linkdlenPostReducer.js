import { ADD_LINKDLN_FAILED, ADD_LINKDLN_REQUEST, ADD_LINKDLN_SUCCESS, DELETE_LINKDLN_FAILED, DELETE_LINKDLN_REQUEST, DELETE_LINKDLN_SUCCESS, GETONE_LINKDLN_FAILED, GETONE_LINKDLN_REQUEST, GETONE_LINKDLN_SUCCESS, GET_LINKDLN_FAILED, GET_LINKDLN_REQUEST, GET_LINKDLN_SUCCESS } from "../../constant/backend/linkdlenPostConstant";



export const addLinkReducer = (state={},action) => {
    switch(action.type){
        case ADD_LINKDLN_REQUEST:
            return {loading:true}
        case ADD_LINKDLN_SUCCESS:
            return {loading:false, success:true}
        case ADD_LINKDLN_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getLinkReducer = (state={links:[]},action) => {
    switch(action.type){
        case GET_LINKDLN_REQUEST:
            return {loading:true}
        case GET_LINKDLN_SUCCESS:
            return {loading:false, success:true, links:action.payload}
        case GET_LINKDLN_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneLinkReducer = (state={link:[]},action) => {
    switch(action.type){
        case GETONE_LINKDLN_REQUEST:
            return {loading:true}
        case GETONE_LINKDLN_SUCCESS:
            return {loading:false, success:true, link:action.payload}
        case GETONE_LINKDLN_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteLinkReducer = (state={},action) => {
    switch(action.type){
        case DELETE_LINKDLN_REQUEST:
            return {loading:true}
        case DELETE_LINKDLN_SUCCESS:
            return {loading:false, success:true}
        case DELETE_LINKDLN_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
