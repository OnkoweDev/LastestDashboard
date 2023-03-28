import axios from "axios";
import { ADD_FACEBOOKADS_FAILED, ADD_FACEBOOKADS_REQUEST, ADD_FACEBOOKADS_SUCCESS, DELETE_FACEBOOKADS_FAILED, DELETE_FACEBOOKADS_REQUEST, DELETE_FACEBOOKADS_SUCCESS, GETONE_FACEBOOKADS_FAILED, GETONE_FACEBOOKADS_REQUEST, GETONE_FACEBOOKADS_SUCCESS, GET_FACEBOOKADS_FAILED, GET_FACEBOOKADS_REQUEST, GET_FACEBOOKADS_SUCCESS } from "../../constant/backend/facebookConstant";

export const addFacebookAction = (facebook_ad,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_FACEBOOKADS_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/facebookAd`, {facebook_ad,project_id},config)
        dispatch({type:ADD_FACEBOOKADS_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_FACEBOOKADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getFacebookAdsAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_FACEBOOKADS_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/facebookAd`,config)
        dispatch({type:GET_FACEBOOKADS_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_FACEBOOKADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneFacebookAdsAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_FACEBOOKADS_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/facebookAd/${id}`,config)
        dispatch({type:GETONE_FACEBOOKADS_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_FACEBOOKADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteFacebookAdsAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_FACEBOOKADS_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/facebookAd/${id}`,config)
        dispatch({type:DELETE_FACEBOOKADS_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_FACEBOOKADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

