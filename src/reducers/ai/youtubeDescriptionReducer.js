import { ADD_YOUTUBEDESC_FAILED, ADD_YOUTUBEDESC_REQUEST, ADD_YOUTUBEDESC_SUCCESS } from "../../constant/ai/youtubeDescriptinConstant";

export const youtubeDescReducer = (state={yous:[]}, action) =>{
    switch (action.type) {
        case ADD_YOUTUBEDESC_REQUEST:
            return {loading:true}
        case ADD_YOUTUBEDESC_SUCCESS:
            return {loading:false, success:true, yous:action.payload}
        case ADD_YOUTUBEDESC_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}