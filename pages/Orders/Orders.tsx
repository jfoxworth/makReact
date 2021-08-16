
// Standard React items
import { FC, ReactElement, useState } from 'react';


// Redux related items
import { useSelector } from 'react-redux';
import { selectOrders } from '../../src/redux/orders/orders.selectors';


// Other components
import HeaderTitle from '../../src/components/HeaderTitle';
import FaIcon from '../../src/components/FaIcon';
import OrderStyle from './OrderStyle';
import OrdersList from './OrdersList';
import OrdersCards from './OrdersCards';

const Orders:FC = ():ReactElement => {

  const orders = useSelector(selectOrders);

  const [ view, setView ] = useState('grid');

  return(
    
    <div className="columns category-header">

      <div className="column main-column is-tablet-landscape-padded">

        <HeaderTitle text={"Orders"} >
          <FaIcon icon={'Truck'} />
        </HeaderTitle>

        <OrderStyle setView={setView} />

        {
          orders.orders.length > 0 &&
          view == 'grid' && 
          <OrdersCards orders={orders.orders} />
        }

        {
          orders.orders.length > 0 &&
          view == 'list' && 
          <OrdersList orders={orders.orders} />
        }

      </div>

    </div>
    
  )

}

export default Orders
