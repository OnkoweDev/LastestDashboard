import { ADD_TWITTER_FAILED, ADD_TWITTER_REQUEST, ADD_TWITTER_SUCCESS } from "../../constant/ai/twitterConstant";

export const  twitterReducer = (state={tweets:[]},action)=> {
    switch (action.type) {
        case ADD_TWITTER_REQUEST:
            return {loading:true}
        case ADD_TWITTER_SUCCESS:
            return {loading:false,success:false, tweets:action.payload}
        case ADD_TWITTER_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}