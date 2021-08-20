
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
import OrderHeader from './OrderHeader';
import OrderDetails from './OrderDetails';
import Tile from '../../src/components/Tile';
import AddressTile from '../../src/components/AddressTile';
import OrderPaymentInfo from './OrderPaymentInfo/OrderPaymentInfo';
import OrderItemList from './OrderItemList';

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

					<div id="order-details" className="section">

						<div className="container">

							<div className="columns account-header">
								
								<div className="column main-column is-tablet-landscape-padded">
								
									<OrderHeader thisOrder={thisOrder} />

									<div className="order-details-wrap">

										<OrderDetails thisOrder={thisOrder} />
										
										<div className="order-stats">
											<div className="columns">
												<div className="column is-4">
													<Tile title={'Payment'} icon={'CreditCard'} header={'Payment'} subtext={'Paid'} text={'Credit Card'} />
												</div>
												<div className="column is-4">
													<Tile title={'Shipping'} icon={'Truck'} header={'Shipping'} subtext={'UPS'} text={'Tracking Number : '} />
												</div>
												<div className="column is-4">
													<Tile title={'Status'} icon={ORDERS_OBJ.icons[thisOrder.stage]} header={'Status'} subtext={ORDERS_OBJ.stages[thisOrder.stage]} text={'View Invoice'} />
												</div>
											</div>
										</div>

										<div className="order-body">
											<div className="columns">
												<div className="column is-8">

													<OrderItemList thisOrder={thisOrder} projects={projects} />
													<OrderPaymentInfo thisOrder={thisOrder} />

												</div>

												<div className="column is-4">

													<AddressTile title={'Shipping Address'} 
																			street={thisOrder.shippingAddress.streetAddress} 
																			citystatezip={`${thisOrder.shippingAddress.city}, ${thisOrder.shippingAddress.state} ${thisOrder.shippingAddress.zip}`} 
																			country={thisOrder.shippingAddress.country} />

													<AddressTile title={'Billing Address'} 
																			street={thisOrder.billingAddress.streetAddress} 
																			citystatezip={`${thisOrder.billingAddress.city}, ${thisOrder.billingAddress.state} ${thisOrder.billingAddress.zip}`} 
																			country={thisOrder.billingAddress.country} />

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
					</div>
				</div>
			}
		</>
    

    


  )

}



export default OrderId