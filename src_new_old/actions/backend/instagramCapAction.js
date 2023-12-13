import axios from "axios";
import { ADD_INSTAGRAMCAP_FAILED, ADD_INSTAGRAMCAP_REQUEST, ADD_INSTAGRAMCAP_SUCCESS, DELETE_INSTAGRAMCAP_FAILED, DELETE_INSTAGRAMCAP_REQUEST, DELETE_INSTAGRAMCAP_SUCCESS, GETONE_INSTAGRAMCAP_FAILED, GETONE_INSTAGRAMCAP_REQUEST, GETONE_INSTAGRAMCAP_SUCCESS, GET_INSTAGRAMCAP_FAILED, GET_INSTAGRAMCAP_REQUEST, GET_INSTAGRAMCAP_SUCCESS } from "../../constant/backend/instagramConstant";

export const addInstagramCapAction = (instagram_caption,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_INSTAGRAMCAP_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/instagramCaption`, {instagram_caption,project_id},config)
        dispatch({type:ADD_INSTAGRAMCAP_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_INSTAGRAMCAP_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getInstagramAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_INSTAGRAMCAP_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/instagramCaption`,config)
        dispatch({type:GET_INSTAGRAMCAP_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_INSTAGRAMCAP_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneInstagramAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_INSTAGRAMCAP_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/instagramCaption/${id}`,config)
        dispatch({type:GETONE_INSTAGRAMCAP_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_INSTAGRAMCAP_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteInstagramAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_INSTAGRAMCAP_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/instagramCaption/${id}`,config)
        dispatch({type:DELETE_INSTAGRAMCAP_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_INSTAGRAMCAP_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

