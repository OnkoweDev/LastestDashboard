import axios from "axios";
import { ADD_YOUTUBE_FAILED, ADD_YOUTUBE_REQUEST, ADD_YOUTUBE_SUCCESS, DELETE_YOUTUBE_FAILED, DELETE_YOUTUBE_REQUEST, DELETE_YOUTUBE_SUCCESS, GETONE_YOUTUBE_FAILED, GETONE_YOUTUBE_REQUEST, GETONE_YOUTUBE_SUCCESS, GET_YOUTUBE_FAILED, GET_YOUTUBE_REQUEST, GET_YOUTUBE_SUCCESS } from "../../constant/backend/youtubeConstant";


export const addYoutubeAction = (youtube_intro,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_YOUTUBE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        if (!userInfo || !userInfo.token) {
            throw new Error("Session expired please login again");
        }

        const token = userInfo.token;
        const accountId = userInfo.account_id;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/youtubeIntro`, {youtube_intro,project_id},config)
        const data = response.data
        dispatch({type:ADD_YOUTUBE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_YOUTUBE_FAILED,
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
        if (!userInfo || !userInfo.token) {
            throw new Error("Session expired please login again");
        }

        const token = userInfo.token;
        const accountId = userInfo.account_id;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/youtubeIntro`,config)
        const data = response.data
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
        if (!userInfo || !userInfo.token) {
            throw new Error("Session expired please login again");
        }

        const token = userInfo.token;
        const accountId = userInfo.account_id;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/youtubeIntro/${id}`,config)
        const data = response.data
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
        if (!userInfo || !userInfo.token) {
            throw new Error("Session expired please login again");
        }

        const token = userInfo.token;
        const accountId = userInfo.account_id;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/youtubeIntro/${id}`,config)

        const data = response.data
        
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

