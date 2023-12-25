import axios from "axios";
import { ADD_BLOGINTRO_FAILED, ADD_BLOGINTRO_REQUEST, ADD_BLOGINTRO_SUCCESS, DELETE_BLOGINTRO_FAILED, DELETE_BLOGINTRO_REQUEST, DELETE_BLOGINTRO_SUCCESS, GETONE_BLOGINTRO_FAILED, GETONE_BLOGINTRO_REQUEST, GETONE_BLOGINTRO_SUCCESS, GET_BLOGINTRO_FAILED, GET_BLOGINTRO_REQUEST, GET_BLOGINTRO_SUCCESS } from "../../constant/backend/blogIntroConstant";

export const blogIntroAddAction = (intro,project_id) => async(dispatch,getState) => {
    try {
        //dispatch({type:ADD_BLOGINTRO_REQUEST})
        const {userLogin:{userInfo}} = getState();

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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/blogIntro`, {intro,project_id},config)

        const data = response.data
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/blogIntro`,config)

        const data = response.data

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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/blogIntro/${id}`,config)

        const data = response.data
        
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/blogIntro/${id}`,config)

        const data = response.data
        
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

