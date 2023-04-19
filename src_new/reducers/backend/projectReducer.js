import { ADD_PROJECT_FAILED, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, DELETE_PROJECT_FAILED, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, GETONE_PROJECT_FAILED, GETONE_PROJECT_REQUEST, GETONE_PROJECT_SUCCESS, GET_PROJECT_FAILED, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS } from "../../constant/backend/projectConstant";

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


export const getOneProjectReducer = (state={proj:[]},action) =>{
    switch (action.type) {
        case GETONE_PROJECT_REQUEST:
            return {loading: true}
        case GETONE_PROJECT_SUCCESS:
            return {loading:false, success: true, proj:action.payload}
        case GETONE_PROJECT_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }
}

export const deleteProjectReducer = (state={},action) =>{
    switch (action.type) {
        case DELETE_PROJECT_REQUEST:
            return {loading: true}
        case DELETE_PROJECT_SUCCESS:
            return {loading:false, success: true}
        case DELETE_PROJECT_FAILED:
            return {loading:false, error:action.payload}
        default:
            return state;
    }
}