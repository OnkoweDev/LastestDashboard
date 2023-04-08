import axios from "axios";
import { ADD_EBOOK_FAILED, ADD_EBOOK_REQUEST, ADD_EBOOK_SUCCESS, DELETE_EBOOK_FAILED, DELETE_EBOOK_REQUEST, DELETE_EBOOK_SUCCESS, GETONE_EBOOK_FAILED, GETONE_EBOOK_REQUEST, GETONE_EBOOK_SUCCESS, GET_EBOOK_FAILED, GET_EBOOK_REQUEST, GET_EBOOK_SUCCESS } from "../../constant/backend/ebookConstant";

export const addEbookAction = (generated_ebook,project_id,title,description) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_EBOOK_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/ebookGenerator`, {generated_ebook,project_id,title,description},config)
        dispatch({type:ADD_EBOOK_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_EBOOK_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getEbookAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_EBOOK_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/ebookGenerator`,config)
        dispatch({type:GET_EBOOK_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_EBOOK_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneEbookAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_EBOOK_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/ebookGenerator/${id}`,config)
        dispatch({type:GETONE_EBOOK_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_EBOOK_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteEbookAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_EBOOK_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/ebookGenerator/${id}`,config)
        dispatch({type:DELETE_EBOOK_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_EBOOK_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}