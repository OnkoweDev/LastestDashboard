import axios from "axios";
import { ADD_LINKDLN_FAILED, ADD_LINKDLN_REQUEST, ADD_LINKDLN_SUCCESS, DELETE_LINKDLN_FAILED, DELETE_LINKDLN_REQUEST, DELETE_LINKDLN_SUCCESS, GETONE_LINKDLN_FAILED, GETONE_LINKDLN_REQUEST, GETONE_LINKDLN_SUCCESS, GET_LINKDLN_FAILED, GET_LINKDLN_REQUEST, GET_LINKDLN_SUCCESS } from "../../constant/backend/linkdlenPostConstant";


export const addLinkAction = (post,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_LINKDLN_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/linkedinPost`, {post,project_id},config)
        const data = response.data
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/linkedinPost`,config)
        const data = response.data
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/linkedinPost/${id}`,config)
        const data = response.data
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/linkedinPost/${id}`,config)
        const data = response.data
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