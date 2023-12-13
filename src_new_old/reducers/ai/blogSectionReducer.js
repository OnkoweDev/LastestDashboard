import { ADD_BLOGSECTION_FAILED, ADD_BLOGSECTION_REQUEST, ADD_BLOGSECTION_SUCCESS } from "../../constant/ai/blogSectionConstant";

export const blogSectionReducer = (state={blogsSec:[]}, action) => {
    switch (action.type) {
        case ADD_BLOGSECTION_REQUEST:
            return {loading:true}
        case ADD_BLOGSECTION_SUCCESS:
            return {loading:false, success:true, blogsSec:action.payload}
        case ADD_BLOGSECTION_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}