import makProject from '../../types/makProject';
import ProjectActionTypes from './projects.types';

// Firestore items
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';


export const fetchProjectsStart = () =>({
  type:ProjectActionTypes.FETCH_PROJECTS_START
})

export const fetchProjectsStartAsync = () =>{
  console.log('Here')
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
