import axios from "axios";
import { ADD_ARTICLEBLOG_FAILED, ADD_ARTICLEBLOG_REQUEST, ADD_ARTICLEBLOG_SUCCESS } from "../../constant/ai/articleBlogConstant";

export const addArticleBlog = (article,no_of_outputs) => async(dispatch) => {
    try {
        dispatch({type:ADD_ARTICLEBLOG_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/conclusions/`,{article,no_of_outputs},config)
        dispatch({type:ADD_ARTICLEBLOG_SUCCESS,payload:data.data})
        console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_ARTICLEBLOG_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}