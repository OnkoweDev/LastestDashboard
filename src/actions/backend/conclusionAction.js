import axios from "axios";
import { ADD_CONCLUSION_FAILED, ADD_CONCLUSION_REQUEST, ADD_CONCLUSION_SUCCESS, DELETE_CONCLUSION_FAILED, DELETE_CONCLUSION_REQUEST, DELETE_CONCLUSION_SUCCESS, GETONE_CONCLUSION_FAILED, GETONE_CONCLUSION_REQUEST, GETONE_CONCLUSION_SUCCESS, GET_CONCLUSION_FAILED, GET_CONCLUSION_REQUEST, GET_CONCLUSION_SUCCESS } from "../../constant/backend/conclusionConstant";

export const addConclusionAction = (conclusion,project_id) => async(dispatch,getState) => {
    try {
        //dispatch({type:ADD_CONCLUSION_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/articleConclusion`, {conclusion,project_id},config)

        const data = response.data

        dispatch({type:ADD_CONCLUSION_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_CONCLUSION_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getConclusionAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_CONCLUSION_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/articleConclusion`,config)
        const data = response.data
        dispatch({type:GET_CONCLUSION_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_CONCLUSION_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneConclusionAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_CONCLUSION_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/articleConclusion/${id}`,config)

        const data = response.data

        dispatch({type:GETONE_CONCLUSION_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_CONCLUSION_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteConclusionAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_CONCLUSION_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/articleConclusion/${id}`,config)

        const data = response.data
        
        dispatch({type:DELETE_CONCLUSION_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_CONCLUSION_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}