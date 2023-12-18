import { CHANGE_PASSWORD_FAILED, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS } from "../../constant/backend/changePassword";

export const changePasswordReducer = (state={}, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_REQUEST:
            return {loading: true}
        case CHANGE_PASSWORD_SUCCESS:
            return {loading:false, success: true}            
        case CHANGE_PASSWORD_FAILED:
            return {loading:false,success:false,error:action.payload}
        default:
            return state;
    }
}