import { ADD_PROJECT_FAILED, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, GET_PROJECT_FAILED, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS } from "../../constant/backend/projectConstant";

export const addProjectReducer = (state={projects:[]},action) => {
    switch(action.type){
        case ADD_PROJECT_REQUEST:
            return {loading:true}
        case ADD_PROJECT_SUCCESS:
            return {laoding:false,success:true, projects:action.payload}
        case ADD_PROJECT_FAILED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }   
}

export const getProjectReducer = (state={project:[]},action) =>{
    switch (action.type) {
        case GET_PROJECT_REQUEST:
            return {loading: true}
        case GET_PROJECT_SUCCESS:
            return {loading:false, project:action.payload}
        case GET_PROJECT_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }
}