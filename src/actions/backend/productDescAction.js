import axios from "axios";
import { ADD_PRODUCTDESC_FAILED, ADD_PRODUCTDESC_REQUEST, ADD_PRODUCTDESC_SUCCESS, DELETE_PRODUCTDESC_FAILED, DELETE_PRODUCTDESC_REQUEST, DELETE_PRODUCTDESC_SUCCESS, GETONE_PRODUCTDESC_FAILED, GETONE_PRODUCTDESC_REQUEST, GETONE_PRODUCTDESC_SUCCESS, GET_PRODUCTDESC_FAILED, GET_PRODUCTDESC_REQUEST, GET_PRODUCTDESC_SUCCESS } from "../../constant/backend/productDescConstant";

export const addProductDescAction = (product_description,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_PRODUCTDESC_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/productDescription`, {product_description,project_id},config)
        const data = response.data
        dispatch({type:ADD_PRODUCTDESC_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_PRODUCTDESC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getProductDescAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_PRODUCTDESC_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/productDescription`,config)
        const data = response.data
        dispatch({type:GET_PRODUCTDESC_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_PRODUCTDESC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getOneProductDescAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_PRODUCTDESC_REQUEST})
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
        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/productDescription/${id}`,config)
        const data = response.data
        dispatch({type:GETONE_PRODUCTDESC_SUCCESS,payload:[data.data]})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_PRODUCTDESC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteProductDescAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_PRODUCTDESC_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/productDescription/${id}`,config)
        const data = response.data
        dispatch({type:DELETE_PRODUCTDESC_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCTDESC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

