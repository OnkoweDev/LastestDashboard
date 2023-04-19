import axios from "axios";
import { ADD_LINKDLN_FAILED, ADD_LINKDLN_REQUEST, ADD_LINKDLN_SUCCESS, DELETE_LINKDLN_FAILED, DELETE_LINKDLN_REQUEST, DELETE_LINKDLN_SUCCESS, GETONE_LINKDLN_FAILED, GETONE_LINKDLN_REQUEST, GETONE_LINKDLN_SUCCESS, GET_LINKDLN_FAILED, GET_LINKDLN_REQUEST, GET_LINKDLN_SUCCESS } from "../../constant/backend/linkdlenPostConstant";


export const addLinkAction = (post,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_LINKDLN_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/linkedinPost`, {post,project_id},config)
        dispatch({type:ADD_LINKDLN_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_LINKDLN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getLinkAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_LINKDLN_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/linkedinPost`,config)
        dispatch({type:GET_LINKDLN_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_LINKDLN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneLinkAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_LINKDLN_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/linkedinPost/${id}`,config)
        dispatch({type:GETONE_LINKDLN_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_LINKDLN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteLinkAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_LINKDLN_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/linkedinPost/${id}`,config)
        dispatch({type:DELETE_LINKDLN_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_LINKDLN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}