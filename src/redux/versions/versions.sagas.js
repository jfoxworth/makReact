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