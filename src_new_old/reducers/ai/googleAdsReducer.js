import { ADD_GOOGLEADS_FAILED, ADD_GOOGLEADS_REQUEST, ADD_GOOGLEADS_SUCCESS } from "../../constant/ai/googleAdsConstant";

export const googleadsReducer = (state={google:[]}, action) => {
    switch (action.type) {
        case ADD_GOOGLEADS_REQUEST:
            return {loading:true}
        case ADD_GOOGLEADS_SUCCESS:
            return {loading:false, success:true, google:action.payload}
        case ADD_GOOGLEADS_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}