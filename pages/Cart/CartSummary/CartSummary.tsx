
// Standard React items
import React, { FC, ReactElement, useEffect } from 'react';
import styled from 'styled-components';

// Redux items
import { useDispatch } from 'react-redux';
import { orderUpdateStart, createNewOrderStart } from '../../../src/redux/orders/orders.actions';

// Models
import makOrder from '../../../src/types/makOrder';

// Functions
import formatMoney from '../../../src/functions/formatMoney';


interface CartProps {
  order : makOrder;
}

const CartSummary:FC<CartProps> = ({order}):ReactElement => {

  let totalCost = 0;
  order.items.forEach(item=>{
    totalCost=totalCost+item.price;
  });
  let taxes = totalCost * 0.0825;
  let shipping =  order.items.length * 50;
  let customerCost = totalCost + taxes + shipping;

  const dispatch = useDispatch();

  const clickHandler = (thisOrder:makOrder) => {
    dispatch(orderUpdateStart({...thisOrder, isCart:false, stage:'INITIAL_DESIGN'}));
    dispatch(createNewOrderStart({isCart:true, stage:'CART'}));
  }



  return(

    <div className="flat-card cart-order-summary">

      <div className="button-wrap">

        <div className="summary-header">
            <i data-feather="shopping-cart"></i>
            <div><var id="cart-page-count">{order.items.length}</var> <span>Item(s) in Cart</span></div>
        </div>

        <div className="cart-summary-list">

          <div className="summary-item">
              <span>Subtotal</span>
              <span id="cart-summary-subtotal" className="amount">{formatMoney(totalCost)}</span>
          </div>

          <div className="summary-item">
              <span>Taxes</span>
              <span id="cart-summary-taxes" className="amount">{formatMoney(taxes)}</span>
          </div>

          <div className="summary-item">
              <span>Shipping</span>
              <span id="cart-summary-shipping" className="amount">{formatMoney(shipping)}</span>
          </div>

          <div className="summary-item is-bold">
              <span>Total</span>
              <span id="cart-summary-total" className="amount">{formatMoney(customerCost)}</span>
          </div>

        </div>

        <button 
          id="init-checkout"
          className="button is-fullwidth feather-button is-bold primary-button raised is-rounded"
          onClick={()=>clickHandler(order)}>
          Proceed with Order
        </button>

        <button id="update-cart-page"
            className="button is-fullwidth feather-button is-bold secondary-button raised is-rounded is-hidden">Update
            Cart</button>

      </div>

    </div>
    
  )
}


const StyledNoCart = styled.div`
  font-size:2em;
  margin:auto;
`;


export default React.memo(CartSummary)