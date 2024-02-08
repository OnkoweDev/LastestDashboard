import { USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGIN_FAILED, USERS_REGISTER_REQUEST, USERS_REGISTER_FAILED, USERS_REGISTER_SUCCESS, USERS_LOGOUT, USERS_PROFILE_REQUEST, USERS_PROFILE_SUCCESS, USERS_PROFILE_FAILED, GET_USERS_PROFILE_REQUEST, GET_USERS_PROFILE_SUCCESS, GET_USERS_PROFILE_FAILED} from "../constant/userConstant"
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
        const response = await axios.post(`https://dev.olukowe.co/api/auth/register`,{full_name,email,password},config)
        const data = response.data
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


  export const userProfileAction = (first_name,about,phone_number,last_name,username,country,url) => async (dispatch, getState) => {
    try {
      dispatch({ type: USERS_PROFILE_REQUEST });
  
      const { userLogin: { userInfo } } = getState();
      const token = userInfo.token;
      const accountId = userInfo.account_id;
      const userId = userInfo.id;
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await axios.put(
        `https://dev.olukowe.co/api/account/${accountId}/profile/${userId}`,
        {first_name,about,phone_number,last_name,username,country,url},
        config
      );
  
      const data = response.data;
      dispatch({ type: USERS_PROFILE_SUCCESS, payload: data.data });
      //localStorage.setItem('profileInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USERS_PROFILE_FAILED,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };

  export const getProfileAction = () => async(dispatch,getState) => {
    try {
      dispatch({type:GET_USERS_PROFILE_REQUEST})

      const {userLogin:{userInfo}} = getState();
      const accountId = userInfo.account_id
      const token = userInfo.token

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`https://dev.olukowe.co/api/account/${accountId}/profile`,config)

      const data = response.data
      dispatch({type:GET_USERS_PROFILE_SUCCESS, payload:data.data})
      //console.log(data)
    } catch (error) {
      dispatch({
        type: GET_USERS_PROFILE_FAILED,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  }



