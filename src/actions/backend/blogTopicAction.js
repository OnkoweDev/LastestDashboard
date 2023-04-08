import axios from "axios";
import { ADD_BLOGTOPIC_FAILED, ADD_BLOGTOPIC_REQUEST, ADD_BLOGTOPIC_SUCCESS, DELETE_BLOGTOPIC_FAILED, DELETE_BLOGTOPIC_REQUEST, DELETE_BLOGTOPIC_SUCCESS, GETONE_BLOGTOPIC_FAILED, GETONE_BLOGTOPIC_REQUEST, GETONE_BLOGTOPIC_SUCCESS, GET_BLOGTOPIC_FAILED, GET_BLOGTOPIC_REQUEST, GET_BLOGTOPIC_SUCCESS } from "../../constant/backend/blogTopicConstant";

export const blogTopicAddAction = (topic,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_BLOGTOPIC_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogTopic`, {topic,project_id},config)
        dispatch({type:ADD_BLOGTOPIC_SUCCESS,payload:data.data})
        console.log(data.data)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogTopic`,config)
        dispatch({type:GET_BLOGTOPIC_SUCCESS,payload:data.data})
        console.log(data.data)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogTopic/${id}`,config)
        dispatch({type:GETONE_BLOGTOPIC_SUCCESS,payload:[data.data]})
        console.log(data.data)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogTopic/${id}`,config)
        dispatch({type:DELETE_BLOGTOPIC_SUCCESS,payload:[data.data]})
        console.log(data.data)
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