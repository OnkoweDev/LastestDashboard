import axios from "axios"
import { ADD_PROJECT_FAILED, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, DELETE_PROJECT_FAILED, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, GETONE_PROJECT_FAILED, GETONE_PROJECT_REQUEST, GETONE_PROJECT_SUCCESS, GET_PROJECT_FAILED, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS } from "../../constant/backend/projectConstant"

export const projectAction = (name,status) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_PROJECT_REQUEST})
        const {userLogin:{userInfo}} = getState()
        //console.log('UserInfo:', userInfo); 

        const token = userInfo?.token;
        //console.log('Token:', token); 

        const accountId = userInfo?.account_id;

        if (!token) {
            //console.log("User token not found");
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/project`,{name,status}, config);
        const data = response.data;

        dispatch({type:ADD_PROJECT_SUCCESS,payload:data.data})
        //localStorage.setItem('projectInfo', JSON.stringify(data))
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_PROJECT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}


export const getProjectAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_PROJECT_REQUEST });

        const { userLogin: { userInfo } } = getState();

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

        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/project`, config);
        const data = response.data;

        dispatch({ type: GET_PROJECT_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({
            type: GET_PROJECT_FAILED,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};



export const getOneProjectAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:GETONE_PROJECT_REQUEST})
        const {userLogin:{userInfo}} = getState();

        //console.log('UserInfo:', userInfo); 

        const token = userInfo?.token;
        //console.log('Token:', token); 
        
        const accountId = userInfo?.account_id;

        if (!token) {
            //console.log("User token not found");
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/project/${id}`, config);
        const data = response.data;
        
        dispatch({type:GETONE_PROJECT_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: GETONE_PROJECT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const deleteProjectAction = (id) => async(dispatch,getState) => {
    try {
        dispatch({type:DELETE_PROJECT_REQUEST})
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
        const response = await axios.delete(`https://dev.olukowe.co/api/account/${accountId}/project/${id}`,config)
        const data = response.data
        
        dispatch({type:DELETE_PROJECT_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: DELETE_PROJECT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}