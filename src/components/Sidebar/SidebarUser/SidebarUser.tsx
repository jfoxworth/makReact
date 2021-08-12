
/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*
*/


// Standard React items
import { FC, ReactElement } from 'react';

// Import the hook for images
import useFirestoreImage from '../../Hooks/useFirestoreImage';

// Components
import Link from 'next/link';
import Image from 'next/image';


type propsObj = {
  currentUser:any,
  handleSignOut:any
}


const SidebarUser:FC<propsObj> = ({currentUser, handleSignOut}):ReactElement => {

  const imageString = useFirestoreImage(currentUser ? `/profile/${currentUser?.id}.${currentUser?.imageType}` :
                                                      `/profile/default.jpeg`);

  return (

    <ul className="user-profile">
        <li>
            <a>
              <Image src={imageString ? imageString : '/public/static.jpg'} width="40px" height="40px" alt="Picture of the author" />
              <span className="user">
                      <span id="quickview-username">{currentUser ? currentUser.displayName : "Guest"}</span>
                      { currentUser && <span id="quickview-cart-count" onClick={handleSignOut} ><small>Signout</small></span> }
              </span>
            </a>
        </li>
    </ul>

  )
}


export default SidebarUser
