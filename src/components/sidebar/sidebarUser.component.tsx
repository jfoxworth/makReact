
/*
*
*   
*
*/


// Standard React items
import { FC, ReactElement } from 'react';

// Import the hook for images
import useFirestoreImage from '../shared/hooks/useFirestoreImage';

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
