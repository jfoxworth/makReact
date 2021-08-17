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
import { takeLatest, call, put, all, select } from "@redux-saga/core/effects";
import OrderActionTypes from "./orders.types";
import { firestore, convertCollectionSnapshotToMap } from '../../../firebase/firebase.utils';
import {
  fetchOrdersSuccess,
  fetchOrdersFailure,
  ordersUpdateSuccess,
  ordersUpdateFailure,
  createOrderSuccess,
  createOrderFailure
} from './orders.actions';
import { selectUser } from "../user/user.selector";

// Functions
import { makeNewOrder } from "../../types/makOrder";


export function* fetchOrdersAsync(){

  let user = yield select(selectUser);

  try {
    const ordersRef = firestore.collection('orders');
    const ordersSnapshot = yield ordersRef.where("userId", '==', user.currentUser.id).where("deleted", '==', false).get();
    const ordersArray = yield call(convertCollectionSnapshotToMap, ordersSnapshot);
    if ( ordersArray.length == 0 )
    {
      createNewOrderAsync(true, user.currentUser);
    }
    yield put(fetchOrdersSuccess(ordersArray))
  }catch(error){
    yield put(fetchOrdersFailure(error.message))
  }
}


export function* fetchOrdersStartSagas(){
  yield takeLatest(
    OrderActionTypes.FETCH_ORDERS_START,
    fetchOrdersAsync)
}



export function* createNewOrderSagas(){
  yield takeLatest(
    OrderActionTypes.CREATE_NEW_ORDER_START,
    createNewOrderAsync)
}


// This function creates an order
export function* createNewOrderAsync(payload) {
  let user = yield select(selectUser)
  const ordersRef = firestore.collection(`orders`);
  let newOrder = makeNewOrder(payload.payload.isCart, payload.payload.stage, user.currentUser);

  try {
    yield ordersRef.add(newOrder);
    yield put(createOrderSuccess());
    yield put(fetchOrdersAsync());
  } catch (error) {
    console.log('error creating order', error.message);
    yield put(createOrderFailure());
  }
  
  return ordersRef;

};




export function* updateOrderAsync(payload){
  try {
    const ordersRef = firestore.collection(`orders`);
    ordersRef.doc(payload.order.id).set({...payload.order});
    yield put(ordersUpdateSuccess());
    yield put(fetchOrdersAsync());
  }catch(error){
    yield put(ordersUpdateFailure(error.message));
  }
};

export function* updateOrderStartSagas(){
  yield takeLatest(
    OrderActionTypes.ORDER_UPDATE_START,
    updateOrderAsync)
};



export function* ordersSagas(){
  yield all(
    [call(fetchOrdersStartSagas),
     call(updateOrderStartSagas),
     call(createNewOrderSagas)]
  )
};


