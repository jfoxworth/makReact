
// Standard React items
import { ReactElement} from 'react';

// Models
import makOrder from '../../../src/types/makOrder';
import { ORDERS_OBJ } from '../../../src/types/makOrder';

interface thisProps {
  thisOrder : makOrder  
}

const OrderStep = ({thisOrder}:thisProps):ReactElement => {

  return(
    <div className="action-bar is-centered">
      <div className="steps-wrapper">
        <ol className="step-list">
          <li className={`${ORDERS_OBJ.step[thisOrder.stage] >= 1 ? 'active' : ''}`}></li>
          <li className={`${ORDERS_OBJ.step[thisOrder.stage] >= 2 ? 'active' : ''}`}></li>
          <li className={`${ORDERS_OBJ.step[thisOrder.stage] >= 3 ? 'active' : ''}`}></li>
          <li className={`${ORDERS_OBJ.step[thisOrder.stage] >= 4 ? 'active' : ''}`}></li>
          <li className={`${ORDERS_OBJ.step[thisOrder.stage] >= 5 ? 'active' : ''}`}></li>
          <li className={`${ORDERS_OBJ.step[thisOrder.stage] >= 6 ? 'active' : ''}`}></li>
          <li className={`${ORDERS_OBJ.step[thisOrder.stage] >= 7 ? 'active' : ''}`}></li>
        </ol>
      </div>
    </div>
    
  )

}



export default OrderStep