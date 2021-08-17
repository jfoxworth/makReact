
// Standard React items
import { FC, ReactElement} from 'react';

// Models
import makOrder from '../../../../src/types/makOrder';
import { ORDERS_OBJ } from '../../../../src/types/makOrder';

// Components
import FaIcon from '../../../../src/components/FaIcon';
import Link from 'next/link';


interface propType {
  order: makOrder;
}

const OrdersCard:FC<propType> = ({order}):ReactElement => (

  <div className="column is-4">

    <div className="flat-card order-card has-popover-top">

        <div className="order-info">
            <span>
              <Link href={`/order/${order.id}`}><a>Order-{order.dateCreated}</a></Link>
            </span>
            <span className="tag" style={{backgroundColor:ORDERS_OBJ.colors[order.stage], color:'#EDEDED'}}>{ORDERS_OBJ.stages[order.stage]}</span>
        </div>

        <div className="circle-chart-wrapper">

            <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle-chart-background" stroke="#efefef" strokeWidth="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                <circle className="circle-chart-circle" stroke={ORDERS_OBJ.colors[order.stage]} strokeWidth="2" strokeDasharray={`${ORDERS_OBJ.completion[order.stage]},100`} strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
            </svg>

            <div className="chart-icon">
                <FaIcon icon={ORDERS_OBJ.icons[order.stage]} />
            </div>

            <div className="ring-title has-text-centered">
                <span>{ORDERS_OBJ.completion[order.stage]}% Complete</span>
            </div>

        </div>

    </div>

  </div>

)



export default OrdersCard