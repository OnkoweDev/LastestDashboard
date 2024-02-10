// actions/backend/audioAction.js

import axios from "axios";

// Action types
export const ADD_AUDIO_REQUEST = "ADD_AUDIO_REQUEST";
export const ADD_AUDIO_SUCCESS = "ADD_AUDIO_SUCCESS";
export const ADD_AUDIO_FAILURE = "ADD_AUDIO_FAILURE";

export const GET_TRANSCRIBED_AUDIO_REQUEST = "GET_TRANSCRIBED_AUDIO_REQUEST";
export const GET_TRANSCRIBED_AUDIO_SUCCESS = "GET_TRANSCRIBED_AUDIO_SUCCESS";
export const GET_TRANSCRIBED_AUDIO_FAILURE = "GET_TRANSCRIBED_AUDIO_FAILURE";

// Action creators
export const addNewAudioAction = (transcribedData) => async (dispatch) => {
  dispatch({ type: ADD_AUDIO_REQUEST });

  try {
    // Make an API call to save the transcribed audio
    const response = await axios.post("https://api.olukowe.co/audio-transcription/", { transcribedData });

    dispatch({
      type: ADD_AUDIO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_AUDIO_FAILURE,
      payload: error.message,
    });
  }
};

export const getTranscribedAudioAction = (audioId) => async (dispatch) => {
  dispatch({ type: GET_TRANSCRIBED_AUDIO_REQUEST });

  try {
    // Make an API call to fetch the transcribed audio based on the audioId
    const response = await axios.get(`https://api.olukowe.co/audio-transcription/${audioId}`);

    dispatch({
      type: GET_TRANSCRIBED_AUDIO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TRANSCRIBED_AUDIO_FAILURE,
      payload: error.message,
    });
  }
};
