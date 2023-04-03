import axios from "axios";
import { ADD_BLOGSECTION_FAILED, ADD_BLOGSECTION_REQUEST, ADD_BLOGSECTION_SUCCESS, DELETE_BLOGSECTION_FAILED, DELETE_BLOGSECTION_REQUEST, DELETE_BLOGSECTION_SUCCESS, GETONE_BLOGSECTION_FAILED, GETONE_BLOGSECTION_REQUEST, GETONE_BLOGSECTION_SUCCESS, GET_BLOGSECTION_FAILED, GET_BLOGSECTION_REQUEST, GET_BLOGSECTION_SUCCESS } from "../../constant/backend/blogSectionConstant";

export const addSectionAction = (section,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_BLOGSECTION_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogSection`, {section,project_id},config)
        dispatch({type:ADD_BLOGSECTION_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_BLOGSECTION_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getSectionAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_BLOGSECTION_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogSection`,config)
        dispatch({type:GET_BLOGSECTION_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_BLOGSECTION_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneSectionAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_BLOGSECTION_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogSection/${id}`,config)
        dispatch({type:GETONE_BLOGSECTION_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_BLOGSECTION_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteSectionAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_BLOGSECTION_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogSection/${id}`,config)
        dispatch({type:DELETE_BLOGSECTION_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_BLOGSECTION_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}