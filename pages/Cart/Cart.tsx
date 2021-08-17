
// Standard React items
import React,{ FC, ReactElement} from 'react';
import styled from 'styled-components';

// Models
import makOrder from '../../src/types/makOrder';

// Redux related items
import { useSelector } from 'react-redux';
import { selectOrders } from '../../src/redux/orders/orders.selectors';


// Other components
import HeaderTitle from '../../src/components/HeaderTitle';
import FaIcon from '../../src/components/FaIcon';
import CartBody from './CartBody';

const Cart:FC = ():ReactElement => {

  const orders = useSelector(selectOrders);
  const isThereCart = orders?.orders.filter((order:makOrder) => order.isCart ).length > 0;
  const myCart = orders?.orders.filter((order:makOrder) => order.isCart )[0];


  return(
    
    <div className="columns category-header">

      <div className="column main-column is-tablet-landscape-padded">

        <HeaderTitle text={"My Cart"} >
          <FaIcon icon={'CartPlus'} />
        </HeaderTitle>

        {
          isThereCart &&
          <CartBody cart={myCart} />
        }

      </div>

    </div>
    
  )
}


const StyledNoCart = styled.div`
  font-size:2em;
  margin:auto;
`;


export default React.memo(Cart)