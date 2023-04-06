import { USERS_LOGIN_FAILED, USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGOUT, USERS_REGISTER_FAILED, USERS_REGISTER_REQUEST, USERS_REGISTER_SUCCESS} from "../constant/userConstant";

export const userLoginReducer = (state={},action) => {
    switch (action.type) {
        case USERS_LOGIN_REQUEST:
            return {loading:true}
        case USERS_LOGIN_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case USERS_LOGIN_FAILED:
            return {loading:false, error:action.payload}
         case USERS_LOGOUT:
                return {}
        default:
            return state;
    }
}

export const userRegisterReducer = (state={},action) => {
    switch (action.type) {
        case USERS_REGISTER_REQUEST:
            return {loading:true}
        case USERS_REGISTER_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case USERS_REGISTER_FAILED:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

