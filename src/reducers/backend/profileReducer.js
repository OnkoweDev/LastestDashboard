import { UPDATE_PROFILE_FAILED, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "../../constant/backend/profileConstant";

export const updateProfileReducer = (state={profileInfo:[]},action) => {
    switch(action.type){
        case UPDATE_PROFILE_REQUEST:
            return {loading:true}
        case UPDATE_PROFILE_SUCCESS:
            return {loading:false, profileInfo:action.payload,success:true}
        case UPDATE_PROFILE_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }   
}

