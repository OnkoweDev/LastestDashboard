import axios from "axios";
import { ADD_GOOGLEADSTITLE_FAILED, ADD_GOOGLEADSTITLE_REQUEST, ADD_GOOGLEADSTITLE_SUCCESS } from "../../constant/ai/googleAdsTitleConstant";

export const googleTitleAction = (company_name,product_description,keywords) => async(dispatch) => {

    try {
        dispatch({type:ADD_GOOGLEADSTITLE_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/google-ad-title/`,{company_name,product_description,keywords},config)
        dispatch({type:ADD_GOOGLEADSTITLE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_GOOGLEADSTITLE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}