// reducers/backend/audioReducer.js

import { ADD_AUDIO_FAILURE, ADD_AUDIO_REQUEST, ADD_AUDIO_SUCCESS, GET_TRANSCRIBED_AUDIO_FAILURE, GET_TRANSCRIBED_AUDIO_REQUEST, GET_TRANSCRIBED_AUDIO_SUCCESS } from "../../actions/ai/audioAction";


  
  const initialState = {
    loading: false,
    error: null,
    success: null,
    transcribedAudio: null,
  };
  
  const audioReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_AUDIO_REQUEST:
      case GET_TRANSCRIBED_AUDIO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          success: null,
        };
  
      case ADD_AUDIO_SUCCESS:
        return {
          ...state,
          loading: false,
          success: action.payload,
        };
  
      case GET_TRANSCRIBED_AUDIO_SUCCESS:
        return {
          ...state,
          loading: false,
          transcribedAudio: action.payload,
        };
  
      case ADD_AUDIO_FAILURE:
      case GET_TRANSCRIBED_AUDIO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default audioReducer;
  