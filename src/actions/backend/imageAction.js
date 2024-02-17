import axios from "axios";
import { ADD_IMAGE_FAILED, ADD_IMAGE_REQUEST, ADD_IMAGE_SUCCESS, DELETE_IMAGE_FAILED, DELETE_IMAGE_REQUEST, DELETE_IMAGE_SUCCESS, GETONE_IMAGE_FAILED, GETONE_IMAGE_REQUEST, GETONE_IMAGE_SUCCESS, GET_IMAGE_FAILED, GET_IMAGE_REQUEST, GET_IMAGE_SUCCESS } from "../../constant/backend/imageConstant";


export const addImageAction = (generated_url,project_id,prompt) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_IMAGE_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/imageGenerator`, {generated_url,prompt,project_id},config)
        const data = response.data
        dispatch({type:ADD_IMAGE_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_IMAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getImageAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_IMAGE_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/imageGenerator`,config)
        const data = response.data

        dispatch({type:GET_IMAGE_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_IMAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneImageAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_IMAGE_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/imageGenerator/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_IMAGE_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_IMAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteImageAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_IMAGE_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/imageGenerator/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_IMAGE_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_IMAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}