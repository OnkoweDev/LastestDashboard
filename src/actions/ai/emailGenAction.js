import axios from "axios";
import { ADD_EMAILGEN_FAILED, ADD_EMAILGEN_REQUEST, ADD_EMAILGEN_SUCCESS } from "../../constant/ai/emailGenConstant";

export const emailGenAction = (reciepient,reciepient_position,description) => async(dispatch) => {

    try {
        dispatch({type:ADD_EMAILGEN_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/api/email/`,{reciepient,reciepient_position,description},config)
        dispatch({type:ADD_EMAILGEN_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_EMAILGEN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}