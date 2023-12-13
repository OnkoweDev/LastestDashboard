import axios from "axios";
import { ADD_GOOGLEADS_FAILED, ADD_GOOGLEADS_REQUEST, ADD_GOOGLEADS_SUCCESS } from "../../constant/ai/googleAdsConstant";

export const googleadsAction = (company_name,product_description) => async(dispatch) => {

    try {
        dispatch({type:ADD_GOOGLEADS_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/google-ad-description/`,{company_name,product_description},config)
        dispatch({type:ADD_GOOGLEADS_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_GOOGLEADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}