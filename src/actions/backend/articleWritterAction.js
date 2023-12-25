import axios from "axios"
import { ADD_ARTICLEWRITTER_FAILED, ADD_ARTICLEWRITTER_REQUEST, ADD_ARTICLEWRITTER_SUCCESS, DELETE_ARTICLEWRITTER_FAILED, DELETE_ARTICLEWRITTER_REQUEST, DELETE_ARTICLEWRITTER_SUCCESS, GETONE_ARTICLEWRITTER_FAILED, GETONE_ARTICLEWRITTER_REQUEST, GETONE_ARTICLEWRITTER_SUCCESS, GET_ARTICLEWRITTER_FAILED, GET_ARTICLEWRITTER_REQUEST, GET_ARTICLEWRITTER_SUCCESS, UPDATE_ARTICLEWRITTER_FAILED, UPDATE_ARTICLEWRITTER_REQUEST, UPDATE_ARTICLEWRITTER_SUCCESS } from "../../constant/backend/articleWriterConstant"

export const articleAddAction = (article_rewriter,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_ARTICLEWRITTER_REQUEST})
        const {userLogin:{userInfo}} = getState()
        //console.log('UserInfo:', userInfo); 

        const token = userInfo?.token;
        console.log('Token:', token); 

        const accountId = userInfo?.account_id;

        if (!token) {
            console.log("User token not found");
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/articleRewriter`, {article_rewriter,project_id},config)

        const data = response.data;
        
        dispatch({type:ADD_ARTICLEWRITTER_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_ARTICLEWRITTER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getArticleAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_ARTICLEWRITTER_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/articleRewriter`,config)

        const data =  response.data
        dispatch({type:GET_ARTICLEWRITTER_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_ARTICLEWRITTER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneArticleAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_ARTICLEWRITTER_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/articleRewriter/${id}`,config)
        const data = response.data;
        dispatch({type:GETONE_ARTICLEWRITTER_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_ARTICLEWRITTER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const updateArticleAction = (id,article_rewriter) => async(dispatch,getState) => {
    try {
        dispatch({type:UPDATE_ARTICLEWRITTER_REQUEST})
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
        const response = await axios.put(`https://dev.olukowe.co/api/account/${accountId}/articleRewriter/${id}`,{article_rewriter},config)

        const data = response.data;

        dispatch({type:UPDATE_ARTICLEWRITTER_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: UPDATE_ARTICLEWRITTER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}


export const deleteArticleAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_ARTICLEWRITTER_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/articleRewriter/${id}`,config)

        const data = response.data
        dispatch({type:DELETE_ARTICLEWRITTER_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_ARTICLEWRITTER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}