import React from 'react';
import {useEffect, FC, ReactElement} from 'react';
import Sidebar from './sidebar/sidebar.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../redux/user/user.selector';
import { checkUserSession } from '../redux/user/user.actions';
 
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
 