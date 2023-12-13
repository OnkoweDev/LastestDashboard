import axios from "axios";
import { ADD_INSTAGRAM_FAILED, ADD_INSTAGRAM_REQUEST, ADD_INSTAGRAM_SUCCESS } from "../../constant/ai/instagramConstant";

export const InstagramAction = (product_description,tone_of_voice) => async(dispatch) => {

    try {
        dispatch({type:ADD_INSTAGRAM_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/instagram-caption/`,{product_description,tone_of_voice},config)
        dispatch({type:ADD_INSTAGRAM_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_INSTAGRAM_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}