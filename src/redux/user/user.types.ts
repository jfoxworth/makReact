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

const UserActionTypes = {
  SET_CURRENT_USER : 'SET_CURRENT_USER',
  EMAIL_SIGN_IN_START : 'EMAIL_SIGN_IN_START',
  EMAIL_SIGN_IN_FAILURE : 'EMAIL_SIGN_IN_FAILURE',
  EMAIL_SIGN_IN_SUCCESS : 'EMAIL_SIGN_IN_SUCCESS',
  CHECK_USER_SESSION : 'CHECK_USER_SESSION',
  SIGN_OUT_START: 'SIGN_OUT_START',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_SUCCESS:'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE:'SIGN_UP_FAILURE'
}

export default UserActionTypes