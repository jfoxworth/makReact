
// Standard React items
import {useEffect, FC, ReactElement} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';


const Home:FC = ():ReactElement => {

  const router = useRouter();
  useEffect(()=>{
    router.push('/Catalog');
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

