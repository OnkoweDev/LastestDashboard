import axios from "axios";
import { ADD_EBOOK_FAILED, ADD_EBOOK_REQUEST, ADD_EBOOK_SUCCESS } from "../../constant/ai/ebookConstant";

export const ebookAction = (title,description) => async(dispatch) => {

    try {
        dispatch({type:ADD_EBOOK_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        const {data} = await axios.post(`https://api.olukowe.co/ebook/`, {title,description},config)
        dispatch({type:ADD_EBOOK_SUCCESS,payload:data.data})
        console.log(data)
        //console.log(error)
    } catch (error) {
        dispatch({
            type: ADD_EBOOK_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }

}