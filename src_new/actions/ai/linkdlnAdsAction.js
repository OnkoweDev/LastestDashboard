import axios from "axios";
import { ADD_LINKDLNADS_FAILED, ADD_LINKDLNADS_REQUEST, ADD_LINKDLNADS_SUCCESS } from "../../constant/ai/linkdlnAdsConstant";

export const linkdlnAdsAction = (product_name,product_description,keywords) => async(dispatch) => {

    try {
        dispatch({type:ADD_LINKDLNADS_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`http://44.203.107.96/linkedin-ad-description/
        `,{product_name,product_description,keywords},config)
        dispatch({type:ADD_LINKDLNADS_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_LINKDLNADS_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}