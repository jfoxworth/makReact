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
import { FC, ReactElement} from 'react';
import Image from 'next/image';

// Hooks
import useFirestoreImage from '../../../src/components/Hooks/useFirestoreImage';


interface propType {
  image:string
}

const CatalogImage:FC<propType> = ({image}:propType):ReactElement => {

  const fireImage = useFirestoreImage(image);

  return(
     
    <>
      { fireImage &&
        <Image src={fireImage} layout={"fill"} alt={"Carousel Image"}/>
      }
    </>
  )

}



export default CatalogImage