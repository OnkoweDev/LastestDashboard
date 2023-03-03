import { ADD_BLOGINTRO_FAILED, ADD_BLOGINTRO_REQUEST, ADD_BLOGINTRO_SUCCESS, GET_BLOGINTRO_FAILED, GET_BLOGINTRO_REQUEST, GET_BLOGINTRO_SUCCESS } from "../../constant/ai/blogIntroConstant";

export const addBlogIntroReducer = (state={newBlogs:[]},action) => {
    switch (action.type) {
        case ADD_BLOGINTRO_REQUEST:
            return {loading:true}
        case ADD_BLOGINTRO_SUCCESS:
            return {loading:false, success:true, newBlogs:action.payload}
        case ADD_BLOGINTRO_FAILED:
            return {loading:false, success:false, error:action.payload}
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
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}

