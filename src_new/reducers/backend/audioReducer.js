import { ADD_AUDIO_FAILED, ADD_AUDIO_REQUEST, ADD_AUDIO_SUCCESS, DELETE_AUDIO_FAILED, DELETE_AUDIO_REQUEST, DELETE_AUDIO_SUCCESS, GETONE_AUDIO_FAILED, GETONE_AUDIO_REQUEST, GETONE_AUDIO_SUCCESS, GET_AUDIO_FAILED, GET_AUDIO_REQUEST, GET_AUDIO_SUCCESS } from "../../constant/backend/audioConstant";

export const addAudioReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_AUDIO_REQUEST:
            return {loading:true}
        case ADD_AUDIO_SUCCESS:
            return {loading:false, success:true}
        case ADD_AUDIO_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getAudioReducer = (state={audios:[]}, action) => {
    switch (action.type) {
        case GET_AUDIO_REQUEST:
            return {loading:true}
        case GET_AUDIO_SUCCESS:
            return {loading:false, success:true, audios:action.payload}
        case GET_AUDIO_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getOneAudioReducer = (state={audio:[]}, action) => {
    switch (action.type) {
        case GETONE_AUDIO_REQUEST:
            return {loading:true}
        case GETONE_AUDIO_SUCCESS:
            return {loading:false, success:true, audio:action.payload}
        case GETONE_AUDIO_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const deleteAudioReducer = (state={}, action) => {
    switch (action.type) {
        case DELETE_AUDIO_REQUEST:
            return {loading:true}
        case DELETE_AUDIO_SUCCESS:
            return {loading:false, success:true}
        case DELETE_AUDIO_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}
