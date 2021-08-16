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
} from './orders.actions';
import { selectUser } from "../user/user.selector";

// Models
import makOrder from "../../types/makOrder";
import UserData from "../../types/userData";

// Functions
import { makeNewOrder } from "../../types/makOrder";
import makVersion from "../../types/makVersion";


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
  let user = yield select(selectUser)
  yield takeLatest(
    OrderActionTypes.CREATE_NEW_ORDER_START,
    createNewOrderAsync(false, user)
    )
}


// This function creates an order
export const createNewOrderAsync = async (isCart, user) => {

  const ordersRef = firestore.collection(`orders`);

  let newOrder = makeNewOrder();
  newOrder.isCart =  isCart;
  newOrder.userId = user.id;

  try {
    await ordersRef.add(newOrder);
    fetchOrdersAsync();
  } catch (error) {
    console.log('error creating order', error.message);
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
     call(updateOrderStartSagas)]
  )
};


