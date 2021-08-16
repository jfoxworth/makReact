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
import makVersion from '../../types/makVersion';

// Redux items
import VersionsActionTypes from './versions.types';

// Firestore items
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';
import makProject from '../../types/makProject';
import UserData from '../../types/userData';


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
});


export const fetchVersionsFailure = (errorMessage:any) =>({
  type:VersionsActionTypes.FETCH_VERSIONS_FAILURE,
  payload:errorMessage
});





export const versionUpdateStart = (version:makVersion) =>({
  type:VersionsActionTypes.VERSION_UPDATE_START,
  payload:version
})



export const versionUpdateSuccess = () =>({
  type:VersionsActionTypes.VERSION_UPDATE_SUCCESS
})


export const versionUpdateFailure = (errorMessage:any) =>({
  type:VersionsActionTypes.VERSION_UPDATE_FAILURE,
  payload:errorMessage
})




export const createVersionStart = (payload:{project:makProject, user:UserData, measurements:[]}) =>({
  type:VersionsActionTypes.VERSION_CREATE_START,
  payload:{...payload}
})

export const createVersionSuccess = () =>({
  type:VersionsActionTypes.VERSION_CREATE_SUCCESS
})


export const createVersionFailure = (errorMessage:any) =>({
  type:VersionsActionTypes.VERSION_CREATE_FAILURE,
  payload:errorMessage
})