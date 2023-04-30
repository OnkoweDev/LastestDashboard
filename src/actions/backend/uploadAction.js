import axios from "axios";
import { ADD_UPLOAD_FAILED, ADD_UPLOAD_REQUEST, ADD_UPLOAD_SUCCESS } from "../../constant/backend/uploadConstant";


export const adduploadAction = (upload) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_UPLOAD_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/upload`, {upload},config)
        dispatch({type:ADD_UPLOAD_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_UPLOAD_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getYoutubeAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_YOUTUBE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/youtubeIntro`,config)
        dispatch({type:GET_YOUTUBE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_YOUTUBE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneYoutubeAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_YOUTUBE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/youtubeIntro/${id}`,config)
        dispatch({type:GETONE_YOUTUBE_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_YOUTUBE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteYoutubeAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_YOUTUBE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/youtubeIntro/${id}`,config)
        dispatch({type:DELETE_YOUTUBE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_YOUTUBE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

