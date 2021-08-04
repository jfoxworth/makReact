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

// Standard React Items
import React from 'react';
import {useEffect, FC, ReactElement} from 'react';

// React Redux Items
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../redux/user/user.selector';
import { checkUserSession } from '../redux/user/user.actions';

// Components
import Sidebar from './sidebar/sidebar.component';


const Layout:FC = ({ children }):ReactElement => {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=>{
    dispatch(checkUserSession());
  }, [])

 
  return(
    <>

      <main >
        <Sidebar currentUser={user.currentUser} />
        <div className="shop-wrapper">            
          <div className="section">      
            <div className="container">
              {children}
            </div>
          </div>
        </div>
      </main>

    </>
   );
 }
  
 export default Layout;
 