import axios from "axios"
import { ADD_EBOOK_FAILED, ADD_EBOOK_REQUEST, ADD_EBOOK_SUCCESS, VIEW_EBOOK_FAILED, VIEW_EBOOK_REQUEST, VIEW_EBOOK_SUCCESS } from "../constant/ebookConstant"

export const addEbook = (title, description,no_of_chapters ) =>async(dispatch) =>{
    try {
        dispatch({type:ADD_EBOOK_REQUEST})
        const config = {
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",  
            }
        }
        const response = await axios.post(`https://api.olukowe.co/ebook/`,{title, description,no_of_chapters },config)
        const data = response.data
        console.log(data)
        dispatch({type:ADD_EBOOK_SUCCESS,payload:data})

    } catch (error) {
        dispatch({
            type: ADD_EBOOK_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
          console.log(error)
    }
}

export const viewMyEbook = () => async(dispatch,getState) => {
    try {
        dispatch({type:VIEW_EBOOK_REQUEST})
        const {userLogin:{userInfo}} = getState()
        const config = {
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                 //Authorization: ` ${userInfo.token}`,
            }
        }

        const {data} = await axios.get(`https://api.olukowe.co/topic/`,config)
        dispatch({type:VIEW_EBOOK_SUCCESS,payload:data.data})
        console.log({data})
        
    } catch (error) {
        dispatch({
            type: VIEW_EBOOK_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}