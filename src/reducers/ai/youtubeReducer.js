import { ADD_YOUTUBE_FAILED, ADD_YOUTUBE_REQUEST, ADD_YOUTUBE_SUCCESS } from "../../constant/ai/youtubeConstant";

export const youtubeReducer = (state={youtubes:[]},action) =>{
    switch (action.type) {
        case ADD_YOUTUBE_REQUEST:
            return {loading:true}
        case ADD_YOUTUBE_SUCCESS:
            return {loading:false, success:true, youtubes:action.payload}
        case ADD_YOUTUBE_FAILED:
            return {laoding:false, suuccess:true, error:action.payload}
        default:
            return state;
    }
}