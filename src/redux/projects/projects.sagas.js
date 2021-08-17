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
  fetchProjectsStart,
  createProjectSuccess
} from './projects.actions';
import { createVersionStart } from "../versions/versions.actions";
import { selectUser } from "../user/user.selector";

// Functions
import { makeNewProject } from "../../types/makProject";


export function* fetchProjectsAsync(){
  let user = yield select(selectUser);
  try {
    const projectsRef = firestore.collection('projects');
    const projectsSnapshot = yield projectsRef.where("creatorId", '==', user.currentUser.id).where("deleted", '==', false).get();
    const projectsArray = yield call(convertCollectionSnapshotToMap, projectsSnapshot)
    yield put(fetchProjectsSuccess(projectsArray));
  }catch(error){
    yield put(fetchProjectsFailure(error.message))
  }
}

export function* fetchProjectsStartSagas(){
  yield takeLatest(
    ProjectActionTypes.FETCH_PROJECTS_START,
    fetchProjectsAsync)
}



export function* createNewProjectSagas(){
  yield takeLatest(
    ProjectActionTypes.PROJECT_CREATE_START,
    createNewProjectAsync)
}


// This function creates a project
export function* createNewProjectAsync(payload) {
  let user = yield select(selectUser);
  const projectsRef = firestore.collection(`projects`);
  let newProject = makeNewProject(payload.payload.design, payload.payload.user);
  try {
    yield projectsRef.add(newProject).then((docRef) => {
      newProject.id = docRef.id;
    });
    yield put(createProjectSuccess());
    yield put(createVersionStart(newProject, user.currentUser, []));
    yield put(fetchProjectsStart());
  } catch (error) {
    console.log('error creating project', error.message);
    yield put(createProjectFailure());
  }
  
  return projectsRef;

};


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
     call(projectsUpdateStart),
    call(createNewProjectSagas)]
  )
  
}