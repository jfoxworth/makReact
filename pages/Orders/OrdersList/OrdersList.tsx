
// Standard React items
import { FC, ReactElement} from 'react';

// Models
import makOrder from '../../../src/types/makOrder';

// Other components
import OrderItem from './OrderItem';

interface propType {
  orders: makOrder[];
}

const OrdersList:FC<propType> = ({orders}):ReactElement => (

  <div id="orders-main" className="columns is-account-grid is-multiline">

    <div className="column is-12">
      <OrderItem order={{} as makOrder}/>
    </div>

  </div>

)


export default OrdersList