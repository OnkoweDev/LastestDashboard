import { ADD_IMAGE_FAILED, ADD_IMAGE_REQUEST, ADD_IMAGE_SUCCESS, DELETE_IMAGE_FAILED, DELETE_IMAGE_REQUEST, DELETE_IMAGE_SUCCESS, GETONE_IMAGE_FAILED, GETONE_IMAGE_REQUEST, GETONE_IMAGE_SUCCESS, GET_IMAGE_FAILED, GET_IMAGE_REQUEST, GET_IMAGE_SUCCESS } from "../../constant/backend/imageConstant";

export const addImageReducer = (state={},action) => {
    switch(action.type){
        case ADD_IMAGE_REQUEST:
            return {loading:true}
        case ADD_IMAGE_SUCCESS:
            return {loading:false, success:true}
        case ADD_IMAGE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getImageReducer = (state={images:[]},action) => {
    switch(action.type){
        case GET_IMAGE_REQUEST:
            return {loading:true}
        case GET_IMAGE_SUCCESS:
            return {loading:false, success:true, images:action.payload}
        case GET_IMAGE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneImageReducer = (state={image:[]},action) => {
    switch(action.type){
        case GETONE_IMAGE_REQUEST:
            return {loading:true}
        case GETONE_IMAGE_SUCCESS:
            return {loading:false, success:true, image:action.payload}
        case GETONE_IMAGE_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteImageReducer = (state={},action) => {
    switch(action.type){
        case DELETE_IMAGE_REQUEST:
            return {loading:true}
        case DELETE_IMAGE_SUCCESS:
            return {loading:false, success:true}
        case DELETE_IMAGE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
