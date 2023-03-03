import { ADD_GOOGLEADSTITLE_FAILED, ADD_GOOGLEADSTITLE_REQUEST, ADD_GOOGLEADSTITLE_SUCCESS } from "../../constant/ai/googleAdsTitleConstant";

export const googletitleReducer = (state={title:[]}, action) => {
    switch (action.type) {
        case ADD_GOOGLEADSTITLE_REQUEST:
            return {loading:true}
        case ADD_GOOGLEADSTITLE_SUCCESS:
            return {loading:false, success:true, title:action.payload}
        case ADD_GOOGLEADSTITLE_FAILED:
            return {laoding:false,success:false, error:action.payload}
        default:
            return state;
    }
}