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
import SignoffActionTypes from "./signoffs.types";
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';
import {
  fetchSignoffsSuccess,
  fetchSignoffsFailure,
  fetchSignoffsStart
} from './signoffs.actions';

import designSignoff from '../../types/designSignoff';


export function* fetchSignoffsAsync(payload:any){

  try {
    const signoffsRef = firestore.collection('designSignoffs');
    const signoffsSnapshot:any[] = yield signoffsRef.where("itemId", '==', payload.payload).where("deleted", '==', false).get();
    const signoffsArray:designSignoff[] = yield call(convertCollectionSnapshotToMap, signoffsSnapshot)
    yield put(fetchSignoffsSuccess(signoffsArray))
  }catch(error){
    yield put(fetchSignoffsFailure(error.message))
  }
}

export function* fetchSignoffsStartSagas(){
  yield takeLatest(
    SignoffActionTypes.FETCH_SIGNOFFS_START,
    fetchSignoffsAsync)
}




export function* signoffsSagas(){
  yield all(
    [call(fetchSignoffsStartSagas)]
  )
  
}