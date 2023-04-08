import { ADD_PRODUCTNAME_FAILED, ADD_PRODUCTNAME_REQUEST, ADD_PRODUCTNAME_SUCCESS, DELETE_PRODUCTNAME_FAILED, DELETE_PRODUCTNAME_REQUEST, DELETE_PRODUCTNAME_SUCCESS, GETONE_PRODUCTNAME_FAILED, GETONE_PRODUCTNAME_REQUEST, GETONE_PRODUCTNAME_SUCCESS, GET_PRODUCTNAME_FAILED, GET_PRODUCTNAME_REQUEST, GET_PRODUCTNAME_SUCCESS } from "../../constant/backend/productNameConstant";


export const addProductNameReducer = (state={},action) => {
    switch(action.type){
        case ADD_PRODUCTNAME_REQUEST:
            return {loading:true}
        case ADD_PRODUCTNAME_SUCCESS:
            return {loading:false, success:true}
        case ADD_PRODUCTNAME_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getProductNameReducer = (state={productNames:[]},action) => {
    switch(action.type){
        case GET_PRODUCTNAME_REQUEST:
            return {loading:true}
        case GET_PRODUCTNAME_SUCCESS:
            return {loading:false, success:true, productNames:action.payload}
        case GET_PRODUCTNAME_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}

export const getOneProductNameReducer = (state={productName:[]},action) => {
    switch(action.type){
        case GETONE_PRODUCTNAME_REQUEST:
            return {loading:true}
        case GETONE_PRODUCTNAME_SUCCESS:
            return {loading:false, success:true, productName:action.payload}
        case GETONE_PRODUCTNAME_FAILED:
            return {loading:false,success:false, error:action.payload}
        default:
            return state;
    }   
}

export const deleteProductNameReducer = (state={},action) => {
    switch(action.type){
        case DELETE_PRODUCTNAME_REQUEST:
            return {loading:true}
        case DELETE_PRODUCTNAME_SUCCESS:
            return {loading:false, success:true}
        case DELETE_PRODUCTNAME_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }   
}
