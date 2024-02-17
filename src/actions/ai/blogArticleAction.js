import axios from "axios";
import { ADD_BLOGARTICLEWRITER_FAILED, ADD_BLOGARTICLEWRITER_REQUEST, ADD_BLOGARTICLEWRITER_SUCCESS } from "../../constant/ai/articleWriterConstant";

export const addArticleWriter = (title,intro,sections) => async(dispatch) => {
    try {
        dispatch({type:ADD_BLOGARTICLEWRITER_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/article/`,{title,intro,sections},config)
        dispatch({type:ADD_BLOGARTICLEWRITER_SUCCESS,payload:data.data})
        //console.log(data.data)
    } catch (error) {
        dispatch({
            type: ADD_BLOGARTICLEWRITER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}