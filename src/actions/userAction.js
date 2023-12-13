import { USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGIN_FAILED, USERS_REGISTER_REQUEST, USERS_REGISTER_FAILED, USERS_REGISTER_SUCCESS, USERS_LOGOUT} from "../constant/userConstant"
import axios from 'axios'

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
          localStorage.setItem('userInfo', JSON.stringify(data));
      } else {
          throw new Error(data.message || 'Login failed');
      }
  } catch (error) {
      dispatch({
          type: USERS_LOGIN_FAILED,
          payload: error.message,
      });
  }
  // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // if (userInfo) {
  //     const res2 = await fetch(`http://localhost:8000/task/${userInfo.id}/runs`);
  //     // Process res2...
  // }
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

