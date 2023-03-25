import { ADD_BLOGSECTION_FAILED, ADD_BLOGSECTION_REQUEST, ADD_BLOGSECTION_SUCCESS, DELETE_BLOGSECTION_FAILED, DELETE_BLOGSECTION_REQUEST, DELETE_BLOGSECTION_SUCCESS, GETONE_BLOGSECTION_FAILED, GETONE_BLOGSECTION_REQUEST, GETONE_BLOGSECTION_SUCCESS, GET_BLOGSECTION_FAILED, GET_BLOGSECTION_REQUEST, GET_BLOGSECTION_SUCCESS, UPDATE_BLOGSECTION_FAILED, UPDATE_BLOGSECTION_REQUEST, UPDATE_BLOGSECTION_SUCCESS } from "../../constant/backend/blogSectionConstant";

export const saveBlogSectionReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_BLOGSECTION_REQUEST:
            return {loading:true}
        case ADD_BLOGSECTION_SUCCESS:
            return {loading:false, success:true}
        case ADD_BLOGSECTION_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getBlogSectionReducer = (state={blogs:[]}, action) => {
    switch (action.type) {
        case GET_BLOGSECTION_REQUEST:
            return {loading:true}
        case GET_BLOGSECTION_SUCCESS:
            return {loading:false, success:true, blogs:action.payload}
        case GET_BLOGSECTION_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getOneBlogSectionReducer = (state={blog:[]}, action) => {
    switch (action.type) {
        case GETONE_BLOGSECTION_REQUEST:
            return {loading:true}
        case GETONE_BLOGSECTION_SUCCESS:
            return {loading:false, success:true, blog:action.payload}
        case GETONE_BLOGSECTION_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const deleteBlogSectionReducer = (state={}, action) => {
    switch (action.type) {
        case DELETE_BLOGSECTION_REQUEST:
            return {loading:true}
        case DELETE_BLOGSECTION_SUCCESS:
            return {loading:false, success:true}
        case DELETE_BLOGSECTION_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const updateBlogSectionReducer = (state={}, action) => {
    switch (action.type) {
        case UPDATE_BLOGSECTION_REQUEST:
            return {loading:true}
        case UPDATE_BLOGSECTION_SUCCESS:
            return {loading:false, success:true}
        case UPDATE_BLOGSECTION_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}