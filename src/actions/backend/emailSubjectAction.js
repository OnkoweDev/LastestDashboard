import axios from "axios";
import { ADD_EMAILSUBJECT_FAILED, ADD_EMAILSUBJECT_REQUEST, ADD_EMAILSUBJECT_SUCCESS, DELETE_EMAILSUBJECT_FAILED, DELETE_EMAILSUBJECT_REQUEST, DELETE_EMAILSUBJECT_SUCCESS, GETONE_EMAILSUBJECT_FAILED, GETONE_EMAILSUBJECT_REQUEST, GETONE_EMAILSUBJECT_SUCCESS, GET_EMAILSUBJECT_FAILED, GET_EMAILSUBJECT_REQUEST, GET_EMAILSUBJECT_SUCCESS } from "../../constant/backend/emailSubjectConstant";

export const addSubjectAction = (email_subject,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_EMAILSUBJECT_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/emailSubject`, {email_subject,project_id},config)
        const data = response.data
        dispatch({type:ADD_EMAILSUBJECT_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_EMAILSUBJECT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getSubjectAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_EMAILSUBJECT_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/emailSubject`,config)
        const data = response.data

        dispatch({type:GET_EMAILSUBJECT_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_EMAILSUBJECT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteSubjectAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_EMAILSUBJECT_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/emailSubject/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_EMAILSUBJECT_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_EMAILSUBJECT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneSubjectAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_EMAILSUBJECT_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/emailSubject/${id}`,config)
        const data = response.data
        
        dispatch({type:GETONE_EMAILSUBJECT_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_EMAILSUBJECT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}