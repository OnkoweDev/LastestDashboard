import axios from "axios";
import { ADD_LINKEDIN_FAILED, ADD_LINKEDIN_REQUEST, ADD_LINKEDIN_SUCCESS } from "../../constant/ai/SocialMediaConstant";

export const addLinkedin= (product_name,product_description,keywords) => async(dispatch) => {
    try {
        dispatch({type:ADD_LINKEDIN_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/short-linkedin-posts/`,{product_name,product_description,keywords},config)
        dispatch({type:ADD_LINKEDIN_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_LINKEDIN_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

