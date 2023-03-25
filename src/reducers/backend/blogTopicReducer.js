import { ADD_BLOGTOPIC_FAILED, ADD_BLOGTOPIC_REQUEST, ADD_BLOGTOPIC_SUCCESS, DELETE_BLOGTOPIC_FAILED, DELETE_BLOGTOPIC_REQUEST, DELETE_BLOGTOPIC_SUCCESS, GETONE_BLOGTOPIC_FAILED, GETONE_BLOGTOPIC_REQUEST, GETONE_BLOGTOPIC_SUCCESS, GET_BLOGTOPIC_FAILED, GET_BLOGTOPIC_REQUEST, GET_BLOGTOPIC_SUCCESS } from "../../constant/backend/blogTopicConstant";

export const saveBlogTopicReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_BLOGTOPIC_REQUEST:
            return {loading:true}
        case ADD_BLOGTOPIC_SUCCESS:
            return {loading:false, success:true}
        case ADD_BLOGTOPIC_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getBlogTopicReducer = (state={topics:[]}, action) => {
    switch (action.type) {
        case GET_BLOGTOPIC_REQUEST:
            return {loading:true}
        case GET_BLOGTOPIC_SUCCESS:
            return {loading:false, success:true, topics:action.payload}
        case GET_BLOGTOPIC_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getOneBlogTopicReducer = (state={topic:[]}, action) => {
    switch (action.type) {
        case GETONE_BLOGTOPIC_REQUEST:
            return {loading:true}
        case GETONE_BLOGTOPIC_SUCCESS:
            return {loading:false, success:true, topic:action.payload}
        case GETONE_BLOGTOPIC_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const deleteBlogTopicReducer = (state={}, action) => {
    switch (action.type) {
        case DELETE_BLOGTOPIC_REQUEST:
            return {loading:true}
        case DELETE_BLOGTOPIC_SUCCESS:
            return {loading:false, success:true}
        case DELETE_BLOGTOPIC_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}
