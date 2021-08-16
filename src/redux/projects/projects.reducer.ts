/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*
*/

// Redux Items
import ProjectActionTypes from './projects.types';


const INITIAL_STATE = {
  projects:[],
  isFetching:false,
  errorMessage:undefined
}


const projectsReducer = (state=INITIAL_STATE, action:any)=>{

  switch (action.type) {
    case ProjectActionTypes.FETCH_PROJECTS_START:
      return {
        ...state,
        isFetching:true
      }
      case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
        return {
          ...state,
          projects:action.payload,
          isFetching:false
      }
      case ProjectActionTypes.FETCH_PROJECTS_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
      case ProjectActionTypes.PROJECTS_UPDATE_START:
        return {
          ...state,
          isFetching:true,
          project:action.payload
      }
      case ProjectActionTypes.PROJECTS_UPDATE_SUCCESS:
        return {
          ...state,
          isFetching:false
      }
      case ProjectActionTypes.PROJECTS_UPDATE_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
      case ProjectActionTypes.PROJECT_CREATE_START:
        return {
          ...state,
          isFetching:false,
          design:action.payload
      }
      case ProjectActionTypes.PROJECT_CREATE_SUCCESS:
        return {
          ...state,
          isFetching:false
      }
      case ProjectActionTypes.PROJECT_CREATE_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
      

    default:
      return state;
  }
}

export default projectsReducer