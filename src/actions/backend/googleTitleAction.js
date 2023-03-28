import axios from "axios";
import { ADD_GOOGLETITLE_FAILED, ADD_GOOGLETITLE_REQUEST, ADD_GOOGLETITLE_SUCCESS, DELETE_GOOGLETITLE_FAILED, DELETE_GOOGLETITLE_REQUEST, DELETE_GOOGLETITLE_SUCCESS, GETONE_GOOGLETITLE_FAILED, GETONE_GOOGLETITLE_REQUEST, GETONE_GOOGLETITLE_SUCCESS, GET_GOOGLETITLE_FAILED, GET_GOOGLETITLE_REQUEST, GET_GOOGLETITLE_SUCCESS } from "../../constant/backend/googleTitleConstant";



export const addGoogleTitleAction = (title,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_GOOGLETITLE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/googleAdTitle`, {title,project_id},config)
        dispatch({type:ADD_GOOGLETITLE_SUCCESS,payload:[data.data]})
        console.log(data.data)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/googleAdTitle`,config)
        dispatch({type:GET_GOOGLETITLE_SUCCESS,payload:data.data})
        console.log(data.data)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/googleAdTitle/${id}`,config)
        dispatch({type:GETONE_GOOGLETITLE_SUCCESS,payload:[data.data]})
        console.log(data.data)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/googleAdTitle/${id}`,config)
        dispatch({type:DELETE_GOOGLETITLE_SUCCESS,payload:data.data})
        console.log(data.data)
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

