import { ADD_PRODUCTDESC_FAILED, ADD_PRODUCTDESC_REQUEST, ADD_PRODUCTDESC_SUCCESS, DELETE_PRODUCTDESC_FAILED, DELETE_PRODUCTDESC_REQUEST, DELETE_PRODUCTDESC_SUCCESS, GETONE_PRODUCTDESC_FAILED, GETONE_PRODUCTDESC_REQUEST, GETONE_PRODUCTDESC_SUCCESS, GET_PRODUCTDESC_FAILED, GET_PRODUCTDESC_REQUEST, GET_PRODUCTDESC_SUCCESS } from "../../constant/backend/productDescConstant";

export const addProductDescReducer = (state={},action) => {
    switch(action.type){
        case ADD_PRODUCTDESC_REQUEST:
            return {loading:true}
        case ADD_PRODUCTDESC_SUCCESS:
            return {loading:false, success:true}
        case ADD_PRODUCTDESC_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getProductDescReducer = (state={productDescs:[]},action) => {
    switch(action.type){
        case GET_PRODUCTDESC_REQUEST:
            return {loading:true}
        case GET_PRODUCTDESC_SUCCESS:
            return {loading:false, success:true, productDescs:action.payload}
        case GET_PRODUCTDESC_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneProductDescReducer = (state={productDesc:[]},action) => {
    switch(action.type){
        case GETONE_PRODUCTDESC_REQUEST:
            return {loading:true}
        case GETONE_PRODUCTDESC_SUCCESS:
            return {loading:false, success:true, productDesc:action.payload}
        case GETONE_PRODUCTDESC_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteProductDescReducer = (state={},action) => {
    switch(action.type){
        case DELETE_PRODUCTDESC_REQUEST:
            return {loading:true}
        case DELETE_PRODUCTDESC_SUCCESS:
            return {loading:false, success:true}
        case DELETE_PRODUCTDESC_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
