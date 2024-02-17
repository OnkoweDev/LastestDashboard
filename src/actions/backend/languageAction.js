import axios from "axios";
import { ADD_LANGUAGE_FAILED, ADD_LANGUAGE_REQUEST, ADD_LANGUAGE_SUCCESS, DELETE_LANGUAGE_FAILED, DELETE_LANGUAGE_REQUEST, DELETE_LANGUAGE_SUCCESS, GETONE_LANGUAGE_FAILED, GETONE_LANGUAGE_REQUEST, GETONE_LANGUAGE_SUCCESS, GET_LANGUAGE_FAILED, GET_LANGUAGE_REQUEST, GET_LANGUAGE_SUCCESS } from "../../constant/backend/languageConstant";

export const addLanguageAction = (generated_translation,project_id,language,text) => async(dispatch,getState) => {
    try {
        //dispatch({type:ADD_LANGUAGE_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/translationGenerator`, {generated_translation,project_id,language,text},config)
        const data = response.data
        dispatch({type:ADD_LANGUAGE_SUCCESS,payload:data.data})
        //console.log(data.data)
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/translationGenerator`,config)
        const data = response.data
        dispatch({type:GET_LANGUAGE_SUCCESS,payload:data.data})
        //console.log(data.data)
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/translationGenerator/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_LANGUAGE_SUCCESS,payload:[data.data]})
        //console.log(data.data)
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/translationGenerator/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_LANGUAGE_SUCCESS,payload:data.data})
        //console.log(data.data)
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