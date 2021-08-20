
// Standard React items
import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';

// Models
import makOrder from '../../src/types/makOrder';

// Redux related items
import { selectOrders } from '../../src/redux/orders/orders.selectors';
import { selectProjects } from '../../src/redux/projects/projects.selectors';
import { useSelector, useDispatch } from 'react-redux';

// Components
import HeaderTitle from '../../src/components/HeaderTitle';
import OrderItemList from './OrderItemList';
import OrderSide from './OrderSide';
import OrderStep from './OrderStep';

// Models
import { ORDERS_OBJ } from '../../src/types/makOrder';
import makProject from '../../src/types/makProject';

const OrderId:FC = ():ReactElement => {

  let dispatch=useDispatch();
  let orderData = useSelector(selectOrders);
  let orders =  orderData.orders;
  let thisOrder =  {} as makOrder;
	let projectData = useSelector(selectProjects);
	let projects = projectData.projects;
	let thisProject = {} as makProject;

	// Pull the product ID from the URL
  const router = useRouter()
  const { OrderId } = router.query;


  if ( (orders.length>0) && ( projects.length>0))
  {
    thisOrder = orders.filter((order:makOrder)=>order.id==OrderId)[0];
	} 

  return(
    
    <>
      {
        !thisOrder.id &&
        <HeaderTitle text={`Loading`} />
      }

			{
				thisOrder.id && 

				<div id="checkout-1" className="section no-padding">
					<OrderStep thisOrder={thisOrder} />
					<div className="checkout-wrapper" data-checkout-step="1">
		
						<div className="checkout-main">
							<div className="checkout-container">
								<OrderItemList thisOrder={thisOrder} projects={projects} />
							</div>
						</div>
						<OrderSide thisOrder={thisOrder} />
					</div>
				</div>
			}
		</>
    

    


  )

}



export default OrderId