
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