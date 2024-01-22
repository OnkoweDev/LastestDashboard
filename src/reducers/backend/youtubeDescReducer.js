import { ADD_YOUTUBEDESC_FAILED, ADD_YOUTUBEDESC_REQUEST, ADD_YOUTUBEDESC_SUCCESS, DELETE_YOUTUBEDESC_FAILED, DELETE_YOUTUBEDESC_REQUEST, DELETE_YOUTUBEDESC_SUCCESS, GETONE_YOUTUBEDESC_FAILED, GETONE_YOUTUBEDESC_REQUEST, GETONE_YOUTUBEDESC_SUCCESS, GET_YOUTUBEDESC_FAILED, GET_YOUTUBEDESC_REQUEST, GET_YOUTUBEDESC_SUCCESS } from "../../constant/backend/youtubeDescConstant";



export const addYoutubeDescReducer = (state={},action) => {
    switch(action.type){
        case ADD_YOUTUBEDESC_REQUEST:
            return {loading:true}
        case ADD_YOUTUBEDESC_SUCCESS:
            return {loading:false, success:true}
        case ADD_YOUTUBEDESC_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getYoutubeDescReducer = (state={youtubesDescs:[]},action) => {
    switch(action.type){
        case GET_YOUTUBEDESC_REQUEST:
            return {loading:true,}
        case GET_YOUTUBEDESC_SUCCESS:
            return {loading:false, success:true, youtubesDescs:action.payload}
        case GET_YOUTUBEDESC_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneYoutubeDescReducer = (state={youtubeDesc:[]},action) => {
    switch(action.type){
        case GETONE_YOUTUBEDESC_REQUEST:
            return {loading:true}
        case GETONE_YOUTUBEDESC_SUCCESS:
            return {loading:false, success:true, youtubeDesc:action.payload}
        case GETONE_YOUTUBEDESC_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteYoutubeDescReducer = (state={},action) => {
    switch(action.type){
        case DELETE_YOUTUBEDESC_REQUEST:
            return {loading:true}
        case DELETE_YOUTUBEDESC_SUCCESS:
            return {loading:false, success:true}
        case DELETE_YOUTUBEDESC_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
