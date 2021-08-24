
// Standard React items
import { FC, ReactElement, useState } from 'react';
import { useRouter } from 'next/router';
import { selectUser } from '../../src/redux/user/user.selector';

// Models
import makOrder from '../../src/types/makOrder';

// Redux related items
import { selectOrders } from '../../src/redux/orders/orders.selectors';
import { selectProjects } from '../../src/redux/projects/projects.selectors';
import { useSelector, useDispatch } from 'react-redux';

// Components
import HeaderTitle from '../../src/components/HeaderTitle';
import Stage1 from './Stage1';
import OrderSide from './OrderSide';
import OrderStep from './OrderStep';


const OrderId:FC = ():ReactElement => {

  let dispatch=useDispatch();
  let orderData = useSelector(selectOrders);
  let orders =  orderData.orders;
  let thisOrder =  {} as makOrder;
	let projectData = useSelector(selectProjects);
	let projects = projectData.projects;

	// Pull the product ID from the URL
  const router = useRouter()
  const { OrderId } = router.query;


  if ( (orders.length>0) && ( projects.length>0))
  {
    thisOrder = orders.filter((order:makOrder)=>order.id==OrderId)[0];
	} 


	const [viewStage, setViewStage] = useState(1);
	const user = useSelector(selectUser);

  return(
    
    <>
      {
        (!thisOrder.id || !user) &&
        <HeaderTitle text={`Loading`} />
      }

			{
				thisOrder.id && user &&

				<div id="checkout-1" className="section no-padding">
					<OrderStep thisOrder={thisOrder} />
					<div className="checkout-wrapper" data-checkout-step="1">
						<div className="checkout-main">
							<div className="checkout-container">
								<HeaderTitle text={`Order - ${thisOrder.dateCreated}`} />

								{
									viewStage == 1 && <Stage1 thisOrder={thisOrder} projects={projects} user={user.currentUser} />
								}
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