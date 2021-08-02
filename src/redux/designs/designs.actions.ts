import makDesign from '../../types/makDesign';
import DesignActionTypes from './designs.types';

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
