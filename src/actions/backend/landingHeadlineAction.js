import axios from "axios";
import { ADD_LANDINGHEADLINE_FAILED, ADD_LANDINGHEADLINE_REQUEST, ADD_LANDINGHEADLINE_SUCCESS, DELETE_LANDINGHEADLINE_FAILED, DELETE_LANDINGHEADLINE_REQUEST, DELETE_LANDINGHEADLINE_SUCCESS, GETONE_LANDINGHEADLINE_FAILED, GETONE_LANDINGHEADLINE_REQUEST, GETONE_LANDINGHEADLINE_SUCCESS, GET_LANDINGHEADLINE_FAILED, GET_LANDINGHEADLINE_REQUEST, GET_LANDINGHEADLINE_SUCCESS } from "../../constant/backend/LandingHeadlineConstant";


export const addLandingHeadlineAction = (headline,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_LANDINGHEADLINE_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/landingPageHeadline`, {headline,project_id},config)
        const data = response.data
        dispatch({type:ADD_LANDINGHEADLINE_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_LANDINGHEADLINE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getLandingHeadlineAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_LANDINGHEADLINE_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/landingPageHeadline`,config)
        const data = response.data
        dispatch({type:GET_LANDINGHEADLINE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_LANDINGHEADLINE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneLandingHeadlineAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_LANDINGHEADLINE_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/landingPageHeadline/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_LANDINGHEADLINE_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_LANDINGHEADLINE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteLandingHeadlineAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_LANDINGHEADLINE_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/landingPageHeadline/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_LANDINGHEADLINE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_LANDINGHEADLINE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

