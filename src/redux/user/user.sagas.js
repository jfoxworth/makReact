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

import { takeLatest, put, all, call  } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import { auth, createUserProfileDocument, getCurrentUser } from '../../../firebase/firebase.utils';
import { emailSignInSuccess, 
         emailSignInFailure,
         signOutSuccess, 
         signOutFailure,
         signUpSuccess,
         signUpFailure } from "./user.actions";
import { fetchProjectsStart } from '../projects/projects.actions';
import { fetchVersionsStart } from "../versions/versions.actions";
import { projectsUpdateStart } from '../projects/projects.actions';


export function* signInWithEmail({payload:{email, password}}){
  try{
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      emailSignInSuccess({id:userSnapshot.id, ...userSnapshot.data()})
    )
    yield put(fetchProjectsStart());
  }catch(error){
    yield put(emailSignInFailure(error))
  }
}

export function* onEmailSignInStart(){
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated(){
  try{
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(
      emailSignInSuccess({id:userSnapshot.id, ...userSnapshot.data()})
    )
    yield put(fetchProjectsStart());
    yield put(fetchVersionsStart());
  }catch(error){
    yield put(emailSignInFailure(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onCheckUserSession(){
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}


export function* signUp({payload:{email, password, displayName}}){
  try{
    const { user } = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );
    yield put(signUpSuccess({user, additionalData : {displayName}}))
  }catch (error)
  {
    yield put(signUpFailure(error))
  }
}

export function* onSignUpStart(){
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp )
}

export function* signInAfterSignUp({payload:{user, additionalData}}){
  const userRef = yield call(createUserProfileDocument, user);
  const userSnapshot = yield userRef.get();
  yield put(
    emailSignInSuccess({id:userSnapshot.id, ...userSnapshot.data()})
  )
}

export function* onSignUpSuccess(){
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas(){
  yield all(
    [call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)]
    )
}