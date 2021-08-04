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
import DesignActionTypes from './designs.types';


const INITIAL_STATE = {
  designs:[],
  isFetching:false,
  errorMessage:undefined
}


const designsReducer = (state=INITIAL_STATE, action:any)=>{

  switch (action.type) {
    case DesignActionTypes.FETCH_DESIGNS_START:
      return {
        ...state,
        isFetching:true
      }
      case DesignActionTypes.FETCH_DESIGNS_SUCCESS:
        return {
          ...state,
          designs:action.payload,
          isFetching:false
      }
      case DesignActionTypes.FETCH_DESIGNS_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
    

    default:
      return state;
  }
}

export default designsReducer