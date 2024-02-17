import axios from "axios";
import { UPDATE_PROFILE_FAILED, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "../../constant/backend/profileConstant";
import secureLocalStorage from "react-secure-storage";



export const updateProfileAction = (id,about,country,first_name,last_name,phone_number,url,username) => async(dispatch,getState) => {
    try {
        dispatch({type:UPDATE_PROFILE_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.put(`https://dev.olukowe.co/api/account/${userInfo.data.account_id}/profile/${id}`, {about,country,first_name,last_name,phone_number,url,username},config)
        dispatch({type:UPDATE_PROFILE_SUCCESS,payload:data.data})
        localStorage.setItem('profileInfo', JSON.stringify(data))
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}
