/*
*
*   This component takes a string and uses the firestore
*   hook to download the appropriate address. This is 
*   necessary because hooks cannot be placed into a call
*   back and I need to break out separate images on occasion.
*
*/

// Standard React items
import { FC, ReactElement} from 'react';

// Hook for image
import useFirestoreImage from '../hooks/useFirestoreImage';

// Next Items
import Image from 'next/image';

const ImageCreator:FC<any> = ({imageText, altText}:{imageText:string, altText:string}):ReactElement => {

  let fbLink = useFirestoreImage(imageText);

  return(
    
    <>
    { fbLink &&
      <Image src={fbLink} layout={"fill"} alt={altText}/>
    }
    </>
  )

}



export default ImageCreator