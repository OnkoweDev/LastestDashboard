import axios from "axios";
import { ADD_ARTICLEREWRITER_FAILED, ADD_ARTICLEREWRITER_REQUEST, ADD_ARTICLEREWRITER_SUCCESS } from "../../constant/ai/articleRewriterConstant";

export const addArticleRewriter= (content) => async(dispatch) => {
    try {
        dispatch({type:ADD_ARTICLEREWRITER_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/rewriter/`,{content},config)
        dispatch({type:ADD_ARTICLEREWRITER_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_ARTICLEREWRITER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}