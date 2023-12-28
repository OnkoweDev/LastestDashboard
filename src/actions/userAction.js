import { USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGIN_FAILED, USERS_REGISTER_REQUEST, USERS_REGISTER_FAILED, USERS_REGISTER_SUCCESS, USERS_LOGOUT, USERS_PROFILE_REQUEST, USERS_PROFILE_SUCCESS, USERS_PROFILE_FAILED} from "../constant/userConstant"
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage";


export const login = (email, password) => async (dispatch) => {
  try {
      dispatch({ type: USERS_LOGIN_REQUEST });
      const config = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
      };

      const response = await fetch('https://dev.olukowe.co/api/auth/login', config);
      const data = await response.json();

      if (response.ok) {
          dispatch({ type: USERS_LOGIN_SUCCESS, payload: data.data });
          secureLocalStorage.setItem('userInfo', JSON.stringify(data));
      } else {
          throw new Error(data.message || 'Login failed');
      }
  } catch (error) {
      dispatch({
          type: USERS_LOGIN_FAILED,
          payload: error.message,
      });
  }
  
};


export const register = (full_name,email,password) => async(dispatch) =>{
    try {
        dispatch({type:USERS_REGISTER_REQUEST})

        const config = {
            headers: {
                'Content-type':'application/json',
            },
        };
        const {data} = await axios.post(`https://dev.olukowe.co/api/auth/register`,{full_name,email,password},config)
        dispatch({type:USERS_REGISTER_SUCCESS,payload:data.data})
        dispatch({type:USERS_LOGIN_SUCCESS,payload:data.data})
        secureLocalStorage.setItem('userInfo',JSON.stringify(data))
        
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

export const userProfileAction = (about,country,first_name,phone_number,avatar) => async(dispatch,getState) => {
    try {
        dispatch({type:USERS_PROFILE_REQUEST})
        const {userLogin:{userInfo}} = getState();

        const token =  userInfo.token;
        const accountId = userInfo.account_id
        const userid = userInfo.id

        const config = {
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                 Authorization: `Bearer ${token}`,
            }
        }

        const userData = {
            about,country,phone_number,first_name,avatar
          }
      
        const response = await axios.put(`https://dev.olukowe.co/api/account/${accountId}/profile/${userid}`,userData,config)

        const data = response.data
        console.log(data)

        dispatch({type:USERS_PROFILE_SUCCESS, payload:data.data})
        secureLocalStorage.setItem('userInfo', JSON.stringify(data));


    } catch (error) {
        dispatch({
            type: USERS_PROFILE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

