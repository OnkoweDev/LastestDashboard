import { ADD_LINKEDIN_FAILED, ADD_LINKEDIN_REQUEST, ADD_LINKEDIN_SUCCESS } from "../../constant/ai/SocialMediaConstant";

export const  linkedinReducer = (state={links:[]},action)=> {
    switch (action.type) {
        case ADD_LINKEDIN_REQUEST:
            return {laoding:true}
        case ADD_LINKEDIN_SUCCESS:
            return {loading:false,success:false, links:action.payload}
        case ADD_LINKEDIN_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}

