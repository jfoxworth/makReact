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
*   This is the primary component used for inputs within the app.
*   It takes in a handleChange function and other items that may
*   be needed for the input. 
*
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

// Components
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