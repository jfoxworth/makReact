import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser:null,
  error:null
}


const userReducer = (state=INITIAL_STATE, action:any)=>{

  switch (action.type) {
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