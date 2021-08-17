
// Standard React items
import { FC, ReactElement} from 'react';

// Models
import makOrder from '../../../../src/types/makOrder';
import makProject from '../../../../src/types/makProject';
import { ORDERS_OBJ } from '../../../../src/types/makOrder';

// Components
import FaIcon from '../../../../src/components/FaIcon';

// Hooks
import useTimeDate from '../../../../src/components/Hooks/useTimeDate';

// Functions
import formatMoney from '../../../../src/functions/formatMoney';

// Components
import Link from 'next/link';

interface propType {
  order: makOrder;
	projects:makProject[]
}

const OrderItem:FC<propType> = ({order, projects}):ReactElement => (

  <div className="order-long-card">

    <div className="left-side">

			<div className="order-header">
					<h3>ORDER {order.dateCreated}</h3>
					<span className="date">{useTimeDate(order.dateCreated, '')}</span>
					<span className="tag" style={{backgroundColor:ORDERS_OBJ.colors[order.stage], color:'#EDEDED'}}>{ORDERS_OBJ.stages[order.stage]}</span>
					<span className="order-total">365.45</span>
			</div>

			<div className="ordered-products has-slimscroll">

				{
					order.items.map((item, index)=>(
            <div className="ordered-product" key={`orderitem${index}`}>
                <img src="http://via.placeholder.com/250x250" data-demo-src="assets/img/products/red-seat.png" alt="" />
                <div className="product-meta">
                    <span className="name">{projects.filter((project)=>item.projectId==project.id)[0].name}</span>
                    <span className="price">
                        <span>{formatMoney(item.price)}</span>
                        <span>x <var>1</var></span>
                    </span>
                </div>
                <div className="product-subtotal">
                    <span>Total</span>
                    <span>{formatMoney(item.price)}</span>
                </div>
            </div>

					))
				}
			
			</div>

		</div>

      <div className="right-side">

				<img className="side-bg" src="assets/img/logo/nephos-greyscale.svg" alt="" />
				<div className="meta-header">
						<img src="http://via.placeholder.com/250x250" data-demo-src="assets/img/avatars/janet.jpg" alt="" />
						<div className="inner-meta">
								<span>Handled by</span>
								<span>Janet Smith</span>
						</div>
						<a className="support">
								<FaIcon icon={'LifeRing'} />
						</a>
				</div>

				<div className="meta-actions">
					<Link href={`/order/${order.id}`}>
						<a className="button is-rounded is-fullwidth primary-button raised">Order Details</a>
					</Link>
					<Link href={`/invoice/${order.id}`}>
						<a className="button is-rounded is-fullwidth grey-button rounded">Invoice</a>
					</Link>
				</div>
      </div>
  </div>

)



export default OrderItem