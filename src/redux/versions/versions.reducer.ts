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

// Redux items
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