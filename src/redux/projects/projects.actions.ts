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
