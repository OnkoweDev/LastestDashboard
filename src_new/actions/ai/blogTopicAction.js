import axios from "axios";
import { ADD_BLOGTOPIC_FAILED, ADD_BLOGTOPIC_REQUEST, ADD_BLOGTOPIC_SUCCESS } from "../../constant/ai/blogTopicConstant";

export const blogTopicAction = (topic,no_of_outputs) => async(dispatch) => {

    try {
        dispatch({type:ADD_BLOGTOPIC_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`http://44.203.107.96/topic/`, {topic,no_of_outputs},config)
        dispatch({type:ADD_BLOGTOPIC_SUCCESS,payload:data.data})
        console.log(data)
        //console.log(error)
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