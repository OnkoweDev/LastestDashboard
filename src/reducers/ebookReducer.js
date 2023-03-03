import { ADD_EBOOK_FAILED, ADD_EBOOK_REQUEST, ADD_EBOOK_SUCCESS, VIEW_EBOOK_FAILED, VIEW_EBOOK_REQUEST, VIEW_EBOOK_SUCCESS } from "../constant/ebookConstant";

export const addEbookReducer = (state={},action) => {
    switch (action.type) {
        case ADD_EBOOK_REQUEST:
            return {loading:true}
        case ADD_EBOOK_SUCCESS:
            return {loading:false, success:true}
        case ADD_EBOOK_FAILED:
            return {loading:false,success:false,error:action.payload}
        default:
            return state;
    }
}

export const viewEbookReucer = (state={ebooks:[]},action) => {
    switch (action.type) {
        case VIEW_EBOOK_REQUEST:
            return {loading:true}
        case VIEW_EBOOK_SUCCESS:
            return {loading:false,success:true, ebooks:action.payload}
        case VIEW_EBOOK_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }
}