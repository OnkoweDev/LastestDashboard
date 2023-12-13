import { ADD_PRODUCT_FAILED, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from "../../constant/ai/productConstant";

export const addProductReducer = (state={products:[]}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_REQUEST:
            return {loading:true}
        case ADD_PRODUCT_SUCCESS:
            return {loading:false, success:true, products:action.payload}
        case ADD_PRODUCT_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}