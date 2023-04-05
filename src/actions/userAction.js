import { async } from "regenerator-runtime";
import { USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGIN_FAILED, USERS_REGISTER_REQUEST, USERS_REGISTER_FAILED, USERS_REGISTER_SUCCESS, USERS_LOGOUT, USERS_UPDATE_REQUEST, USERS_UPDATE_SUCCESS, USERS_UPDATE_FAILED } from "../constant/userConstant"
import axios from 'axios'

export const login = (email,password) => async(dispatch) => {
    try {
        dispatch({type:USERS_LOGIN_REQUEST})
        const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
        const {data} = await axios.post(`http://3.237.101.152/api/auth/login`,{email,password},config)
        dispatch({type:USERS_LOGIN_SUCCESS,payload:data.data})
        localStorage.setItem('userInfo',JSON.stringify(data))


    } catch (error) {
        dispatch({
            type: USERS_LOGIN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
        //const res2 = await axios.get(`http://localhost:8000/task/${userInfo.id}/runs`);
}

export const register = (full_name,email,password) => async(dispatch) =>{
    try {
        dispatch({type:USERS_REGISTER_REQUEST})

        const config = {
            headers: {
                'Content-type':'application/json',
            },
        };
        const {data} = await axios.post(`http://3.237.101.152/api/auth/register`,{full_name,email,password},config)
        dispatch({type:USERS_REGISTER_SUCCESS,payload:data.data})
        dispatch({type:USERS_LOGIN_SUCCESS,payload:data.data})
        localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USERS_REGISTER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const logout = ()=> async (dispatch) => {

        localStorage.removeItem("userInfo");
        dispatch({ type: USERS_LOGOUT });
};

// export const updateUser = (user) => async(dispatch,getState) => {
//   try {
//     dispatch({type:USERS_UPDATE_REQUEST})

//     const {userLogin:{userInfo}} = getState();

//     const config = {
//       headers:{
//         'Content-Type': 'application/json',
//         Authorization : `Bearer ${userInfo.data.token}`
//       }
//     }
//     const {data} = await axios.put(`http://3.237.101.152/api/account/${userInfo.data.account_id}/profile/${id}`,user,config)
//     dispatch({type:USERS_UPDATE_SUCCESS, payload:data})
//     dispatch({type:USERS_LOGIN_SUCCESS, payload:data})
//     localStorage.setItem('userInfo', JSON.stringify(data))
//   } catch (error) {
//     dispatch({
//       type: USERS_UPDATE_FAILED,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// }