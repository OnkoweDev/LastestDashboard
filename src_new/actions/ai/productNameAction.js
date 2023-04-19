import axios from "axios";
import { ADD_PRODUCTNAME_FAILED, ADD_PRODUCTNAME_REQUEST, ADD_PRODUCTNAME_SUCCESS } from "../../constant/ai/productNameConstant";

export const productNameAction = (product_description,keywords) => async(dispatch) => {

    try {
        dispatch({type:ADD_PRODUCTNAME_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`http://44.203.107.96/product-name/`,{product_description,keywords},config)
        dispatch({type:ADD_PRODUCTNAME_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_PRODUCTNAME_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}