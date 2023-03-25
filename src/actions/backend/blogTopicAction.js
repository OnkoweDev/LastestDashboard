import axios from "axios";
import { ADD_BLOGTOPIC_FAILED, ADD_BLOGTOPIC_REQUEST, ADD_BLOGTOPIC_SUCCESS } from "../../constant/backend/blogTopicConstant";

export const blogTopicAddAction = (topic,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_BLOGTOPIC_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogTopic`, {topic,project_id},config)
        dispatch({type:ADD_BLOGTOPIC_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_BLOGTOPIC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}