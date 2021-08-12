
// Standard React Items
import {useEffect} from 'react';
import type { AppProps } from 'next/app';

// Redux Items
import { wrapper } from '../src/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../src/redux/user/user.selector';
import { checkUserSession } from '../src/redux/user/user.actions';
import { fetchDesignsStart } from '../src/redux/designs/designs.actions';

// CSS Imports
import '../styles/globals.css';
import 'bulma';
import 'bulma-tooltip';

// Components
import Layout from './Layout/Layout';


function App({ Component, pageProps }: AppProps) {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=>{
    dispatch(checkUserSession());
    dispatch(fetchDesignsStart());
  }, [dispatch])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}
export default wrapper.withRedux(App);
