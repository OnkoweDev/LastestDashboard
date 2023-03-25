import axios from "axios";
import { ADD_CONTENTREPRE_FAILED, ADD_CONTENTREPRE_REQUEST, ADD_CONTENTREPRE_SUCCESS, DELETE_CONTENTREPRE_FAILED, DELETE_CONTENTREPRE_REQUEST, DELETE_CONTENTREPRE_SUCCESS, GETONE_CONTENTREPRE_FAILED, GETONE_CONTENTREPRE_REQUEST, GETONE_CONTENTREPRE_SUCCESS, GET_CONTENTREPRE_FAILED, GET_CONTENTREPRE_REQUEST, GET_CONTENTREPRE_SUCCESS } from "../../constant/backend/contentRepreConstant";

export const addContentRepreAction = (content,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_CONTENTREPRE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/contentRephraser`, {content,project_id},config)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/contentRephraser`,config)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/contentRephraser/${id}`,config)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/contentRephraser/${id}`,config)
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