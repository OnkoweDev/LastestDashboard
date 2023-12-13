import { ADD_ARTICLEREWRITER_FAILED, ADD_ARTICLEREWRITER_REQUEST, ADD_ARTICLEREWRITER_SUCCESS } from "../../constant/ai/articleRewriterConstant";

export const articleRewriterReducer = (state={rewriters:[]},action) => {
    switch (action.type) {
        case ADD_ARTICLEREWRITER_REQUEST:
            return {loading:true}
        case ADD_ARTICLEREWRITER_SUCCESS:
            return {loading:false, success:true,rewriters:action.payload}
        case ADD_ARTICLEREWRITER_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}