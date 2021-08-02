import User from '../../types/user';
import UserActionTypes from './user.types';

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