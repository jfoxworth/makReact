
// Standard React items
import { FC, ReactElement} from 'react';
import Image from 'next/image';

// Models
import makOrder from '../../../src/types/makOrder';

// Hooks
import useTimeDate from '../../../src/components/Hooks/useTimeDate';

interface thisProps {
  thisOrder : makOrder  
}

const OrderDetails = ({thisOrder}:thisProps):ReactElement => {

  return(
    
    <div className="order-details-header">
        <div className="left">
            <span id="order-details-id">ORDER <var>{thisOrder.dateCreated}</var></span>
            <span id="order-details-date">Issued on <var>{useTimeDate(thisOrder.dateCreated, '')}</var></span>
        </div>
        <div className="right">
          <Image src={'http://via.placeholder.com/250x250'} width={'250px'} height={'250px'} alt={''} />
          <div className="inner-meta">
              <span>Handled by</span>
              <span id="order-details-contact">{thisOrder.handler}</span>
          </div>
        </div>
    </div>
    
  )

}



export default OrderDetails