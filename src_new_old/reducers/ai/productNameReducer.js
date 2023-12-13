import { ADD_PRODUCTNAME_FAILED, ADD_PRODUCTNAME_REQUEST, ADD_PRODUCTNAME_SUCCESS } from "../../constant/ai/productNameConstant";

export const productNameReducer = (state={product:[]}, action) => {
    switch (action.type) {
        case ADD_PRODUCTNAME_REQUEST:
            return {loading:true}
        case ADD_PRODUCTNAME_SUCCESS:
            return {loading:false, success:true, product:action.payload}
        case ADD_PRODUCTNAME_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}