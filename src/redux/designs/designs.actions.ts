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
import DesignActionTypes from './designs.types';

// Models
import makDesign from '../../types/makDesign';

// Firestore items
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';


export const fetchDesignsStart = () =>({
  type:DesignActionTypes.FETCH_DESIGNS_START
})

export const fetchDesignsStartAsync = () =>{
  return (dispatch:any) => {

    const designsRef = firestore.collection('designs');
    dispatch(fetchDesignsStart())

    designsRef.get().then(snapshot =>{
      const designsArray = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchDesignsSuccess(designsArray))
    }).catch(error=>dispatch(fetchDesignsFailure(error)))

  }
}

export const fetchDesignsSuccess = (designsArray:makDesign[]) =>({
  type:DesignActionTypes.FETCH_DESIGNS_SUCCESS,
  payload:designsArray
})


export const fetchDesignsFailure = (errorMessage:any) =>({
  type:DesignActionTypes.FETCH_DESIGNS_FAILURE,
  payload:errorMessage
})
