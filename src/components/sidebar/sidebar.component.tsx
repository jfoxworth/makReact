
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

// The imported components
import SidebarMenuItem from './sidebarMenuItem.component';
import SidebarUser from './sidebarUser.component';

// Static objects to populate the side bar
const menuOptions = [
    {
        title : 'My Profile',
        link : '/profile',
        icon : 'UserAstronaut',
        loginNeeded : true,
				anonNeeded : false,
    },
    {
        title : 'Catalog',
        link : '/catalog',
        icon : 'Tag',
        loginNeeded : false,
				anonNeeded : false,
    },
    {
        title : 'My Projects',
        link : '/projects',
        icon : 'List',
        loginNeeded : true,
				anonNeeded : false,
    },
    {
        title : 'Design Studio',
        link : '/designStudio',
        icon : 'Cogs',
        loginNeeded : false,
				anonNeeded : false,
    },
    {
        title : 'Support',
        link : '/support',
        icon : 'InfoCircle',
        loginNeeded : false,
				anonNeeded : false,
    },
    {
			title : 'Login / Register',
			link : '/login',
			icon : 'UserAstronaut',
			loginNeeded : false,
			anonNeeded : true,
		}
];

type propsObj = {
  currentUser:any
}



const Sidebar:FC<propsObj> = ({currentUser}):ReactElement => {

    const handleSignOut = ()=>{
        signOutStart();
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
																 key={'sidebarMenu'+index} />
							))
						}
					</ul>

					<SidebarUser currentUser={currentUser} handleSignOut={handleSignOut} />

				</div>
			</div>

    )
}

export default Sidebar;
