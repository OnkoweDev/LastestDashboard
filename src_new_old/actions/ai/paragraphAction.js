import axios from "axios";
import { ADD_PARAGRAPH_FAILED, ADD_PARAGRAPH_REQUEST, ADD_PARAGRAPH_SUCCESS } from "../../constant/ai/paragraphWriterConstant";

export const addParagraphWriter= (title,keyword,no_of_outputs,tone_of_voice) => async(dispatch) => {
    try {
        dispatch({type:ADD_PARAGRAPH_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/paragraph/`,{title,keyword,no_of_outputs,tone_of_voice},config)
        dispatch({type:ADD_PARAGRAPH_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_PARAGRAPH_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}