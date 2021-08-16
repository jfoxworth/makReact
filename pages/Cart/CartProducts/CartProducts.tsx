
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Models
import makVersion from '../../../src/types/makVersion';
import makOrder from '../../../src/types/makOrder';

// Components
import CartItem from '../CartItem';


interface CartProps {
  cart: makOrder
  items: makVersion[];
}

const CartProducts:FC<CartProps> = ({cart, items}):ReactElement => {

  return(

    <div className="flat-card is-auto cart-card product-container" data-product-id="">
      <ul className="cart-content">
      {
        items.map((item:makVersion) => <CartItem cart={cart} item={item} key={`cartitem${item.id}`} />)
      }
      </ul>
    </div>

  )
}


const StyledNoCart = styled.div`
  font-size:2em;
  margin:auto;
`;


export default CartProducts