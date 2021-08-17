
// Standard React items
import React, { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Models
import makOrder from '../../../src/types/makOrder';
import CartProducts from '../CartProducts';

// Components
import CartSummary from '../CartSummary';


interface CartProps {
  cart : makOrder;
}

const CartBody:FC<CartProps> = ({cart}):ReactElement => {

  return(

    <div className="columns is-account-grid is-multiline">

      {
        cart.items.length == 0 &&
        <>
          <div className={"column is-2"}></div>
            <div className={"column is-8"}>
              <div className="flat-card is-auto cart-card product-container" data-product-id="">
                <div className="cart-content">There are no items in your cart</div>
              </div>
            <div className={"column is-2"}></div>
          </div>
        </>
      }

      {
        cart.items.length > 0 &&
        <>
          <div id="cart-page-products" className="column is-8">
            <CartProducts cart={cart} items={cart.items} />
          </div>

          <div className="column is-4">
            <CartSummary order={cart}/>
          </div>
        </>
      }

    </div>
    
  )
}


export default React.memo(CartBody)