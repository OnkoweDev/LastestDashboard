import axios from "axios"
import { ADD_BLOGSECTION_FAILED, ADD_BLOGSECTION_REQUEST, ADD_BLOGSECTION_SUCCESS } from "../../constant/ai/blogSectionConstant"

export const blogSectionAction = (topic,intro,no_of_outputs) => async(dispatch) => {
    try {
        dispatch({type:ADD_BLOGSECTION_REQUEST})
        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`http://44.203.107.96/section/`,{topic,intro,no_of_outputs},config)
        dispatch({type:ADD_BLOGSECTION_SUCCESS, payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_BLOGSECTION_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}