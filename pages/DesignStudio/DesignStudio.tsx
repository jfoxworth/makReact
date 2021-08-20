/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*/
// Standard React items
import {useEffect, FC, ReactElement} from 'react';


// Redux related items
import { useRouter } from 'next/router';


// Other components
import HexMenu from './HexMenu';


const DesignStudio:FC = ():ReactElement => {

  const router = useRouter();

  useEffect(()=>{
    router.push('/DesignStudio/jBRzSildNc16fQjAmLkh');
  },[router])

  return(
    
    <>
    </>
    
  )

}



export default DesignStudio