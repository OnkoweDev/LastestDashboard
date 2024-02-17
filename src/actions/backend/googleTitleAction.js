import axios from "axios";
import { ADD_GOOGLETITLE_FAILED, ADD_GOOGLETITLE_REQUEST, ADD_GOOGLETITLE_SUCCESS, DELETE_GOOGLETITLE_FAILED, DELETE_GOOGLETITLE_REQUEST, DELETE_GOOGLETITLE_SUCCESS, GETONE_GOOGLETITLE_FAILED, GETONE_GOOGLETITLE_REQUEST, GETONE_GOOGLETITLE_SUCCESS, GET_GOOGLETITLE_FAILED, GET_GOOGLETITLE_REQUEST, GET_GOOGLETITLE_SUCCESS } from "../../constant/backend/googleTitleConstant";



export const addGoogleTitleAction = (title,project_id) => async(dispatch,getState) => {
    try {
       // dispatch({type:ADD_GOOGLETITLE_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/googleAdTitle`, {title,project_id},config)
        const data = response.data
        dispatch({type:ADD_GOOGLETITLE_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_GOOGLETITLE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getGoogleTitleAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_GOOGLETITLE_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/googleAdTitle`,config)
        const data = response.data

        dispatch({type:GET_GOOGLETITLE_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_GOOGLETITLE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneGoogleTilteAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_GOOGLETITLE_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/googleAdTitle/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_GOOGLETITLE_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_GOOGLETITLE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteGoogleTitleAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_GOOGLETITLE_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/googleAdTitle/${id}`,config)

        const data = response.data
        
        dispatch({type:DELETE_GOOGLETITLE_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_GOOGLETITLE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

