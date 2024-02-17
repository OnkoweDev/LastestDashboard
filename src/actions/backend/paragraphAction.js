import axios from "axios";
import { ADD_PARAGRAPH_FAILED, ADD_PARAGRAPH_REQUEST, ADD_PARAGRAPH_SUCCESS, DELETE_PARAGRAPH_FAILED, DELETE_PARAGRAPH_REQUEST, DELETE_PARAGRAPH_SUCCESS, GETONE_PARAGRAPH_FAILED, GETONE_PARAGRAPH_REQUEST, GETONE_PARAGRAPH_SUCCESS, GET_PARAGRAPH_FAILED, GET_PARAGRAPH_REQUEST, GET_PARAGRAPH_SUCCESS } from "../../constant/backend/paragraghConstant";



export const addParagraphAction = (paragraph,project_id) => async(dispatch,getState) => {
    try {
        //dispatch({type:ADD_PARAGRAPH_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/paragraphWriter`, {paragraph,project_id},config)
        const data = response.data
        dispatch({type:ADD_PARAGRAPH_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_PARAGRAPH_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getParagraphAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_PARAGRAPH_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/paragraphWriter`,config)
        const data = response.data
        dispatch({type:GET_PARAGRAPH_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_PARAGRAPH_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneParagraphAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_PARAGRAPH_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/paragraphWriter/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_PARAGRAPH_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_PARAGRAPH_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteParagraphAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_PARAGRAPH_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/paragraphWriter/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_PARAGRAPH_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_PARAGRAPH_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

