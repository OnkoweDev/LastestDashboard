import axios from "axios";
import { ADD_PRODUCTNAME_FAILED, ADD_PRODUCTNAME_REQUEST, ADD_PRODUCTNAME_SUCCESS, DELETE_PRODUCTNAME_FAILED, DELETE_PRODUCTNAME_REQUEST, DELETE_PRODUCTNAME_SUCCESS, GETONE_PRODUCTNAME_FAILED, GETONE_PRODUCTNAME_REQUEST, GETONE_PRODUCTNAME_SUCCESS, GET_PRODUCTNAME_FAILED, GET_PRODUCTNAME_REQUEST, GET_PRODUCTNAME_SUCCESS } from "../../constant/backend/productNameConstant";


export const addProductNameAction = (product_name,) => async(dispatch,getState) => {
    try {
        //dispatch({type:ADD_PRODUCTNAME_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/productName`, {product_name,},config)
        const data = response.data
        dispatch({type:ADD_PRODUCTNAME_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_PRODUCTNAME_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getProductNameAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_PRODUCTNAME_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/productName`,config)
        const data = response.data
        dispatch({type:GET_PRODUCTNAME_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_PRODUCTNAME_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneProductNameAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_PRODUCTNAME_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/productName/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_PRODUCTNAME_SUCCESS,payload:[data.data]})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_PRODUCTNAME_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteProductNameAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_PRODUCTNAME_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/productName/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_PRODUCTNAME_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCTNAME_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

