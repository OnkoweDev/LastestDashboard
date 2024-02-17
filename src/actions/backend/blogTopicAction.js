import axios from "axios";
import { ADD_BLOGTOPIC_FAILED, ADD_BLOGTOPIC_REQUEST, ADD_BLOGTOPIC_SUCCESS, DELETE_BLOGTOPIC_FAILED, DELETE_BLOGTOPIC_REQUEST, DELETE_BLOGTOPIC_SUCCESS, GETONE_BLOGTOPIC_FAILED, GETONE_BLOGTOPIC_REQUEST, GETONE_BLOGTOPIC_SUCCESS, GET_BLOGTOPIC_FAILED, GET_BLOGTOPIC_REQUEST, GET_BLOGTOPIC_SUCCESS } from "../../constant/backend/blogTopicConstant";

export const blogTopicAddAction = (topic,project_id) => async(dispatch,getState) => {
    try {
        //dispatch({type:ADD_BLOGTOPIC_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/blogTopic`, {topic,project_id},config)
        const data = response.data
        
        dispatch({type:ADD_BLOGTOPIC_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_BLOGTOPIC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getBlogTopicAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_BLOGTOPIC_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/blogTopic`,config)

        const data = response.data
        dispatch({type:GET_BLOGTOPIC_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_BLOGTOPIC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneBlogTopicAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_BLOGTOPIC_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/blogTopic/${id}`,config)

        const data = response.data

        dispatch({type:GETONE_BLOGTOPIC_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_BLOGTOPIC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteBlogTopicAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_BLOGTOPIC_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/blogTopic/${id}`,config)

        const data = response.data
        dispatch({type:DELETE_BLOGTOPIC_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_BLOGTOPIC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}