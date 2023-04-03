import axios from "axios";
import { ADD_BLOGSECTION_FAILED, ADD_BLOGSECTION_REQUEST, ADD_BLOGSECTION_SUCCESS } from "../../constant/backend/blogSectionConstant";

export const addSectionAction = (section,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_BLOGSECTION_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogSection`, {section,project_id},config)
        dispatch({type:ADD_BLOGSECTION_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_BLOGSECTION_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}