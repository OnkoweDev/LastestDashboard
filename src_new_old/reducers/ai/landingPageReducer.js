import { ADD_LANDINGPAGE_FAILED, ADD_LANDINGPAGE_REQUEST, ADD_LANDINGPAGE_SUCCESS } from "../../constant/ai/landingPageConstant";

export const landingPageReducer = (state={pages:[]},action) => {
    switch (action.type) {
        case ADD_LANDINGPAGE_REQUEST:
            return {loading:true}
        case ADD_LANDINGPAGE_SUCCESS:
            return {loading:false, success:true, pages:action.payload}
        case ADD_LANDINGPAGE_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}