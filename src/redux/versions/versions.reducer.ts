import VersionActionTypes from './versions.types';

const INITIAL_STATE = {
  versions:[],
  isFetching:false,
  errorMessage:undefined
}


const versionsReducer = (state=INITIAL_STATE, action:any)=>{

  switch (action.type) {
    case VersionActionTypes.FETCH_VERSIONS_START:
      return {
        ...state,
        isFetching:true
      }
      case VersionActionTypes.FETCH_VERSIONS_SUCCESS:
        return {
          ...state,
          versions:action.payload,
          isFetching:false
      }
      case VersionActionTypes.FETCH_VERSIONS_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
    

    default:
      return state;
  }
}

export default versionsReducer