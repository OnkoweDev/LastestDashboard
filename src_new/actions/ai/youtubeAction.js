import axios from "axios";
import { ADD_YOUTUBE_FAILED, ADD_YOUTUBE_REQUEST, ADD_YOUTUBE_SUCCESS } from "../../constant/ai/youtubeConstant";

export const youtubeAction = (title,video_hook,keywords,tone_of_voice) => async(dispatch) => {

    try {
        dispatch({type:ADD_YOUTUBE_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`http://44.203.107.96/youtube-intro/`,{title,video_hook,keywords,tone_of_voice},config)
        dispatch({type:ADD_YOUTUBE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_YOUTUBE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}