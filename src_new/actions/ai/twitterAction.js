import axios from "axios";
import { ADD_TWITTER_FAILED, ADD_TWITTER_REQUEST, ADD_TWITTER_SUCCESS } from "../../constant/ai/twitterConstant";

export const addTwitter= (topic,keywords) => async(dispatch) => {
    try {
        dispatch({type:ADD_TWITTER_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`http://44.203.107.96/tweets/`,{topic,keywords},config)
        dispatch({type:ADD_TWITTER_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_TWITTER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}