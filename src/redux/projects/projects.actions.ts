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

// Models
import makProject from '../../types/makProject';
import makDesign from '../../types/makDesign';
import UserData from '../../types/userData';

// React Items
import ProjectActionTypes from './projects.types';

// Firestore items
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';


export const fetchProjectsStart = () =>({
  type:ProjectActionTypes.FETCH_PROJECTS_START
})

export const fetchProjectsStartAsync = () =>{

  return (dispatch:any) => {

    const projectsRef = firestore.collection('projects');
    dispatch(fetchProjectsStart())

    projectsRef.get().then(snapshot =>{
      const projectsArray = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchProjectsSuccess(projectsArray))
    }).catch(error=>dispatch(fetchProjectsFailure(error)))

  }
}

export const fetchProjectsSuccess = (projectsArray:makProject[]) =>({
  type:ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
  payload:projectsArray
})


export const fetchProjectsFailure = (errorMessage:any) =>({
  type:ProjectActionTypes.FETCH_PROJECTS_FAILURE,
  payload:errorMessage
})




export const projectsUpdateStart = (project:makProject) =>({
  type:ProjectActionTypes.PROJECTS_UPDATE_START,
  payload:project
})



export const projectsUpdateSuccess = () =>({
  type:ProjectActionTypes.PROJECTS_UPDATE_SUCCESS
})


export const projectsUpdateFailure = (errorMessage:any) =>({
  type:ProjectActionTypes.PROJECTS_UPDATE_FAILURE,
  payload:errorMessage
})




export const createProjectStart = (payload:{design:makDesign, user:UserData}) =>({
  type:ProjectActionTypes.PROJECT_CREATE_START,
  payload:{...payload}
})

export const createProjectSuccess = () =>({
  type:ProjectActionTypes.PROJECT_CREATE_SUCCESS
})


export const createProjectFailure = (errorMessage:any) =>({
  type:ProjectActionTypes.PROJECT_CREATE_FAILURE,
  payload:errorMessage
})