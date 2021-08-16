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

// Models
import UserActionTypes from './user.types';


const INITIAL_STATE = {
  currentUser:null,
  error:null
}


const userReducer = (state=INITIAL_STATE, action:any)=>{

  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        payload:action.payload,
        error:null
      }
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser:action.payload,
        error:null
      }
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error:action.payload
      }
      case UserActionTypes.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          error: null
      };
      case UserActionTypes.SIGN_OUT_FAILURE:
        return {
          ...state,
          error: action.payload
      };    
      case UserActionTypes.CHECK_USER_SESSION:
        return {
          ...state,
      };

      case UserActionTypes.SIGN_UP_FAILURE:
      default:
      return state;
  }
}

export default userReducer