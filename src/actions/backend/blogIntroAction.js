import axios from "axios";
import { ADD_BLOGINTRO_FAILED, ADD_BLOGINTRO_REQUEST, ADD_BLOGINTRO_SUCCESS } from "../../constant/backend/blogIntroConstant";

export const blogIntroAddAction = (intro,project_id) => async(dispatch,getState) => {
    try {
        dispatch({type:ADD_BLOGINTRO_REQUEST})
        const {userLogin:{userInfo}} = getState();
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.data.token}`
            }
        }
        const {data} = await axios.post(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogintro`, {intro,project_id},config)
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

// export const getBlogWriterAction = () => async(dispatch,getState) => {
//     try {
//         dispatch({type:GET_BLOGWRITER_REQUEST})
//         const {userLogin:{userInfo}} = getState();
//         const config = {
//             headers:{
//                 "Content-Type": "application/json",
//                 Authorization:`Bearer ${userInfo.data.token}`
//             }
//         }
//         const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogArticle`,config)
//         dispatch({type:GET_BLOGWRITER_SUCCESS,payload:data.data})
//         console.log(data.data)
//     } catch (error) {
//         dispatch({
//             type: GET_BLOGWRITER_FAILED,
//             payload:
//               error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//           });
//     }
// }


// export const getOneBlogAction = (id) => async(dispatch,getState) => {
//     try {
//         dispatch({type:GETONE_BLOGWRITER_REQUEST})
//         const {userLogin:{userInfo}} = getState();
//         const config = {
//             headers:{
//                 "Content-Type": "application/json",
//                 Authorization:`Bearer ${userInfo.data.token}`
//             }
//         }
//         const {data} = await axios.get(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogArticle/${id}`,config)
//         dispatch({type:GETONE_BLOGWRITER_SUCCESS,payload:[data.data]})
//         console.log(data.data)
//     } catch (error) {
//         dispatch({
//             type: GETONE_BLOGWRITER_FAILED,
//             payload:
//               error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//           });
//     }
// }

// export const deleteBlogAction = (id) => async(dispatch,getState) => {
//     try {
//         dispatch({type:DELETE_BLOGWRITER_REQUEST})
//         const {userLogin:{userInfo}} = getState();
//         const config = {
//             headers:{
//                 "Content-Type": "application/json",
//                 Authorization:`Bearer ${userInfo.data.token}`
//             }
//         }
//         const {data} = await axios.delete(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogArticle/${id}`,config)
//         dispatch({type:DELETE_BLOGWRITER_SUCCESS,payload:data.data})
//         console.log(data.data)
//     } catch (error) {
//         dispatch({
//             type: DELETE_BLOGWRITER_FAILED,
//             payload:
//               error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//           });
//     }
// }

// export const updateBlogAction = (article) => async(dispatch,getState) => {
//     try {
//         dispatch({type:UPDATE_BLOGWRITER_REQUEST})
//         const {userLogin:{userInfo}} = getState();
//         const config = {
//             headers:{
//                 "Content-Type": "application/json",
//                 Authorization:`Bearer ${userInfo.data.token}`
//             }
//         }
//         const {data} = await axios.put(`http://3.237.101.152/api/account/${userInfo.data.account_id}/blogArticle/${article}`,{article},config)
//         dispatch({type:UPDATE_BLOGWRITER_SUCCESS,payload:data.data})
//         console.log(data.data)
//     } catch (error) {
//         dispatch({
//             type: UPDATE_BLOGWRITER_FAILED,
//             payload:
//               error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//           });
//     }
// }
