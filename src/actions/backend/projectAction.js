import axios from "axios"
import { ADD_PROJECT_FAILED, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, GET_PROJECT_FAILED, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS } from "../../constant/backend/projectConstant"

export const projectAction = (name,status) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_PROJECT_REQUEST})
        const {userLogin:{userInfo}} = getState()
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/project`, {name,status},config)
        dispatch({type:ADD_PROJECT_SUCCESS,payload:data.data})
        localStorage.setItem('projectInfo', JSON.stringify(data))
        console.log(data.data)
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


export const getProjectAction = () => async(dispatch,getState) => {
    try {
        dispatch({type:GET_PROJECT_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/project`,config)
        dispatch({type:GET_PROJECT_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: GET_PROJECT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}