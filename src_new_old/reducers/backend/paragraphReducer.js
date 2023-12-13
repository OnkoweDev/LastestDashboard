import { ADD_PARAGRAPH_FAILED, ADD_PARAGRAPH_REQUEST, ADD_PARAGRAPH_SUCCESS, DELETE_PARAGRAPH_FAILED, DELETE_PARAGRAPH_REQUEST, DELETE_PARAGRAPH_SUCCESS, GETONE_PARAGRAPH_FAILED, GETONE_PARAGRAPH_REQUEST, GETONE_PARAGRAPH_SUCCESS, GET_PARAGRAPH_FAILED, GET_PARAGRAPH_REQUEST, GET_PARAGRAPH_SUCCESS } from "../../constant/backend/paragraghConstant";


export const addParagraphReducer = (state={},action) => {
    switch(action.type){
        case ADD_PARAGRAPH_REQUEST:
            return {loading:true}
        case ADD_PARAGRAPH_SUCCESS:
            return {loading:false, success:true}
        case ADD_PARAGRAPH_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getParagraphReducer = (state={paragraphs:[]},action) => {
    switch(action.type){
        case GET_PARAGRAPH_REQUEST:
            return {loading:true}
        case GET_PARAGRAPH_SUCCESS:
            return {loading:false, success:true, paragraphs:action.payload}
        case GET_PARAGRAPH_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneParagraphReducer = (state={paragraph:[]},action) => {
    switch(action.type){
        case GETONE_PARAGRAPH_REQUEST:
            return {loading:true}
        case GETONE_PARAGRAPH_SUCCESS:
            return {loading:false, success:true, paragraph:action.payload}
        case GETONE_PARAGRAPH_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteParagraphReducer = (state={},action) => {
    switch(action.type){
        case DELETE_PARAGRAPH_REQUEST:
            return {loading:true}
        case DELETE_PARAGRAPH_SUCCESS:
            return {loading:false, success:true}
        case DELETE_PARAGRAPH_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
