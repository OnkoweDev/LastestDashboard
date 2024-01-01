import { GET_USERS_PROFILE_FAILED, GET_USERS_PROFILE_REQUEST, GET_USERS_PROFILE_SUCCESS, GOOGLE_USER_FAILED, GOOGLE_USER_REQUEST, GOOGLE_USER_SUCCESS, USERS_LOGIN_FAILED, USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGOUT, USERS_PROFILE_FAILED, USERS_PROFILE_REQUEST, USERS_PROFILE_SUCCESS, USERS_REGISTER_FAILED, USERS_REGISTER_REQUEST, USERS_REGISTER_SUCCESS} from "../constant/userConstant";

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
            return {loading:false, profileInfo:action.payload}
        case USERS_REGISTER_FAILED:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const userProfileReducer = (state={},action) => {
    switch (action.type) {
        case USERS_PROFILE_REQUEST:
            return {loading:true}
        case USERS_PROFILE_SUCCESS:
            return {loading:false, userInfo:action.payload,success:true}
        case USERS_PROFILE_FAILED:
            return {loading:false,error:action.payload, success:false}
        default:
            return state;
    }
}

export const getUserProfileReducer = (state={profiles:[]}, action) => {
    switch (action.type) {
        case GET_USERS_PROFILE_REQUEST:
            return {loading:true}
        case GET_USERS_PROFILE_SUCCESS:
            return {loading:false, success:true, profiles:action.payload}
        case GET_USERS_PROFILE_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const googleUserReducer = (state={}, action) => {
    switch (action.type) {
        case GOOGLE_USER_REQUEST:
            return {loading: true}
        case GOOGLE_USER_SUCCESS:
            return {loading: false, success:true,userInfo:action.payload}
        case GOOGLE_USER_FAILED:
            return {loading: false,success:false, error:action.payload}
        default:
           return state;
    }
}

