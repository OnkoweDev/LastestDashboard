import axios from "axios";
import { ADD_BLOGINTRO_FAILED, ADD_BLOGINTRO_REQUEST, ADD_BLOGINTRO_SUCCESS, DELETE_BLOGINTRO_FAILED, DELETE_BLOGINTRO_REQUEST, DELETE_BLOGINTRO_SUCCESS, GETONE_BLOGINTRO_FAILED, GETONE_BLOGINTRO_REQUEST, GETONE_BLOGINTRO_SUCCESS, GET_BLOGINTRO_FAILED, GET_BLOGINTRO_REQUEST, GET_BLOGINTRO_SUCCESS } from "../../constant/backend/blogIntroConstant";

export const blogIntroAddAction = (intro,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_BLOGINTRO_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogIntro`, {intro,project_id},config)
        dispatch({type:ADD_BLOGINTRO_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_BLOGINTRO_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getBlogintroAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_BLOGINTRO_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogIntro`,config)
        dispatch({type:GET_BLOGINTRO_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_BLOGINTRO_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}


export const getOneIntroAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_BLOGINTRO_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogIntro/${id}`,config)
        dispatch({type:GETONE_BLOGINTRO_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_BLOGINTRO_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteIntroAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_BLOGINTRO_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogIntro/${id}`,config)
        dispatch({type:DELETE_BLOGINTRO_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_BLOGINTRO_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

