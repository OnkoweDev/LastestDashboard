import { ADD_LINKDLNADS_FAILED, ADD_LINKDLNADS_REQUEST, ADD_LINKDLNADS_SUCCESS } from "../../constant/ai/linkdlnAdsConstant";

export const linkdladsReducer = (state={ads:[]}, action) => {
    switch (action.type) {
        case ADD_LINKDLNADS_REQUEST:
            return {loading:true}
        case ADD_LINKDLNADS_SUCCESS:
            return {loading:false, success:true, ads:action.payload}
        case ADD_LINKDLNADS_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}