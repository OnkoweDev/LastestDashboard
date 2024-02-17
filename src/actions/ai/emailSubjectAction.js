import axios from "axios";
import { ADD_EMAIL_FAILED, ADD_EMAIL_REQUEST, ADD_EMAIL_SUCCESS } from "./emailConstant";

export const emailSubjectAction = (product_name,email_description ) => async(dispatch) => {

    try {
        dispatch({type:ADD_EMAIL_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/email-subject-line/`,{product_name,email_description },config)
        dispatch({type:ADD_EMAIL_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_EMAIL_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}