import { ADD_ARTICLEBLOG_FAILED, ADD_ARTICLEBLOG_REQUEST, ADD_ARTICLEBLOG_SUCCESS } from "../../constant/ai/articleBlogConstant";

export const articleBlogReducer = (state={conclusions:[]},action) => {
    switch (action.type) {
        case ADD_ARTICLEBLOG_REQUEST:
            return {loading:true}
        case ADD_ARTICLEBLOG_SUCCESS:
            return {loading:false, success:true,conclusions:action.payload}
        case ADD_ARTICLEBLOG_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}