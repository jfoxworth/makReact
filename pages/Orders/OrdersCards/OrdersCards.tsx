
// Standard React items
import { FC, ReactElement} from 'react';

// Redux related items
import { useSelector } from 'react-redux';
import { selectOrders } from '../../../src/redux/orders/orders.selectors';

// Models
import makOrder from '../../../src/types/makOrder';

// Other components
import OrderCard from './OrderCard';

interface propType {
  orders: makOrder[];
}

const OrdersCards:FC<propType> = ({orders}):ReactElement => (

  <div id="orders-main" className="columns is-account-grid is-multiline">
    {
      orders.map((order, index)=>
        <OrderCard order={order} key={`ordercard${index}`} />
      )
    }
  </div>
    
)



export default OrdersCards