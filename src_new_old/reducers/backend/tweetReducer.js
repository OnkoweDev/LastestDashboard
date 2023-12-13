import { ADD_TWEETGEN_FAILED, ADD_TWEETGEN_REQUEST, ADD_TWEETGEN_SUCCESS, DELETE_TWEETGEN_FAILED, DELETE_TWEETGEN_REQUEST, DELETE_TWEETGEN_SUCCESS, GETONE_TWEETGEN_FAILED, GETONE_TWEETGEN_REQUEST, GETONE_TWEETGEN_SUCCESS, GET_TWEETGEN_FAILED, GET_TWEETGEN_REQUEST, GET_TWEETGEN_SUCCESS } from "../../constant/backend/tweetConstant";



export const addTweetReducer = (state={},action) => {
    switch(action.type){
        case ADD_TWEETGEN_REQUEST:
            return {loading:true}
        case ADD_TWEETGEN_SUCCESS:
            return {loading:false, success:true}
        case ADD_TWEETGEN_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getTweetReducer = (state={tweeters:[]},action) => {
    switch(action.type){
        case GET_TWEETGEN_REQUEST:
            return {loading:true}
        case GET_TWEETGEN_SUCCESS:
            return {loading:false, success:true, tweeters:action.payload}
        case GET_TWEETGEN_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneTweetReducer = (state={tweeter:[]},action) => {
    switch(action.type){
        case GETONE_TWEETGEN_REQUEST:
            return {loading:true}
        case GETONE_TWEETGEN_SUCCESS:
            return {loading:false, success:true, tweeter:action.payload}
        case GETONE_TWEETGEN_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteTweetReducer = (state={},action) => {
    switch(action.type){
        case DELETE_TWEETGEN_REQUEST:
            return {loading:true}
        case DELETE_TWEETGEN_SUCCESS:
            return {loading:false, success:true}
        case DELETE_TWEETGEN_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
