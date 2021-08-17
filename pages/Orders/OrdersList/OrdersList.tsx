
// Standard React items
import { FC, ReactElement} from 'react';

// Redux Items
import { useSelector } from 'react-redux';
import { selectProjects } from '../../../src/redux/projects/projects.selectors';

// Models
import makOrder from '../../../src/types/makOrder';
import makProject from '../../../src/types/makProject';

// Other components
import OrderItem from './OrderItem';

interface propType {
  orders: makOrder[];
}

const OrdersList:FC<propType> = ({orders}):ReactElement => {

  const projects = useSelector(selectProjects);

  return(

    <>
    { projects.projects.length>0 &&

      <div id="orders-main" className="columns is-account-grid is-multiline">

        <div className="column is-12">
          {
            orders.map((order, index)=>
              <OrderItem order={order} key={`orderitem${index}`} projects={projects.projects}/>
            )
          }
        </div>

      </div>
    }
    </>
  )
}


export default OrdersList