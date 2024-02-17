import axios from "axios";
import { ADD_EMAILGEN_FAILED, ADD_EMAILGEN_REQUEST, ADD_EMAILGEN_SUCCESS, DELETE_EMAILGEN_FAILED, DELETE_EMAILGEN_REQUEST, DELETE_EMAILGEN_SUCCESS, GETONE_EMAILGEN_FAILED, GETONE_EMAILGEN_REQUEST, GETONE_EMAILGEN_SUCCESS, GET_EMAILGEN_FAILED, GET_EMAILGEN_REQUEST, GET_EMAILGEN_SUCCESS } from "../../constant/backend/emailGenConstant";

export const addEmailGenAction = (email_generator,project_id) => async(dispatch,getState) => {
    try {
       // dispatch({type:ADD_EMAILGEN_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/emailGenerator`, {email_generator,project_id},config)
        const data = response.data
        dispatch({type:ADD_EMAILGEN_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_EMAILGEN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getEmailGenAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_EMAILGEN_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/emailGenerator`,config)
        const data = response.data
        dispatch({type:GET_EMAILGEN_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_EMAILGEN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneEmailGenAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_EMAILGEN_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/emailGenerator/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_EMAILGEN_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_EMAILGEN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteEmailGenAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_EMAILGEN_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/emailGenerator/${id}`,config)
        const data = response.data
        
        dispatch({type:DELETE_EMAILGEN_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_EMAILGEN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}