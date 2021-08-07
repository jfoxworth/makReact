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
import signoffReq from '../../types/signoffReq';

// React Items
import SignoffReqActionTypes from '../signoffReqs/signoffReqs.types';

// Firestore items
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';


export const fetchSignoffReqsStart = (projectId:string) =>({
  type:SignoffReqActionTypes.FETCH_SIGNOFFREQS_START,
  payload:projectId
})

export const fetchSignoffReqStartAsync = () =>{

  return (dispatch:any) => {

    const signoffReqRef = firestore.collection('signoffReqs');
//    dispatch(fetchSignoffReqsStart())

    signoffReqRef.get().then(snapshot =>{
      const signoffReqsArray = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchSignoffReqsSuccess(signoffReqsArray))
    }).catch(error=>dispatch(fetchSignoffReqsFailure(error)))

  }
}

export const fetchSignoffReqsSuccess = (signoffReqsArray:signoffReq[]) =>({
  type:SignoffReqActionTypes.FETCH_SIGNOFFREQS_SUCCESS,
  payload:signoffReqsArray
})


export const fetchSignoffReqsFailure = (errorMessage:any) =>({
  type:SignoffReqActionTypes.FETCH_SIGNOFFREQS_FAILURE,
  payload:errorMessage
})

