import axios from "axios";
import { ADD_YOUTUBEDESC_FAILED, ADD_YOUTUBEDESC_REQUEST, ADD_YOUTUBEDESC_SUCCESS, DELETE_YOUTUBEDESC_FAILED, DELETE_YOUTUBEDESC_REQUEST, DELETE_YOUTUBEDESC_SUCCESS, GETONE_YOUTUBEDESC_FAILED, GETONE_YOUTUBEDESC_REQUEST, GETONE_YOUTUBEDESC_SUCCESS, GET_YOUTUBEDESC_FAILED, GET_YOUTUBEDESC_REQUEST, GET_YOUTUBEDESC_SUCCESS } from "../../constant/backend/youtubeDescConstant";



export const addYoutubeDescAction = (description) => async(dispatch,getState) => {
    try {
        //dispatch({type:ADD_YOUTUBEDESC_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/youtubeDescription`, {description},config)
        const data = response.data
        dispatch({type:ADD_YOUTUBEDESC_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_YOUTUBEDESC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getYoutubeDescAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_YOUTUBEDESC_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/youtubeDescription`,config)
        const data = response.data
        dispatch({type:GET_YOUTUBEDESC_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_YOUTUBEDESC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneYoutubeDescAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_YOUTUBEDESC_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/youtubeDescription/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_YOUTUBEDESC_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_YOUTUBEDESC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteYoutubeDescAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_YOUTUBEDESC_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/youtubeDescription/${id}`,config)

        const data = response.data
        
        dispatch({type:DELETE_YOUTUBEDESC_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_YOUTUBEDESC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

