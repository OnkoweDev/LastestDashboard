import axios from "axios";
import { ADD_AUDIO_FAILED, ADD_AUDIO_REQUEST, ADD_AUDIO_SUCCESS, DELETE_AUDIO_FAILED, DELETE_AUDIO_REQUEST, DELETE_AUDIO_SUCCESS, GETONE_AUDIO_FAILED, GETONE_AUDIO_REQUEST, GETONE_AUDIO_SUCCESS, GET_AUDIO_FAILED, GET_AUDIO_REQUEST, GET_AUDIO_SUCCESS } from "../../constant/backend/audioConstant";

export const addAudioAction = (generated_transcription,project_id,uploaded_url) => async(dispatch,getState) => {
    try {
       // dispatch({type:ADD_AUDIO_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/audioTranscription`, {generated_transcription,project_id,uploaded_url},config)
        dispatch({type:ADD_AUDIO_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_AUDIO_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getAudioAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_AUDIO_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/audioTranscription`,config)
        dispatch({type:GET_AUDIO_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_AUDIO_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneAudioAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_AUDIO_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/audioTranscription/${id}`,config)
        dispatch({type:GETONE_AUDIO_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_AUDIO_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteAudioAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_AUDIO_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/audioTranscription/${id}`,config)
        dispatch({type:DELETE_AUDIO_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_AUDIO_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}