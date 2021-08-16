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
import OrderActionTypes from './orders.types';


const INITIAL_STATE = {
  orders:[],
  isFetching:false,
  errorMessage:undefined
}


const ordersReducer = (state=INITIAL_STATE, action:any)=>{

  switch (action.type) {
    case OrderActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        isFetching:true
      }
      case OrderActionTypes.FETCH_ORDERS_SUCCESS:
        return {
          ...state,
          orders:action.payload,
          isFetching:false
      }
      case OrderActionTypes.FETCH_ORDERS_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
      case OrderActionTypes.ORDER_UPDATE_START:
        return {
          ...state,
          isFetching:true,
          order:action.order
      }
      case OrderActionTypes.ORDER_UPDATE_SUCCESS:
        return {
          ...state,
          isFetching:false
      }
      case OrderActionTypes.ORDER_UPDATE_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
      case OrderActionTypes.CREATE_NEW_ORDER_START:
        return {
          ...state,
          isFetching:false,
          isCart:action.payload
      }
      case OrderActionTypes.CREATE_NEW_ORDER_SUCCESS:
        return {
          ...state,
          isFetching:false
      }
      case OrderActionTypes.CREATE_NEW_ORDER_FAILURE:
        return {
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
      

    default:
      return state;
  }
}

export default ordersReducer