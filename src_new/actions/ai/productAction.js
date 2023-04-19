import axios from "axios";
import { ADD_PRODUCT_FAILED, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from "../../constant/ai/productConstant";

export const addProductAction = (product_name,product_features) =>  async(dispatch) => {
    try {
        dispatch({type:ADD_PRODUCT_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`http://44.203.107.96/product-description/`,{product_name,product_features},config)
        dispatch({type:ADD_PRODUCT_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_PRODUCT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}