import makVersion from '../../types/makVersion';
import VersionsActionTypes from './versions.types';

// Firestore items
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';


export const fetchVersionsStart = () =>({
  type:VersionsActionTypes.FETCH_VERSIONS_START
})

export const fetchVersionsStartAsync = () =>{
  return (dispatch:any) => {

    const versionsRef = firestore.collection('versions');
    dispatch(fetchVersionsStart())

    versionsRef.get().then(snapshot =>{
      const versionsArray = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchVersionsSuccess(versionsArray))
    }).catch(error=>dispatch(fetchVersionsFailure(error)))

  }
}

export const fetchVersionsSuccess = (versionsArray:makVersion[]) =>({
  type:VersionsActionTypes.FETCH_VERSIONS_SUCCESS,
  payload:versionsArray
})


export const fetchVersionsFailure = (errorMessage:any) =>({
  type:VersionsActionTypes.FETCH_VERSIONS_FAILURE,
  payload:errorMessage
})
