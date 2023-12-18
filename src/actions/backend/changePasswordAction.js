import axios from "axios"
import { CHANGE_PASSWORD_FAILED, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS } from "../../constant/backend/changePassword"

export const changePasswordAction = (old_password,password,password_confirmation) =>async (dispatch,getState) => {
    try {
        dispatch({type:CHANGE_PASSWORD_REQUEST})
        const {userLogin:{userInfo}} = getState()

        const token = userInfo.token
        const accountId = userInfo.account_id

        const config = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/change-password`,{old_password,password,password_confirmation}, config)

        const data = response.data
        dispatch({type:CHANGE_PASSWORD_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: CHANGE_PASSWORD_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}