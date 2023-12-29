import { ADD_YOUTUBE_FAILED, ADD_YOUTUBE_REQUEST, ADD_YOUTUBE_SUCCESS, DELETE_YOUTUBE_FAILED, DELETE_YOUTUBE_REQUEST, DELETE_YOUTUBE_SUCCESS, GETONE_YOUTUBE_FAILED, GETONE_YOUTUBE_REQUEST, GETONE_YOUTUBE_SUCCESS, GET_YOUTUBE_FAILED, GET_YOUTUBE_REQUEST, GET_YOUTUBE_SUCCESS } from "../../constant/backend/youtubeConstant";




export const addYoutubeReducer = (state={},action) => {
    switch(action.type){
        case ADD_YOUTUBE_REQUEST:
            return {loading:true}
        case ADD_YOUTUBE_SUCCESS:
            return {loading:false, success:true}
        case ADD_YOUTUBE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getYoutubeReducer = (state={youtubes:[]},action) => {
    switch(action.type){
        case GET_YOUTUBE_REQUEST:
            return {loading:true,}
        case GET_YOUTUBE_SUCCESS:
            return {loading:false, success:true, youtubes:action.payload}
        case GET_YOUTUBE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneYoutubeReducer = (state={youtube:[]},action) => {
    switch(action.type){
        case GETONE_YOUTUBE_REQUEST:
            return {loading:true}
        case GETONE_YOUTUBE_SUCCESS:
            return {loading:false, success:true, youtube:action.payload}
        case GETONE_YOUTUBE_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteYoutubeReducer = (state={},action) => {
    switch(action.type){
        case DELETE_YOUTUBE_REQUEST:
            return {loading:true}
        case DELETE_YOUTUBE_SUCCESS:
            return {loading:false, success:true}
        case DELETE_YOUTUBE_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
