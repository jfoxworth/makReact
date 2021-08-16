
/*
*
*   This is the main file for the side bar component. The side bar
*   is present 100% of the time and shows the logo,  a menu for the user
*   to click on, and the user icon and name. The menu is dependent upon the login status of the
*   user.
*
*   An array is set with the appropriate menu options and this code loops
*   through that array and calls the proper subcomponents.
*
*   
*
*/


// Standard React items
import { FC, ReactElement } from 'react';
import Image from 'next/image';

// Redux related items
import { signOutStart } from '../../redux/user/user.actions';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../redux/orders/orders.selectors';

// The imported components
import SidebarMenuItem from './SidebarMenuItem/SidebarMenuItem';
import SidebarUser from './SidebarUser/SidebarUser';

// Models
import makOrder from '../../types/makOrder';

// Static objects to populate the side bar
const menuOptions = [
    {
        title : 'My Profile',
        link : '/Profile',
        icon : 'UserAstronaut',
        loginNeeded : true,
				anonNeeded : false,
				badge:false,
				badgeNum:0,
			},
    {
        title : 'Catalog',
        link : '/Catalog',
        icon : 'Tag',
        loginNeeded : false,
				anonNeeded : false,
				badge:false,
				badgeNum:0,
			},
    {
        title : 'My Projects',
        link : '/Projects',
        icon : 'List',
        loginNeeded : true,
				anonNeeded : false,
				badge:false,
				badgeNum:0,
			},
    {
        title : 'Design Studio',
        link : '/DesignStudio',
        icon : 'Cogs',
        loginNeeded : false,
				anonNeeded : false,
				badge:false,
				badgeNum:0,
			},
    {
			title : 'Cart',
			link : '/Cart',
			icon : 'CartPlus',
			loginNeeded : true,
			anonNeeded : false,
			badge:true,
			badgeNum:0,
		},
    {
			title : 'Orders',
			link : '/Orders',
			icon : 'TruckMoving',
			loginNeeded : true,
			anonNeeded : false,
			badge:false,
			badgeNum:0,
		},
    {
        title : 'Support',
        link : '/Support',
        icon : 'InfoCircle',
        loginNeeded : false,
				anonNeeded : false,
				badge:false,
				badgeNum:0,
			},
    {
			title : 'Login / Register',
			link : '/LoginRegister',
			icon : 'UserAstronaut',
			loginNeeded : false,
			anonNeeded : true,
			badge:false,
			badgeNum:0,
		}
];

type propsObj = {
  currentUser:any
}



const Sidebar:FC<propsObj> = ({currentUser}):ReactElement => {

    const handleSignOut = ()=>{
        signOutStart();
    }

		const orders = useSelector(selectOrders);

		if (orders.orders.length>0) {
			let cart =  orders.orders.filter((order:makOrder)=>order.isCart)[0];
			menuOptions[4].badgeNum = cart.items.length;
		}

    return (

      <div className="shop-quickview has-background-image" 
					 data-background="http://via.placeholder.com/1280x853" 
					 data-demo-background="assets/img/bg/sidebar.jpeg">
           
				<div className="inner">

					<div className="quickview-header is-horizontal-center is-fullwidth">
              <Image src={'/logoWhite.png'} width="120px" height="40px" alt="Picture of the author" />
					</div>

					<ul className="shop-menu">
						{
							menuOptions.map((menuItem, index) => (
								( ( currentUser && menuItem.loginNeeded && !menuItem.anonNeeded) || 
								  (!menuItem.loginNeeded && !menuItem.anonNeeded) ||
								( (!currentUser && menuItem.anonNeeded) || ( !currentUser && !menuItem.loginNeeded))) &&
								<SidebarMenuItem title={menuItem.title} 
																 link={menuItem.link} 
																 icon={menuItem.icon}
																 key={'sidebarMenu'+index} 
																 badge={menuItem.badge}
																 badgeNum={menuItem.badgeNum }/>
							))
						}
					</ul>

					<SidebarUser currentUser={currentUser} handleSignOut={handleSignOut} />

				</div>
			</div>

    )
}

export default Sidebar;
