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
import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import DesignActionTypes from "./designs.types";
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';
import {
  fetchDesignsSuccess,
  fetchDesignsFailure
} from './designs.actions';


export function* fetchDesignsAsync(){
  try {
    const designsRef = firestore.collection('designs');
    const designsSnapshot = yield designsRef.get();
    const designsArray = yield call(convertCollectionSnapshotToMap, designsSnapshot)
    yield put(fetchDesignsSuccess(designsArray))
  }catch(error){
    yield put(fetchDesignsFailure(error.message))
  }
}

export function* fetchDesignsStart(){
  yield takeLatest(
    DesignActionTypes.FETCH_DESIGNS_START,
    fetchDesignsAsync)
}

export function* designsSagas(){
  yield all(
    [call(fetchDesignsStart)]
    )
  
}