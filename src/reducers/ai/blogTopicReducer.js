import { ADD_BLOGTOPIC_FAILED, ADD_BLOGTOPIC_REQUEST, ADD_BLOGTOPIC_SUCCESS } from "../../constant/ai/blogTopicConstant";

export const blogtopicReducer = (state={topics:[]}, action) => {
    switch (action.type) {
        case ADD_BLOGTOPIC_REQUEST:
            return {loading:true}
        case ADD_BLOGTOPIC_SUCCESS:
            return {loading:false, success:true, topics:action.payload}
        case ADD_BLOGTOPIC_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state
    }
}