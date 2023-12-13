import axios from "axios";
import { ADD_BLOGINTRO_FAILED, ADD_BLOGINTRO_REQUEST, ADD_BLOGINTRO_SUCCESS, GET_BLOGINTRO_FAILED, GET_BLOGINTRO_REQUEST, GET_BLOGINTRO_SUCCESS } from "../../constant/ai/blogIntroConstant"

export const addBlog = (title,number_of_outputs) => async(dispatch) => {
    try {
        dispatch({type:ADD_BLOGINTRO_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/intro/`,{title,number_of_outputs},config)
        dispatch({type:ADD_BLOGINTRO_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_BLOGINTRO_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}

export const getBlogIntroAction = () => async (dispatch) => {
    try {
        dispatch({type:GET_BLOGINTRO_REQUEST})
        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.get(`https://api.olukowe.co/intro/`,config)
        dispatch({type:GET_BLOGINTRO_SUCCESS,payload:data.data})
        console.log(data.data)

    } catch (error) {
        dispatch({
            type: GET_BLOGINTRO_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}