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
import UserActionTypes from './user.types';

// Models
import User from '../../types/user';

export const setCurrentUser = (user:User) =>({
  type:UserActionTypes.SET_CURRENT_USER,
  payload:user
});

export const emailSignInStart = (emailAndPassWord:any) =>({
  type:UserActionTypes.EMAIL_SIGN_IN_START,
  payload:emailAndPassWord
})

export const emailSignInSuccess = (user:any) =>({
  type:UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload : user
});

export const emailSignInFailure = (error:any) =>({
  type:UserActionTypes.EMAIL_SIGN_IN_START,
  payload:error
});

export const checkUserSession = () =>({
  type:UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error:any) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = (userCredentials:any) => ({
  type:UserActionTypes.SIGN_UP_START,
  payload:userCredentials
});

export const signUpSuccess = ({user, additionalData}:{user:any, additionalData:any})=>({
  type:UserActionTypes.SIGN_UP_SUCCESS,
  payload: {user, additionalData}
});

export const signUpFailure = (error:any) =>({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload:error
})