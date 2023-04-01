import { ADD_EBOOK_FAILED, ADD_EBOOK_REQUEST, ADD_EBOOK_SUCCESS, DELETE_EBOOK_FAILED, DELETE_EBOOK_REQUEST, DELETE_EBOOK_SUCCESS, GETONE_EBOOK_FAILED, GETONE_EBOOK_REQUEST, GETONE_EBOOK_SUCCESS, GET_EBOOK_FAILED, GET_EBOOK_REQUEST, GET_EBOOK_SUCCESS } from "../../constant/backend/ebookConstant";


export const saveEbookReducer = (state={},action) => {
    switch(action.type){
        case ADD_EBOOK_REQUEST:
            return {loading:true}
        case ADD_EBOOK_SUCCESS:
            return {loading:false, success:true}
        case ADD_EBOOK_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}


export const getEbookReducer = (state={Ebooks:[]},action) => {
    switch(action.type){
        case GET_EBOOK_REQUEST:
            return {loading:true}
        case GET_EBOOK_SUCCESS:
            return {loading:false, success:true, Ebooks:action.payload}
        case GET_EBOOK_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}


export const getOneEbookReducer = (state={Ebook:[]},action) => {
    switch(action.type){
        case GETONE_EBOOK_REQUEST:
            return {loading:true}
        case GETONE_EBOOK_SUCCESS:
            return {loading:false, success:true, Ebook:action.payload}
        case GETONE_EBOOK_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteEbookReducer = (state={},action) => {
    switch(action.type){
        case DELETE_EBOOK_REQUEST:
            return {loading:true}
        case DELETE_EBOOK_SUCCESS:
            return {loading:false, success:true}
        case DELETE_EBOOK_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}