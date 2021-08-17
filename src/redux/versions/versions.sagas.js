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

import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import VersionActionTypes from "./versions.types";
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';
import {
  fetchVersionsStart,
  fetchVersionsSuccess,
  fetchVersionsFailure,
  versionUpdateStart,
  versionUpdateSuccess,
  versionUpdateFailure,
  createVersionSuccess,
  createVersionFailure
} from './versions.actions';

import { makeNewVersion } from "../../types/makVersion";


export function* fetchVersionsAsync(){
  try {
    const versionsRef = firestore.collection('versions');
    const versionsSnapshot = yield versionsRef.get();
    const versionsArray = yield call(convertCollectionSnapshotToMap, versionsSnapshot)
    yield put(fetchVersionsSuccess(versionsArray))
  }catch(error){
    yield put(fetchVersionsFailure(error.message))
  }
}

export function* fetchVersionsStartSagas(){
  yield takeLatest(
    VersionActionTypes.FETCH_VERSIONS_START,
    fetchVersionsAsync)
}






export function* createNewVersionSagas(){
  yield takeLatest(
    VersionActionTypes.VERSION_CREATE_START,
    createNewVersionAsync)
}


// This function creates a version
export function* createNewVersionAsync(payload) {
  const versionsRef = firestore.collection(`versions`);
  let newVersion = makeNewVersion(payload.payload.project, payload.payload.user, payload.payload.measurements);
  try {
    versionsRef.add(newVersion);
    yield put(fetchVersionsStart());
    yield put(createVersionSuccess());
  } catch (error) {
    console.log('error creating version', error.message);
    yield put(createVersionFailure());
  }
  
  return versionsRef;

};






export function* versionsUpdateAsync(payload){

  let thisVersion=payload.payload
  try {
    const versionsRef = firestore.collection('versions');
		versionsRef.doc( thisVersion.id ).update( thisVersion );
    yield put(versionsUpdateSuccess());
    yield put(fetchVersionsStart());
  }catch(error){
    yield put(versionsUpdateFailure(error.message))
  }
}

export function* versionsUpdateStart(thisVersion){
  yield takeLatest(
    VersionActionTypes.VERSIONS_UPDATE_START,
    versionsUpdateAsync)
}






export function* versionsSagas(){
  yield all(
    [call(fetchVersionsStartSagas),
     call(versionUpdateStart),
     call(createNewVersionSagas)])
  
}