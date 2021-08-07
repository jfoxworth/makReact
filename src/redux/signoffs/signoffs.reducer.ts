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
import SignoffActionTypes from './signoffs.types';


const INITIAL_STATE = {
  signoffs:[],
  isFetching:false,
  errorMessage:undefined
}


const signoffsReducer = (state=INITIAL_STATE, action:any)=>{

  switch (action.type) {
    case SignoffActionTypes.FETCH_SIGNOFFS_START:
      return {
        ...state,
        isFetching:true
      }
      case SignoffActionTypes.FETCH_SIGNOFFS_SUCCESS:
        return {
          ...state,
          signoffs:action.payload,
          isFetching:false
      }
      case SignoffActionTypes.FETCH_SIGNOFFS_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
      

    default:
      return state;
  }
}

export default signoffsReducer