import axios from "axios";
import { ADD_UPLOAD_FAILED, ADD_UPLOAD_REQUEST, ADD_UPLOAD_SUCCESS } from "../../constant/backend/uploadConstant";


export const adduploadAction = (upload) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_UPLOAD_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/upload`, {upload},config)
        dispatch({type:ADD_UPLOAD_SUCCESS,payload:data.data})
        console.log(data.data)
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

