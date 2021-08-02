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