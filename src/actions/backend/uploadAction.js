import axios from "axios";
import { ADD_UPLOAD_FAILED, ADD_UPLOAD_REQUEST, ADD_UPLOAD_SUCCESS } from "../../constant/backend/uploadConstant";


export const adduploadAction = (upload) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_UPLOAD_REQUEST})
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
        const response = await axios.post(`https://dev.olukowe.co/api/account/${accountId}/upload`, {upload},config)
        const data = response.data
        dispatch({type:ADD_UPLOAD_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_UPLOAD_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

