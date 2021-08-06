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
import { ReactElement } from 'react';

// Models
import makProject from '../../../types/makProject';
import makDesign from '../../../types/makDesign';

// Hooks
import useFirestoreImage from '../hooks/useFirestoreImage';

// Components
import Image from 'next/image';


type propItems = {
  thisProject:makProject,
  thisDesign:makDesign
}

const ProductListImage = ({thisProject, thisDesign}:propItems):ReactElement => {

  const imagePath = useFirestoreImage(thisDesign.marketplace.images.filter((image:any)=>image.mainImage)[0].path);

  return (
    <>
    { imagePath &&
      <span className="image">
        <Image src={imagePath} width={"100px"} height={"100px"} alt={"Product Image"}/>
      </span>
    }
    </>
  )
}

export default ProductListImage


