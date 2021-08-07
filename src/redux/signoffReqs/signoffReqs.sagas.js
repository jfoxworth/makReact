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
import { takeLatest, call, put, all, select } from "@redux-saga/core/effects";
import SignoffReqActionTypes from "./signoffReqs.types";
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';
import {
  fetchSignoffReqsSuccess,
  fetchSignoffReqsFailure,
  fetchSignoffReqsStart
} from './signoffReqs.actions';
import { selectUser } from "../user/user.selector";


export function* fetchSignoffReqsAsync(payload){

  try {
    const signoffReqRef = firestore.collection('signoffReqs');
    const signoffReqsSnapshot = yield signoffReqRef.where("itemId", '==', payload.payload).get();
    const signoffReqsArray = yield call(convertCollectionSnapshotToMap, signoffReqsSnapshot)
    yield put(fetchSignoffReqsSuccess(signoffReqsArray))
  }catch(error){
    yield put(fetchSignoffReqsFailure(error.message))
  }
}

export function* fetchSignoffReqsStartSagas(projectId){
  yield takeLatest(
    SignoffReqActionTypes.FETCH_SIGNOFFREQS_START,
    fetchSignoffReqsAsync)
}



export function* signoffReqsUpdateAsync(payload){

  let thisSignoffReq=payload.payload
  try {
    const signoffReqRef = firestore.collection('signoffReq');
		signoffReqRef.doc( thisSignoffReq.id ).update( thisSignoffReq );
    yield put(signoffReqsUpdateSuccess());
    yield put(fetchSignoffReqsStart());
  }catch(error){
    yield put(signoffReqsUpdateFailure(error.message))
  }
}

export function* signoffReqsUpdateStart(thisSignoffReq){
  yield takeLatest(
    SignoffReqActionTypes.SIGNOFFREQS_UPDATE_START,
    signoffReqsUpdateAsync)
}


export function* signoffReqsSagas(){
  yield all(
    [call(fetchSignoffReqsStartSagas),
     call(signoffReqsUpdateStart)]
  )
  
}