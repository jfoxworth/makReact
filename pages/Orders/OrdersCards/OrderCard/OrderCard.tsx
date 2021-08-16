
// Standard React items
import { FC, ReactElement} from 'react';

// Models
import makOrder from '../../../../src/types/makOrder';

// Components
import FaIcon from '../../../../src/components/FaIcon';


interface propType {
  order: makOrder;
}

const OrdersCard:FC<propType> = ({order}):ReactElement => (

  <div className="column is-4">

    <div className="flat-card order-card has-popover-top">

        <div className="order-info">
            <span><a href="invoice.html" onClick={()=>{}}>ORDER-46895</a></span>
            <span className="tag is-primary">Shipping</span>
        </div>

        <div className="circle-chart-wrapper">

            <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle-chart-background" stroke="#efefef" strokeWidth="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                <circle className="circle-chart-circle" stroke="#0023ff" strokeWidth="2" strokeDasharray="66,100" strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
            </svg>

            <div className="chart-icon">
                <FaIcon icon={'Truck'} />
            </div>

            <div className="ring-title has-text-centered">
                <span>66% Complete</span>
            </div>

        </div>

    </div>

  </div>

)



export default OrdersCard