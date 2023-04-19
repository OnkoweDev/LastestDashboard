import { ADD_EMAIL_FAILED, ADD_EMAIL_REQUEST, ADD_EMAIL_SUCCESS } from "../../actions/ai/emailConstant";

export const emailSubjectReducer = (state={email:[]},action) => {
    switch (action.type) {
        case ADD_EMAIL_REQUEST:
            return {loading:true}
        case ADD_EMAIL_SUCCESS:
            return {loading:false, success:true, email:action.payload}   
        case ADD_EMAIL_FAILED:
            return {loading:false, success:false, error:action.payload} 
        default:
            return state;
    }
}