
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Models
import makOrder from '../../../src/types/makOrder';


interface CartProps {
  order : makOrder;
}

const CartSummary:FC<CartProps> = ({order}):ReactElement => {

  return(

    <div className="flat-card cart-order-summary">

      <div className="button-wrap">

        <div className="summary-header">
            <i data-feather="shopping-cart"></i>
            <div><var id="cart-page-count">5</var> <span>Item(s) in Cart</span></div>
        </div>

        <div className="cart-summary-list">

          <div className="summary-item">
              <span>Subtotal</span>
              <span id="cart-summary-subtotal" className="amount">0.00</span>
          </div>

          <div className="summary-item">
              <span>Taxes</span>
              <span id="cart-summary-taxes" className="amount">0.00</span>
          </div>

          <div className="summary-item">
              <span>Shipping</span>
              <span id="cart-summary-shipping" className="amount">0.00</span>
          </div>

          <div className="summary-item is-bold">
              <span>Total</span>
              <span id="cart-summary-total" className="amount">0.00</span>
          </div>

        </div>

        <button id="init-checkout"
            className="button is-fullwidth feather-button is-bold primary-button raised is-rounded">Checkout</button>

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


export default CartSummary