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
import SignoffReqActionTypes from './signoffReqs.types';


const INITIAL_STATE = {
  signoffReqs:[],
  isFetching:false,
  errorMessage:undefined
}


const signoffReqsReducer = (state=INITIAL_STATE, action:any)=>{

  switch (action.type) {
    case SignoffReqActionTypes.FETCH_SIGNOFFREQS_START:
      return {
        ...state,
        isFetching:true
      }
      case SignoffReqActionTypes.FETCH_SIGNOFFREQS_SUCCESS:
        console.log(action)
        return {
          ...state,
          signoffReqs:action.payload,
          isFetching:false
      }
      case SignoffReqActionTypes.FETCH_SIGNOFFREQS_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
      

    default:
      return state;
  }
}

export default signoffReqsReducer