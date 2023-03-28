import axios from "axios";
import { ADD_GOOGLEADS_FAILED, ADD_GOOGLEADS_REQUEST, ADD_GOOGLEADS_SUCCESS, DELETE_GOOGLEADS_FAILED, DELETE_GOOGLEADS_REQUEST, DELETE_GOOGLEADS_SUCCESS, GETONE_GOOGLEADS_FAILED, GETONE_GOOGLEADS_REQUEST, GETONE_GOOGLEADS_SUCCESS, GET_GOOGLEADS_FAILED, GET_GOOGLEADS_REQUEST, GET_GOOGLEADS_SUCCESS } from "../../constant/backend/googleAdsConstant";


export const addGoogleAdsAction = (google_ad,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_GOOGLEADS_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/googleAd`, {google_ad,project_id},config)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/googleAd`,config)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/googleAd/${id}`,config)
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
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/googleAd/${id}`,config)
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

