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
import { takeLatest, take, call, put, all, select } from "@redux-saga/core/effects";
import UserdataActionTypes from "./userdata.types";
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';
import {
  fetchUserdataSuccess,
  fetchUserdataFailure,
  userdataUpdateSuccess,
  userdataUpdateFailure,
  fetchUserdataStart
} from './userdata.actions';
import { selectUserdata } from "./userdata.selectors";

export function* fetchUserdataAsync(payload){

  try {
    const userdataRef = firestore.collection('users');
    const userdataSnapshot = yield userdataRef.where("uid", '==', payload.payload).get();
    const userdataArray = yield call(convertCollectionSnapshotToMap, userdataSnapshot);
    let currentUserdata = yield select(selectUserdata);
    let currentUserdataArray = currentUserdata.userdata;
    currentUserdataArray.push(userdataArray[0]);


    yield put(fetchUserdataSuccess(currentUserdataArray));
  }catch(error){
    yield put(fetchUserdataFailure(error.message))
  }
}

export function* fetchUserdataStartSagas(payload){
  yield takeLatest(
    UserdataActionTypes.FETCH_USERDATA_START,
    fetchUserdataAsync)
}



export function* userdataUpdateAsync(payload){

  let thisUser=payload.payload
  try {
    const userdataRef = firestore.collection('users');
		userdataRef.doc( thisUser.id ).update( thisUser );
    yield put(userdataUpdateSuccess());
    yield put(fetchUserdataStart());
  }catch(error){
    yield put(userdataUpdateFailure(error.message))
  }
}

export function* userdataUpdateStart(thisUser){
  yield takeLatest(
    UserdataActionTypes.USERDATA_UPDATE_START,
    userdataUpdateAsync)
}


export function* userdataSagas(){
  yield all(
    [call(fetchUserdataStartSagas),
     call(userdataUpdateStart)]
  )
  
}