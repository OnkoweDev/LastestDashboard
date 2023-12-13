import axios from "axios";
import { ADD_LANDINGPAGE_FAILED, ADD_LANDINGPAGE_REQUEST, ADD_LANDINGPAGE_SUCCESS, DELETE_LANDINGPAGE_FAILED, DELETE_LANDINGPAGE_REQUEST, DELETE_LANDINGPAGE_SUCCESS, GETONE_LANDINGPAGE_FAILED, GETONE_LANDINGPAGE_REQUEST, GETONE_LANDINGPAGE_SUCCESS, GET_LANDINGPAGE_FAILED, GET_LANDINGPAGE_REQUEST, GET_LANDINGPAGE_SUCCESS } from "../../constant/backend/landingPageConstant";


export const addLandingPageAction = (page,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_LANDINGPAGE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/landingPage`, {page,project_id},config)
        dispatch({type:ADD_LANDINGPAGE_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_LANDINGPAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getLandingPageAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_LANDINGPAGE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/landingPage`,config)
        dispatch({type:GET_LANDINGPAGE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_LANDINGPAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneLangingPageAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_LANDINGPAGE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/landingPage/${id}`,config)
        dispatch({type:GETONE_LANDINGPAGE_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_LANDINGPAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteLandingPageAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_LANDINGPAGE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/landingPage/${id}`,config)
        dispatch({type:DELETE_LANDINGPAGE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_LANDINGPAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

