
// Standard React items
import {useEffect, FC, ReactElement} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import 'bulma';
import 'bulma-tooltip';


const Home:FC<any> = ():ReactElement => {

  const dispatch = useDispatch();

  const router = useRouter();
  useEffect(()=>{
    router.push('/catalog');
  }, [router])

  return(

    <>

      <Head>
        <title>{'Mak Studio'}</title>
      </Head>


    </>

  )
}

export default Home

