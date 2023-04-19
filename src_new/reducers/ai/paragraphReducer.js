import { ADD_PARAGRAPH_FAILED, ADD_PARAGRAPH_REQUEST, ADD_PARAGRAPH_SUCCESS } from "../../constant/ai/paragraphWriterConstant";

export const paragraphWriterReducer = (state={paragraphs:[]},action) => {
    switch (action.type) {
        case ADD_PARAGRAPH_REQUEST:
            return {loading:true}
        case ADD_PARAGRAPH_SUCCESS:
            return {loading:false, success:true,paragraphs:action.payload}
        case ADD_PARAGRAPH_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}