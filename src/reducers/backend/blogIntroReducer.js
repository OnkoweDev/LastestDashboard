import { ADD_BLOGINTRO_FAILED, ADD_BLOGINTRO_REQUEST, ADD_BLOGINTRO_SUCCESS, DELETE_BLOGINTRO_FAILED, DELETE_BLOGINTRO_REQUEST, DELETE_BLOGINTRO_SUCCESS, GETONE_BLOGINTRO_FAILED, GETONE_BLOGINTRO_REQUEST, GETONE_BLOGINTRO_SUCCESS, GET_BLOGINTRO_FAILED, GET_BLOGINTRO_REQUEST, GET_BLOGINTRO_SUCCESS, UPDATE_BLOGINTRO_FAILED, UPDATE_BLOGINTRO_REQUEST, UPDATE_BLOGINTRO_SUCCESS } from "../../constant/backend/blogIntroConstant";

export const saveBlogIntroReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_BLOGINTRO_REQUEST:
            return {loading:true}
        case ADD_BLOGINTRO_SUCCESS:
            return {loading:false, success:true}
        case ADD_BLOGINTRO_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getBlogIntroReducer = (state={blogs:[]}, action) => {
    switch (action.type) {
        case GET_BLOGINTRO_REQUEST:
            return {loading:true}
        case GET_BLOGINTRO_SUCCESS:
            return {loading:false, success:true, blogs:action.payload}
        case GET_BLOGINTRO_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getOneBlogIntroReducer = (state={blog:[]}, action) => {
    switch (action.type) {
        case GETONE_BLOGINTRO_REQUEST:
            return {loading:true}
        case GETONE_BLOGINTRO_SUCCESS:
            return {loading:false, success:true, blog:action.payload}
        case GETONE_BLOGINTRO_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const deleteBlogIntroReducer = (state={}, action) => {
    switch (action.type) {
        case DELETE_BLOGINTRO_REQUEST:
            return {loading:true}
        case DELETE_BLOGINTRO_SUCCESS:
            return {loading:false, success:true}
        case DELETE_BLOGINTRO_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const updateBlogIntroReducer = (state={}, action) => {
    switch (action.type) {
        case UPDATE_BLOGINTRO_REQUEST:
            return {loading:true}
        case UPDATE_BLOGINTRO_SUCCESS:
            return {loading:false, success:true}
        case UPDATE_BLOGINTRO_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}