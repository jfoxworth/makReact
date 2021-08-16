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
import makOrder from '../../types/makOrder';
import makVersion from '../../types/makVersion';

// React Items
import OrderActionTypes from './orders.types';

// Firestore items
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';


export const fetchOrdersStart = () =>({
  type:OrderActionTypes.FETCH_ORDERS_START
})

export const fetchOrdersStartAsync = () =>{

  return (dispatch:any) => {

    const ordersRef = firestore.collection('orders');
    dispatch(fetchOrdersStart())

    ordersRef.get().then(snapshot =>{
      const ordersArray = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchOrdersSuccess(ordersArray))
    }).catch(error=>dispatch(fetchOrdersFailure(error)))

  }
}

export const fetchOrdersSuccess = (ordersArray:makOrder[]) =>({
  type:OrderActionTypes.FETCH_ORDERS_SUCCESS,
  payload:ordersArray
})


export const fetchOrdersFailure = (errorMessage:any) =>({
  type:OrderActionTypes.FETCH_ORDERS_FAILURE,
  payload:errorMessage
})


export const orderUpdateStart = (order:makOrder) =>({
  type:OrderActionTypes.ORDER_UPDATE_START,
  order:order
})


export const ordersUpdateSuccess = () =>({
  type:OrderActionTypes.ORDER_UPDATE_SUCCESS
})


export const ordersUpdateFailure = (errorMessage:any) =>({
  type:OrderActionTypes.ORDER_UPDATE_FAILURE,
  payload:errorMessage
})


export const createNewOrderStart = (isCart:boolean=false) =>({
  type:OrderActionTypes.CREATE_NEW_ORDER_START,
  payload:isCart
});

