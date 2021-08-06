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
import ProjectActionTypes from "./projects.types";
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';
import {
  fetchProjectsSuccess,
  fetchProjectsFailure,
  projectsUpdateSuccess,
  projectsUpdateFailure,
  fetchProjectsStart
} from './projects.actions';
import { selectUser } from "../user/user.selector";


export function* fetchProjectsAsync(){

  let user = yield select(selectUser);

  try {
    const projectsRef = firestore.collection('projects');
    const projectsSnapshot = yield projectsRef.where("creatorId", '==', user.currentUser.id).where("deleted", '==', false).get();
    const projectsArray = yield call(convertCollectionSnapshotToMap, projectsSnapshot)
    yield put(fetchProjectsSuccess(projectsArray))
  }catch(error){
    yield put(fetchProjectsFailure(error.message))
  }
}

export function* fetchProjectsStartSagas(){
  yield takeLatest(
    ProjectActionTypes.FETCH_PROJECTS_START,
    fetchProjectsAsync)
}



export function* projectsUpdateAsync(payload){

  let thisProject=payload.payload
  try {
    const projectsRef = firestore.collection('projects');
		projectsRef.doc( thisProject.id ).update( thisProject );
    yield put(projectsUpdateSuccess());
    yield put(fetchProjectsStart());
  }catch(error){
    yield put(projectsUpdateFailure(error.message))
  }
}

export function* projectsUpdateStart(thisProject){
  yield takeLatest(
    ProjectActionTypes.PROJECTS_UPDATE_START,
    projectsUpdateAsync)
}


export function* projectsSagas(){
  yield all(
    [call(fetchProjectsStartSagas),
     call(projectsUpdateStart)]
  )
  
}