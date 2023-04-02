import { ADD_LINKDINADS_FAILED, ADD_LINKDINADS_REQUEST, ADD_LINKDINADS_SUCCESS, DELETE_LINKDINADS_FAILED, DELETE_LINKDINADS_REQUEST, DELETE_LINKDINADS_SUCCESS, GETONE_LINKDINADS_FAILED, GETONE_LINKDINADS_REQUEST, GETONE_LINKDINADS_SUCCESS, GET_LINKDINADS_FAILED, GET_LINKDINADS_REQUEST, GET_LINKDINADS_SUCCESS } from "../../constant/backend/linkdinAdsConstant";




export const addLinkAdsReducer = (state={},action) => {
    switch(action.type){
        case ADD_LINKDINADS_REQUEST:
            return {loading:true}
        case ADD_LINKDINADS_SUCCESS:
            return {loading:false, success:true}
        case ADD_LINKDINADS_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getLinkAdsReducer = (state={links:[]},action) => {
    switch(action.type){
        case GET_LINKDINADS_REQUEST:
            return {loading:true}
        case GET_LINKDINADS_SUCCESS:
            return {loading:false, success:true, links:action.payload}
        case GET_LINKDINADS_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneLinkAdsReducer = (state={link:[]},action) => {
    switch(action.type){
        case GETONE_LINKDINADS_REQUEST:
            return {loading:true}
        case GETONE_LINKDINADS_SUCCESS:
            return {loading:false, success:true, link:action.payload}
        case GETONE_LINKDINADS_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteLinkAdsReducer = (state={},action) => {
    switch(action.type){
        case DELETE_LINKDINADS_REQUEST:
            return {loading:true}
        case DELETE_LINKDINADS_SUCCESS:
            return {loading:false, success:true}
        case DELETE_LINKDINADS_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
