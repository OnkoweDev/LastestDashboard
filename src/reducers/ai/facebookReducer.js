import { ADD_FACEBOOK_FAILED, ADD_FACEBOOK_REQUEST, ADD_FACEBOOK_SUCCESS } from "../../constant/ai/facebookConstant";

export const facebookReducer = (state={face:[]}, action)=> {
    switch (action.type) {
        case ADD_FACEBOOK_REQUEST:
            return {loading:true}
        case ADD_FACEBOOK_SUCCESS:
            return {loading:false, success:true, face:action.payload}
        case ADD_FACEBOOK_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}