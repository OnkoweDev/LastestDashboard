import axios from "axios";
import { ADD_EBOOK_FAILED, ADD_EBOOK_REQUEST, ADD_EBOOK_SUCCESS, DELETE_EBOOK_FAILED, DELETE_EBOOK_REQUEST, DELETE_EBOOK_SUCCESS, GETONE_EBOOK_FAILED, GETONE_EBOOK_REQUEST, GETONE_EBOOK_SUCCESS, GET_EBOOK_FAILED, GET_EBOOK_REQUEST, GET_EBOOK_SUCCESS } from "../../constant/backend/ebookConstant";

export const addEbookAction = (generated_ebook,project_id,title,description) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_EBOOK_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/ebookGenerator`, {generated_ebook,project_id,title,description},config)
        const data = response.data
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/ebookGenerator`,config)
        const data = response.data
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/ebookGenerator/${id}`,config)

        const data = response.data
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/ebookGenerator/${id}`,config)

        const data = response.data
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