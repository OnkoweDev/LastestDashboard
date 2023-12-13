import axios from "axios";
import { ADD_LAND_FAILED, ADD_LAND_REQUEST, ADD_LAND_SUCCESS } from "../../constant/ai/landConstant";

export const landAction = (product_name,product_description,feature_benefit_1,feature_benefit_2,feature_benefit_3) => async(dispatch) => {

    try {
        dispatch({type:ADD_LAND_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
    const {data} = await axios.post(`https://api.olukowe.co/landing-page/`, {product_name,product_description,feature_benefit_1,feature_benefit_2,feature_benefit_3},config)
        dispatch({type:ADD_LAND_SUCCESS,payload:data})
        console.log(data)
        //console.log(error)
    } catch (error) {
        dispatch({
            type: ADD_LAND_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}