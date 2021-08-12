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
import UserdataActionTypes from './userdata.types';


const INITIAL_STATE = {
  userdata:[],
  isFetching:false,
  errorMessage:undefined
}


const userdataReducer = (state=INITIAL_STATE, action:any)=>{

  switch (action.type) {
    case UserdataActionTypes.FETCH_USERDATA_START:
      return {
        ...state,
        isFetching:true
      }
      case UserdataActionTypes.FETCH_USERDATA_SUCCESS:
        return {
          ...state,
          userdata:action.payload,
          isFetching:false
      }
      case UserdataActionTypes.FETCH_USERDATA_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
      case UserdataActionTypes.USERDATA_UPDATE_START:
        return {
          ...state,
          isFetching:true,
          userdata:action.payload
      }
      case UserdataActionTypes.USERDATA_UPDATE_SUCCESS:
        return {
          ...state,
          isFetching:false
      }
      case UserdataActionTypes.USERDATA_UPDATE_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
      

    default:
      return state;
  }
}

export default userdataReducer