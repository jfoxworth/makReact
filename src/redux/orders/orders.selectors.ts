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

// Redux items
import { createSelector } from 'reselect';

// Models
import makOrder from '../../types/makOrder';

export const selectOrders = (state:any) => {
  return state?.orders;
}

export const selectCart = (state:any) => {
  console.log(state?.orders.orders.filter((order:makOrder)=>order.isCart))
  return state?.orders.orders.filter((order:makOrder)=>order.isCart);
}

export const selectIsOrdersFetching = createSelector(
  [selectOrders],
  orders => orders.isFetching
)