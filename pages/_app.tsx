import {useEffect} from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '../src/redux/store';
import '../styles/globals.css';
import Layout from '../src/components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../src/redux/user/user.selector';
import { checkUserSession } from '../src/redux/user/user.actions';
import { fetchDesignsStart } from '../src/redux/designs/designs.actions';
import 'bulma';
import 'bulma-tooltip';


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
