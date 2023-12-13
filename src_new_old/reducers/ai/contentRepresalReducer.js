import { ADD_CONTENTREPRESAL_FAILED, ADD_CONTENTREPRESAL_REQUEST, ADD_CONTENTREPRESAL_SUCCESS } from "../../constant/ai/contentRepresalConstant";

export const contentRephesalReducer = (state={rephesals:[]},action) => {
    switch (action.type) {
        case ADD_CONTENTREPRESAL_REQUEST:
            return {loading:true}
        case ADD_CONTENTREPRESAL_SUCCESS:
            return {loading:false, success:true,rephesals:action.payload}
        case ADD_CONTENTREPRESAL_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}