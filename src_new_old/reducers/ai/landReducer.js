import { ADD_LAND_FAILED, ADD_LAND_REQUEST, ADD_LAND_SUCCESS } from "../../constant/ai/landConstant";

export const landingReducer = (state={lands:{}}, action) => {
    switch (action) {
        case ADD_LAND_REQUEST:
            return {loading:true}
        case ADD_LAND_SUCCESS:
            return {loading:false, success:true, lands:action.payload}
        case ADD_LAND_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}