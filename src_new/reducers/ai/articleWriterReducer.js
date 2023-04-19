import { ADD_BLOGARTICLEWRITER_FAILED, ADD_BLOGARTICLEWRITER_REQUEST, ADD_BLOGARTICLEWRITER_SUCCESS } from "../../constant/ai/articleWriterConstant";

export const blogArticleWriterReducer = (state={writers:[]},action) => {
    switch (action.type) {
        case ADD_BLOGARTICLEWRITER_REQUEST:
            return {loading:true}
        case ADD_BLOGARTICLEWRITER_SUCCESS:
            return {loading:false, success:true,writers:action.payload}
        case ADD_BLOGARTICLEWRITER_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }
}