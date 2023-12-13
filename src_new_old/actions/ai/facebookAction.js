import axios from "axios";
import { ADD_FACEBOOK_FAILED, ADD_FACEBOOK_REQUEST, ADD_FACEBOOK_SUCCESS } from "../../constant/ai/facebookConstant";

export const facebookAction = (product_name,product_description,occasion,promotion) => async(dispatch) => {

    try {
        dispatch({type:ADD_FACEBOOK_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/facebook-ad/`,{product_name,product_description,occasion,promotion},config)
        dispatch({type:ADD_FACEBOOK_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_FACEBOOK_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}