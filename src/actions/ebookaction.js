import axios from "axios"
import { ADD_EBOOK_FAILED, ADD_EBOOK_REQUEST, ADD_EBOOK_SUCCESS, VIEW_EBOOK_FAILED, VIEW_EBOOK_REQUEST, VIEW_EBOOK_SUCCESS } from "../constant/ebookConstant"

export const addEbook = (topic, no_of_outputs ) =>async(dispatch,getState) =>{
    try {
        dispatch({type:ADD_EBOOK_REQUEST})
        const {userLogin:{userInfo}} = getState()
        const config = {
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                //Authorization: `${userInfo.token}`,
            }
        }
        const {data} = await axios.post(`http://44.203.107.96/topic/`,{topic, no_of_outputs },config)
        dispatch({type:ADD_EBOOK_SUCCESS,payload:data.data})
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

        const {data} = await axios.get(`http://44.203.107.96/topic/`,config)
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