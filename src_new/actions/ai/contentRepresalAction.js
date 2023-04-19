import axios from "axios";
import { ADD_CONTENTREPRESAL_FAILED, ADD_CONTENTREPRESAL_REQUEST, ADD_CONTENTREPRESAL_SUCCESS } from "../../constant/ai/contentRepresalConstant";

export const addContentRephesal = (content,no_of_inputs) => async(dispatch) => {
    try {
        dispatch({type:ADD_CONTENTREPRESAL_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`http://44.203.107.96/rephrase/`,{content,no_of_inputs},config)
        dispatch({type:ADD_CONTENTREPRESAL_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_CONTENTREPRESAL_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}