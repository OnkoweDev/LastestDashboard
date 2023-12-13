import axios from "axios";
import { ADD_GOOGLEADS_FAILED, ADD_GOOGLEADS_REQUEST, ADD_GOOGLEADS_SUCCESS, DELETE_GOOGLEADS_FAILED, DELETE_GOOGLEADS_REQUEST, DELETE_GOOGLEADS_SUCCESS, GETONE_GOOGLEADS_FAILED, GETONE_GOOGLEADS_REQUEST, GETONE_GOOGLEADS_SUCCESS, GET_GOOGLEADS_FAILED, GET_GOOGLEADS_REQUEST, GET_GOOGLEADS_SUCCESS } from "../../constant/backend/googleAdsConstant";


export const addGoogleAdsAction = (google_ad,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_GOOGLEADS_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/googleAd`, {google_ad,project_id},config)
        const data = response.data
        dispatch({type:ADD_GOOGLEADS_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_GOOGLEADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getGoogleAdsAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_GOOGLEADS_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/googleAd`,config)
        const data = response.data
        dispatch({type:GET_GOOGLEADS_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_GOOGLEADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneGoogleAdsAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_GOOGLEADS_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/googleAd/${id}`,config)
        const data = response.data

        dispatch({type:GETONE_GOOGLEADS_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_GOOGLEADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteGoogleAdsAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_GOOGLEADS_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/googleAd/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_GOOGLEADS_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_GOOGLEADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

