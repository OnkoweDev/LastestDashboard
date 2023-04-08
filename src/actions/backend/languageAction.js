import axios from "axios";
import { ADD_LANGUAGE_FAILED, ADD_LANGUAGE_REQUEST, ADD_LANGUAGE_SUCCESS, DELETE_LANGUAGE_FAILED, DELETE_LANGUAGE_REQUEST, DELETE_LANGUAGE_SUCCESS, GETONE_LANGUAGE_FAILED, GETONE_LANGUAGE_REQUEST, GETONE_LANGUAGE_SUCCESS, GET_LANGUAGE_FAILED, GET_LANGUAGE_REQUEST, GET_LANGUAGE_SUCCESS } from "../../constant/backend/languageConstant";

export const addLanguageAction = (generated_translation,project_id,language,text) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_LANGUAGE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/translationGenerator`, {generated_translation,project_id,language,text},config)
        dispatch({type:ADD_LANGUAGE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_LANGUAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getLanguageAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_LANGUAGE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/translationGenerator`,config)
        dispatch({type:GET_LANGUAGE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_LANGUAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneLanguageAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_LANGUAGE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/translationGenerator/${id}`,config)
        dispatch({type:GETONE_LANGUAGE_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_LANGUAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteLanguageAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_LANGUAGE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/translationGenerator/${id}`,config)
        dispatch({type:DELETE_LANGUAGE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_LANGUAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}