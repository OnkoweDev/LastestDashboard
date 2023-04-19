import axios from "axios";
import { ADD_YOUTUBEDESC_FAILED, ADD_YOUTUBEDESC_REQUEST, ADD_YOUTUBEDESC_SUCCESS } from "../../constant/ai/youtubeDescriptinConstant";

export const youtubeDescAction = (title,keywords) => async(dispatch) => {

    try {
        dispatch({type:ADD_YOUTUBEDESC_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`http://44.203.107.96/youtube-description/`,{title,keywords},config)
        dispatch({type:ADD_YOUTUBEDESC_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_YOUTUBEDESC_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}