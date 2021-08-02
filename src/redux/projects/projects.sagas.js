import { takeLatest, call, put, all, select } from "@redux-saga/core/effects";
import ProjectActionTypes from "./projects.types";
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';
import {
  fetchProjectsSuccess,
  fetchProjectsFailure
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

export function* fetchProjectsStart(){
  yield takeLatest(
    ProjectActionTypes.FETCH_PROJECTS_START,
    fetchProjectsAsync)
}



export function* projectsSagas(){
  yield all(
    [call(fetchProjectsStart)]
    )
  
}