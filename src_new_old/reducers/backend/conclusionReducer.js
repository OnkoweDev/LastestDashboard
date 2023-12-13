import { ADD_CONCLUSION_FAILED, ADD_CONCLUSION_REQUEST, ADD_CONCLUSION_SUCCESS, DELETE_CONCLUSION_FAILED, DELETE_CONCLUSION_REQUEST, DELETE_CONCLUSION_SUCCESS, GETONE_CONCLUSION_FAILED, GETONE_CONCLUSION_REQUEST, GETONE_CONCLUSION_SUCCESS, GET_CONCLUSION_FAILED, GET_CONCLUSION_REQUEST, GET_CONCLUSION_SUCCESS } from "../../constant/backend/conclusionConstant";



export const addConclusionReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_CONCLUSION_REQUEST:
            return {loading:true}
        case ADD_CONCLUSION_SUCCESS:
            return {loading:false, success:true}
        case ADD_CONCLUSION_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getConclusionReducer = (state={conclusions:[]}, action) => {
    switch (action.type) {
        case GET_CONCLUSION_REQUEST:
            return {loading:true}
        case GET_CONCLUSION_SUCCESS:
            return {loading:false, success:true, conclusions:action.payload}
        case GET_CONCLUSION_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const getOneConclusionReducer = (state={conclusion:[]}, action) => {
    switch (action.type) {
        case GETONE_CONCLUSION_REQUEST:
            return {loading:true}
        case GETONE_CONCLUSION_SUCCESS:
            return {loading:false, success:true, conclusion:action.payload}
        case GETONE_CONCLUSION_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}

export const deleteConclusionReducer = (state={}, action) => {
    switch (action.type) {
        case DELETE_CONCLUSION_REQUEST:
            return {loading:true}
        case DELETE_CONCLUSION_SUCCESS:
            return {loading:false, success:true}
        case DELETE_CONCLUSION_FAILED:
            return {loading:false,success:false, error:action.payload}
    
        default:
            return state;
    }
}
