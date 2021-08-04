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
  fetchVersionsSuccess,
  fetchVersionsFailure
} from './versions.actions';

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

export function* fetchVersionsStart(){
  yield takeLatest(
    VersionActionTypes.FETCH_VERSIONS_START,
    fetchVersionsAsync)
}



export function* versionsSagas(){
  yield all(
    [call(fetchVersionsStart)]
    )
  
}