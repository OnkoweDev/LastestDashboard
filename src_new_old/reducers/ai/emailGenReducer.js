import { ADD_EMAILGEN_FAILED, ADD_EMAILGEN_REQUEST, ADD_EMAILGEN_SUCCESS } from "../../constant/ai/emailGenConstant";

export const emailGeneratorReducer = (state={gene:[]},action) => {
    switch (action.type) {
        case ADD_EMAILGEN_REQUEST:
            return {loading:true}
        case ADD_EMAILGEN_SUCCESS:
            return {loading:false, success:true, gene:action.payload}
        case ADD_EMAILGEN_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}