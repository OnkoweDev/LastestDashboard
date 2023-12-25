import axios from "axios";
import { ADD_LINKDINADS_FAILED, ADD_LINKDINADS_REQUEST, ADD_LINKDINADS_SUCCESS, DELETE_LINKDINADS_FAILED, DELETE_LINKDINADS_REQUEST, DELETE_LINKDINADS_SUCCESS, GETONE_LINKDINADS_FAILED, GETONE_LINKDINADS_REQUEST, GETONE_LINKDINADS_SUCCESS, GET_LINKDINADS_FAILED, GET_LINKDINADS_REQUEST, GET_LINKDINADS_SUCCESS } from "../../constant/backend/linkdinAdsConstant";



export const addLinkAdsAction = (linkedin_ad,project_id) => async(dispatch,getState) => {
    try {
        //dispatch({type:ADD_LINKDINADS_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/liinkedinAd`, {linkedin_ad,project_id},config)
        const data = response.data
        dispatch({type:ADD_LINKDINADS_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_LINKDINADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getLinkAdsAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_LINKDINADS_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/liinkedinAd`,config)
        const data = response.data
        dispatch({type:GET_LINKDINADS_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_LINKDINADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneLinkAdsAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_LINKDINADS_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/liinkedinAd/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_LINKDINADS_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_LINKDINADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteLinkAdsAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_LINKDINADS_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/liinkedinAd/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_LINKDINADS_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_LINKDINADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}