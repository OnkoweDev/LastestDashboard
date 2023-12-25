import axios from "axios";
import { ADD_FACEBOOKADS_FAILED, ADD_FACEBOOKADS_REQUEST, ADD_FACEBOOKADS_SUCCESS, DELETE_FACEBOOKADS_FAILED, DELETE_FACEBOOKADS_REQUEST, DELETE_FACEBOOKADS_SUCCESS, GETONE_FACEBOOKADS_FAILED, GETONE_FACEBOOKADS_REQUEST, GETONE_FACEBOOKADS_SUCCESS, GET_FACEBOOKADS_FAILED, GET_FACEBOOKADS_REQUEST, GET_FACEBOOKADS_SUCCESS } from "../../constant/backend/facebookConstant";

export const addFacebookAction = (facebook_ad,project_id) => async(dispatch,getState) => {
    try {
       // dispatch({type:ADD_FACEBOOKADS_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/facebookAd`, {facebook_ad,project_id},config)
        const data = response.data

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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/facebookAd`,config)
        const data = response.data

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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/facebookAd/${id}`,config)
        const data = await response.data
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/facebookAd/${id}`,config)
        const data = response.data
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

