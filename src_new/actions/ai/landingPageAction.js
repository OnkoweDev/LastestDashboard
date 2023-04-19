import axios from "axios";
import { ADD_LANDINGPAGE_FAILED, ADD_LANDINGPAGE_REQUEST, ADD_LANDINGPAGE_SUCCESS } from "../../constant/ai/landingPageConstant";

export const landingPageAction = (product_name,product_description) =>  async(dispatch) => {
    try {
        dispatch({type:ADD_LANDINGPAGE_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`http://44.203.107.96/landing-page-headline/
        `,{product_name,product_description},config)
        dispatch({type:ADD_LANDINGPAGE_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_LANDINGPAGE_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}