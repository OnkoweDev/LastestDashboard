import axios from "axios";
import { ADD_TWEETGEN_FAILED, ADD_TWEETGEN_REQUEST, ADD_TWEETGEN_SUCCESS, DELETE_TWEETGEN_FAILED, DELETE_TWEETGEN_REQUEST, DELETE_TWEETGEN_SUCCESS, GETONE_TWEETGEN_FAILED, GETONE_TWEETGEN_REQUEST, GETONE_TWEETGEN_SUCCESS, GET_TWEETGEN_FAILED, GET_TWEETGEN_REQUEST, GET_TWEETGEN_SUCCESS } from "../../constant/backend/tweetConstant";

export const addTweetAction = (tweet,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_TWEETGEN_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/tweetGenerator`, {tweet,project_id},config)
        const data = response.data
        dispatch({type:ADD_TWEETGEN_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_TWEETGEN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getTweetAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_TWEETGEN_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/tweetGenerator`,config)
        const data = response.data
        dispatch({type:GET_TWEETGEN_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_TWEETGEN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneTweetAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_TWEETGEN_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/tweetGenerator/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_TWEETGEN_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_TWEETGEN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteTweetAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_TWEETGEN_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/tweetGenerator/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_TWEETGEN_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_TWEETGEN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

