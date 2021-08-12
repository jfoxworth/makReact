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
import userData from '../../types/userData';

// React Items
import UserdataActionTypes from './userdata.types';

// Firestore items
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';


export const fetchUserdataStart = (userId:string) =>({
  type:UserdataActionTypes.FETCH_USERDATA_START,
  payload:userId
})

export const fetchUserdataStartAsync = () =>{

  return (dispatch:any) => {

    const userdataRef = firestore.collection('users');
//    dispatch(fetchUserdataStart())

    userdataRef.get().then(snapshot =>{
      const userdataArray = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchUserdataSuccess(userdataArray))
    }).catch(error=>dispatch(fetchUserdataFailure(error)))

  }
}

export const fetchUserdataSuccess = (userdataArray:userData[]) => {
  console.log('here')
  console.log(userdataArray)  
  return ({
  type:UserdataActionTypes.FETCH_USERDATA_SUCCESS,
  payload:userdataArray
})
}


export const fetchUserdataFailure = (errorMessage:any) =>({
  type:UserdataActionTypes.FETCH_USERDATA_FAILURE,
  payload:errorMessage
})




export const userdataUpdateStart = (project:makProject) =>({
  type:UserdataActionTypes.USERDATA_UPDATE_START,
  payload:project
})



export const userdataUpdateSuccess = () =>({
  type:UserdataActionTypes.USERDATA_UPDATE_SUCCESS
})


export const userdataUpdateFailure = (errorMessage:any) =>({
  type:UserdataActionTypes.USERDATA_UPDATE_FAILURE,
  payload:errorMessage
})
