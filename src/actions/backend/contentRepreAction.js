import axios from "axios";
import { ADD_CONTENTREPRE_FAILED, ADD_CONTENTREPRE_REQUEST, ADD_CONTENTREPRE_SUCCESS, DELETE_CONTENTREPRE_FAILED, DELETE_CONTENTREPRE_REQUEST, DELETE_CONTENTREPRE_SUCCESS, GETONE_CONTENTREPRE_FAILED, GETONE_CONTENTREPRE_REQUEST, GETONE_CONTENTREPRE_SUCCESS, GET_CONTENTREPRE_FAILED, GET_CONTENTREPRE_REQUEST, GET_CONTENTREPRE_SUCCESS } from "../../constant/backend/contentRepreConstant";

export const addContentRepreAction = (content,project_id) => async(dispatch,getState) => {
    try {
       // dispatch({type:ADD_CONTENTREPRE_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/contentRephraser`, {content,project_id},config)
        const data = response.data
        dispatch({type:ADD_CONTENTREPRE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_CONTENTREPRE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getContentRepreAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_CONTENTREPRE_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/contentRephraser`,config)
        const data = response.data
        dispatch({type:GET_CONTENTREPRE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_CONTENTREPRE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneContentRepreAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_CONTENTREPRE_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/contentRephraser/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_CONTENTREPRE_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_CONTENTREPRE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteContentRepreAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_CONTENTREPRE_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/contentRephraser/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_CONTENTREPRE_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_CONTENTREPRE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}