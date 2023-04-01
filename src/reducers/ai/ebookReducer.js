import { ADD_EBOOK_FAILED, ADD_EBOOK_REQUEST, ADD_EBOOK_SUCCESS } from "../../constant/ai/ebookConstant";

export const ebookReducer = (state={ebooks:[]}, action) => {
    switch (action.type) {
        case ADD_EBOOK_REQUEST:
            return {loading:true}
        case ADD_EBOOK_SUCCESS:
            return {loading:false, success:true, ebooks:action.payload}
        case ADD_EBOOK_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}