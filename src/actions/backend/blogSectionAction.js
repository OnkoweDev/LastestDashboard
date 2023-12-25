import axios from "axios";
import { ADD_BLOGSECTION_FAILED, ADD_BLOGSECTION_REQUEST, ADD_BLOGSECTION_SUCCESS, DELETE_BLOGSECTION_FAILED, DELETE_BLOGSECTION_REQUEST, DELETE_BLOGSECTION_SUCCESS, GETONE_BLOGSECTION_FAILED, GETONE_BLOGSECTION_REQUEST, GETONE_BLOGSECTION_SUCCESS, GET_BLOGSECTION_FAILED, GET_BLOGSECTION_REQUEST, GET_BLOGSECTION_SUCCESS } from "../../constant/backend/blogSectionConstant";

export const addSectionAction = (section,project_id) => async(dispatch,getState) => {
    try {
        //dispatch({type:ADD_BLOGSECTION_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/blogSection`, {section,project_id},config)

        const data = response.data

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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/blogSection`,config)

        const data = response.data
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/blogSection/${id}`,config)

        const data = response.data
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/blogSection/${id}`,config)

        const data = response.data
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