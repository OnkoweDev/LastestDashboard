import { ADD_INSTAGRAM_FAILED, ADD_INSTAGRAM_REQUEST, ADD_INSTAGRAM_SUCCESS } from "../../constant/ai/instagramConstant";

export const instagramReducer = (state={instagrams:[]}, action) => {
    switch (action.type) {
        case ADD_INSTAGRAM_REQUEST:
            return {loading:true}
        case ADD_INSTAGRAM_SUCCESS:
            return {loading:false, success:true,instagrams:action.payload}    
        case ADD_INSTAGRAM_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}