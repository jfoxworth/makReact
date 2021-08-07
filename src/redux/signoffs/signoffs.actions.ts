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
import designSignoff from '../../types/designSignoff';

// React Items
import SignoffActionTypes from './signoffs.types';

// Firestore items
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';


export const fetchSignoffsStart = () =>({
  type:SignoffActionTypes.FETCH_SIGNOFFS_START
})

export const fetchSignoffsStartAsync = () =>{

  return (dispatch:any) => {

    const signoffsRef = firestore.collection('signoffs');
    dispatch(fetchSignoffsStart())

    signoffsRef.get().then(snapshot =>{
      const signoffsArray = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchSignoffsSuccess(signoffsArray))
    }).catch(error=>dispatch(fetchSignoffsFailure(error)))

  }
}

export const fetchSignoffsSuccess = (signoffsArray:designSignoff[]) =>({
  type:SignoffActionTypes.FETCH_SIGNOFFS_SUCCESS,
  payload:signoffsArray
})


export const fetchSignoffsFailure = (errorMessage:any) =>({
  type:SignoffActionTypes.FETCH_SIGNOFFS_FAILURE,
  payload:errorMessage
})

